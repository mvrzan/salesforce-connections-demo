import useSalesforceInteractions from "./useSalesforceInteractions";
import useBearStore from "./useBearStore";

const useLoadEmbeddedChat = () => {
  const { personalizationProductRecommendations } = useSalesforceInteractions();
  const updateRecommendedProducts = useBearStore((state) => state.updateRecommendedProducts);
  const personalizationEndpoint = import.meta.env.VITE_PERSONALIZATION_ENDPOINT;

  const configureAgentforceScriptUrl = (
    orgId: string,
    scriptUrl: string,
    instanceUrl: string,
    embeddingUrl: string,
    embeddingApiName: string
  ) => {
    if (window.embeddedservice_bootstrap) {
      console.log("🦾 Agentforce already detected. Skipping setup!");
      return;
    }

    const initAgentforceAndSetup = () => {
      try {
        console.log("🤖 Agentforce script has loaded. Initializing Agentforce...");

        window.embeddedservice_bootstrap.settings.language = "en_US";
        window.embeddedservice_bootstrap.init(orgId, embeddingApiName, embeddingUrl, {
          scrt2URL: instanceUrl,
        });

        const checkPrechatAPIReady = () => {
          if (
            window.embeddedservice_bootstrap &&
            window.embeddedservice_bootstrap.prechatAPI &&
            typeof window.embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields === "function"
          ) {
            try {
              console.log("🤖 Proceeding with prechat setup and event listener addition...");

              const deviceId = window.SalesforceInteractions.getAnonymousId();
              console.log("🤖 Attempting to set hidden prechat fields with deviceId:", deviceId);
              window.embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
                deviceId: deviceId,
              });
              console.log("🤖 Device ID successfully configured for prechat!");

              console.log("🤖 Adding messages event listener...");
              window.addEventListener("onEmbeddedMessageSent", (event) => {
                const customEvent = event as CustomEvent;
                const sender = customEvent?.detail.conversationEntry.sender.appType;
                const initialMessage =
                  JSON.parse(customEvent?.detail.conversationEntry.entryPayload).abstractMessage.staticContent.text ===
                  "Hi, I'm an AI service assistant. How can I help you?";

                if (sender !== "chatbot" || initialMessage) return;

                setTimeout(() => {
                  const getProducts = async () => {
                    const products = await personalizationProductRecommendations([personalizationEndpoint]);
                    updateRecommendedProducts(products);
                  };
                  getProducts();
                }, 100);
              });
              console.log("🤖 Event listener successfully added!");
            } catch (e) {
              console.error("❌ Error during prechat setup or event listener addition after prechatAPI ready:", e);
            }
          } else {
            console.log(
              "⏳ Agentforce prechatAPI.setHiddenPrechatFields not yet available. Will check again in 500ms..."
            );
            setTimeout(checkPrechatAPIReady, 500);
          }
        };

        console.log("🤖 Waiting for Agentforce prechatAPI to become available...");
        checkPrechatAPIReady();
      } catch (error) {
        console.error("❌ Error during Agentforce script onload or initial .init() call:", error);
      }
    };

    const loadAgentforceScript = () => {
      console.log("🤖 SalesforceInteractions ready. Proceeding to load Agentforce script.");
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.onload = initAgentforceAndSetup;
      script.onerror = () => {
        console.error("❌ Failed to load the Agentforce script from:", scriptUrl);
      };
      document.head.appendChild(script);
      console.log("🤖 Agentforce script appended to head. Waiting for it to load...");
    };

    const checkForSalesforceInteractions = () => {
      if (window.SalesforceInteractions && typeof window.SalesforceInteractions.getAnonymousId === "function") {
        console.log("🌐 Data Cloud web SDK script found and ready.");
        loadAgentforceScript();
      } else {
        console.log("⏳ SalesforceInteractions script not yet available. Will check again in 500ms...");
        setTimeout(checkForSalesforceInteractions, 500);
      }
    };

    console.log("🤖 Checking for SalesforceInteractions before loading Agentforce script...");
    checkForSalesforceInteractions();
  };

  return configureAgentforceScriptUrl;
};

export default useLoadEmbeddedChat;
