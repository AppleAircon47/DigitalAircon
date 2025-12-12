"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

export default function FindUsPage() {
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    };

    return (
        <AnimatePresence>
            <main className="min-h-screen bg-linear-to-br from-[#eef4ff] via-[#d9e8ff] to-[#bbd4ff] pt-18 pb-12 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1e40af] flex items-center justify-center gap-3">
                            <MapPin className="w-10 h-10 text-blue-400" />
                            Find Us
                        </h1>
                        <p className="text-gray-700 max-w-2xl mx-auto mt-4 text-lg sm:text-xl">
                            Visit Apple Aircon in Navi Mumbai for expert AC and appliance services. We provide repair, installation, and sales for all types of air conditioners, refrigerators, washing machines, microwave ovens, and deep freezers.
                        </p>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-blue-300/20"
                    >
                        <iframe
                            title="Apple Aircon Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3084156334367!2d73.07206217466452!3d19.05017285278392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c17aaecbfed1%3A0xe35e63b26012dd5d!2sApple%20Aircon!5e0!3m2!1sen!2sin!4v1765545562950!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </main>
        </AnimatePresence>
    );
}