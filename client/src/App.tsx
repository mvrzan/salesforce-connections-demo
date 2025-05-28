import { useEffect } from "react";
import useDataCloudScript from "./hooks/useLoadDataCloudScript";
import useLoadEmbeddedChat from "./hooks/useLoadEmbeddedChat";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import PlansOfFuture from "./components/PlansOfFuture";
import HomeTv from "./components/HomeTv";
import Discount from "./components/Discount";
import Recommendations from "./components/Recommendations";

function App() {
  const configureScriptUrl = useDataCloudScript();
  const configureAgentforceScriptUrl = useLoadEmbeddedChat();

  const dataCloudWebSdkUrl = import.meta.env.VITE_DATA_CLOUD_WEB_SDK_URL;
  const orgId = import.meta.env.VITE_CHAT_ORG_ID;
  const scriptUrl = import.meta.env.VITE_CHAT_SCRIPT_URL;
  const instanceUrl = import.meta.env.VITE_CHAT_INSTANCE_URL;
  const embeddingUrl = import.meta.env.VITE_CHAT_EMBEDDING_URL;
  const embeddingApiName = import.meta.env.VITE_CHAT_EMBEDDING_API_NAME;

  configureScriptUrl(dataCloudWebSdkUrl);

  useEffect(() => {
    configureAgentforceScriptUrl(orgId, scriptUrl, instanceUrl, embeddingUrl, embeddingApiName);
  }, [configureAgentforceScriptUrl, orgId, scriptUrl, instanceUrl, embeddingUrl, embeddingApiName]);

  return (
    <>
      <Header />
      <HeroSection />
      <Recommendations />
      <PlansOfFuture />
      <div className="w-full bg-no-repeat bg-center bg-[size:100%_auto] bg-[url('./assets/background/LineArt_lines_internet_bgTrim2.png')]">
        <HomeTv />
        <Discount />
      </div>
      <Footer />
    </>
  );
}

export default App;
