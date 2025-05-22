import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import HomeTv from "./components/HomeTv";
import Discount from "./components/Discount";
import useDataCloudScript from "./hooks/useLoadDataCloudScript";

function App() {
  const configureScriptUrl = useDataCloudScript();
  const dataCloudWebSdkUrl = import.meta.env.VITE_DATA_CLOUD_WEB_SDK_URL;

  configureScriptUrl(dataCloudWebSdkUrl);

  return (
    <>
      <Header />
      <HeroSection />
      <HomeTv />
      <Discount />
      <Footer />
    </>
  );
}

export default App;
