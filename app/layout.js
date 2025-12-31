import { Inter, Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap", // ✅ SEO & performance
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://musk-appliance-five.vercel.app"),

  title: {
    default:
      "Digital Aircon – AC & Appliance Repair, Servicing & Installation in Navi Mumbai",
    template: "%s | Digital Aircon",
  },

  description:
    "Digital Aircon offers expert repair, servicing, installation, and buying & selling of ACs, refrigerators, washing machines, microwaves, and deep freezers in Navi Mumbai. Trusted and reliable solutions for homes, offices, and industries.",

  keywords: [
    "AC repair Mumbai",
    "AC repair Navi Mumbai",
    "AC installation Mumbai",
    "AC servicing Mumbai",
    "Split AC service",
    "Window AC repair",
    "Refrigerator repair Mumbai",
    "Washing machine repair Mumbai",
    "Microwave oven repair Mumbai",
    "Deep freezer repair Mumbai",
    "PCB repair AC",
    "PCB repair refrigerator",
    "Buying and selling ACs",
    "Buying and selling refrigerators",
    "Buying and selling washing machines",
    "Buying and selling microwaves",
    "Buying and selling deep freezers",
    "New and old appliance sales Mumbai",
    "Digital Aircon",
  ],

  authors: [{ name: "Digital Aircon" }],

  alternates: {
    canonical: "https://musk-appliance.vercel.app/",
    canonical: "https://musk-appliance-five.vercel.app/",
  },

  openGraph: {
    title: "Digital Aircon – Trusted AC & Appliance Services",
    description:
      "Professional repair, servicing, installation, and buying & selling of ACs, refrigerators, washing machines, microwaves, and deep freezers in Navi Mumbai.",
    url: "https://musk-appliance.vercel.app/",
    url: "https://musk-appliance-five.vercel.app//",
    siteName: "Digital Aircon",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Aircon – AC & Appliance Repair & Services",
    description:
      "Expert repair, servicing, installation, and buying & selling of ACs, refrigerators, washing machines, microwaves, and deep freezers in Navi Mumbai.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
