export const metadata = {
  title: "Digital Aircon – AC Repair, Servicing & Installation in Navi Mumbai",
  description:
    "Digital Aircon provides expert repair, servicing, installation, and buying & selling solutions for ACs, refrigerators, washing machines, microwaves, and deep freezers across Navi Mumbai.",
};

// "use client";
import Home from "../components/Home";
import ServicesHighlight from "../components/ServicesHighlight";
import ServiceForm from "../components/ServiceForm";
import ChooseUs from "../components/ChooseUs";
import FindUs from "../components/FindUs";
import Testimonal from "../components/Testimonal";
import Floating from "../components/Floating";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <div id="servicesHighlight">
        <ServicesHighlight />
      </div>

      <ChooseUs />
      <div id="serviceForm">
        <ServiceForm />
      </div>
      <FindUs />
      <Testimonal />
      <Floating />
      <Footer />
    </>
  );
}
