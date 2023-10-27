import { useEffect } from "react";
import { useGlobalContext } from "./Context";
import HeroSection from "./components/HeroSection";

const About = () => {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, []);

  return <HeroSection />;
};

export default About;
