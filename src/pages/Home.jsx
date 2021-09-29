import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <div data-aos="fade-up">
        <Products />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
