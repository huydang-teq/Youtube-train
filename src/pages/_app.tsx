import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../Components/Layouts";
import Footer from "../Components/Footer/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <Footer/>
    </MainLayout>
  );
}

export default MyApp;
