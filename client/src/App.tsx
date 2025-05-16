import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import useDataCloudScript from "./hooks/useLoadDataCloudScript";

function App() {
  const configureScriptUrl = useDataCloudScript();
  const dataCloudWebSdkUrl = import.meta.env.VITE_DATA_CLOUD_WEB_SDK_URL;

  configureScriptUrl(dataCloudWebSdkUrl);

  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
