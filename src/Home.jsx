import { useEffect } from "react";
import { useGlobalContext } from "./Context";
import HeroSection from "./components/HeroSection";
import Services from "./Services";
// import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);
  return (
    <>
      <HeroSection />
      <Services />
      {/* <About /> */}
      <Contact />
    </>
  );
};

export default Home;
