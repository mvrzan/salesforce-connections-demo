import { writeToLocalStorage } from "../utils/localStorageUtil";

const useDataCloudScript = () => {
  const configureScriptUrl = (url: string) => {
    if (!url) return;

    const existingScript = document.querySelector('script[src*="c360a.min.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = url;

    script.onload = async () => {
      try {
        await window.SalesforceInteractions.init({
          consents: [
            {
              provider: "Salesforce Connections Personalization Demo",
              purpose: window.SalesforceInteractions.ConsentPurpose.Tracking,
              status: window.SalesforceInteractions.ConsentStatus.OptIn,
            },
          ],
        });
        console.log("Salesforce Interactions initialized");
      } catch (error) {
        console.error("Salesforce Interactions failed to initialize", error);
      }
    };

    document.head.appendChild(script);

    writeToLocalStorage("scriptUrl", url);
  };

  return configureScriptUrl;
};

export default useDataCloudScript;
