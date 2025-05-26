const useLoadEmbeddedChat = () => {
  const configureAgentforceScriptUrl = (
    orgId: string,
    scriptUrl: string,
    instanceUrl: string,
    embeddingUrl: string,
    embeddingApiName: string
  ) => {
    const script = document.createElement("script");
    script.src = scriptUrl;

    if (window.embeddedservice_bootstrap) return;

    script.onload = () => {
      try {
        console.log("🤖 Initializing Agentforce...");

        window.embeddedservice_bootstrap.settings.language = "en_US";
        window.embeddedservice_bootstrap.init(orgId, embeddingApiName, embeddingUrl, {
          scrt2URL: instanceUrl,
        });

        console.log("🤖 Agentforce successfully initialized!");
        console.log("🤖 Setting up prechat with the device ID...");

        setTimeout(() => {
          const deviceId = window?.SalesforceInteractions.getAnonymousId();

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
          });

          console.log("🤖 Event listener successfully added!");
        }, 5000);
      } catch (error) {
        console.error("❌ There was an error when initializing Agentforce:", error);
      }
    };

    document.head.appendChild(script);
  };

  return configureAgentforceScriptUrl;
};

export default useLoadEmbeddedChat;
