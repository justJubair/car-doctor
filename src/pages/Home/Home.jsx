import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Services/>
      <ContactBanner/>
    </div>
  );
};

export default Home;
 