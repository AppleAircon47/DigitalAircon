import { createMetadata } from "./lib/seo";
import Home from "../components/Home";
import ServicesHighlight from "../components/ServicesHighlight";
import ServiceForm from "../components/ServiceForm";
import ChooseUs from "../components/ChooseUs";
import FindUs from "../components/FindUs";
import Testimonal from "../components/Testimonal";
import Floating from "../components/Floating";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ✅ SEO – SERVER SIDE */
export const generateMetadata = () =>
  createMetadata({
    title: "Digital Aircon – AC Repair & Installation in Navi Mumbai",
    description:
      "Digital Aircon provides expert repair, servicing, installation, and buying & selling solutions for ACs, refrigerators, washing machines, microwaves, and deep freezers across Navi Mumbai.",
    path: "/",
  });

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
