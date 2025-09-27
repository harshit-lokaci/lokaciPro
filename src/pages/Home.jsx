// import { useContext } from "react";
// import { FaSpa, FaGift, FaStore } from "react-icons/fa";
// import AuthContext from "../store/auth-context";
// import { Link } from "react-router";
import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Services from "../components/home/Services.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import GetInTouch from "../components/home/GetInTouch.jsx";
import Footer from "../components/layout/Footer.jsx";
// import BottomStackNavigator from "../Navigator/BottomStackNavigator";

const Home = () => {
  // const authCtx = useContext(AuthContext);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <GetInTouch />
      <Footer />
      {/* <BottomStackNavigator /> */}
    </>
  );
};

export default Home;
