"use client";

import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const GOOGLE_PROFILE_URL =
    "https://www.google.com/maps/place/Apple+Aircon/@19.051273,73.069816,18.36z/data=!4m18!1m9!3m8!1s0x3be7c17aaecbfed1:0xe35e63b26012dd5d!2sApple+Aircon!8m2!3d19.0501678!4d73.0746371!9m1!1b1!16s%2Fg%2F11wfcd677f!3m7!1s0x3be7c17aaecbfed1:0xe35e63b26012dd5d!8m2!3d19.0501678!4d73.0746371!9m1!1b1!16s%2Fg%2F11wfcd677f?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";

// Time formatter
const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const days = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (days < 30) return `${days} days ago`;
    if (days < 365) return `${Math.floor(days / 30)} months ago`;
    return `${Math.floor(days / 365)} years ago`;
};

const reviews = [
    {
        name: "Jannat Shaikh",
        time: "2025-03-01T10:00:00",
        rating: 5,
        text:
            "I was very pleased with technician raza khan. He did a great job fixing my AC. He arrived on time did the job very professionally and was willing to solve all of my problems. I would definitely hire him again.",
        profileImage: "https://lh3.googleusercontent.com/a-/ALV-UjUGmilKR_yHkDHsov_IoCLHoNfrwRLpp-9wK2BYvWpTBxm_4Xyk=w90-h90-p-rp-mo-br100",
    },
    {
        name: "Vinod Yadav",
        time: "2025-02-01T10:00:00",
        rating: 5,
        text:
            "Best ac repair in kharghar, they are doing best work in this price range and work quality is too good really thanks to sir for doing my ac repair service",
        profileImage: "https://lh3.googleusercontent.com/a-/ALV-UjU8q7vx_mFQeQK0x5Gbn-RTptvnxY_P5bPOzTB4_8dHONsXLwmDaQ=w90-h90-p-rp-mo-br100",
    },
    {
        name: "Moin Khan",
        time: "2025-04-28T09:15:00",
        rating: 5,
        text:
            "My front loading washing machine drum issue he solved my issue resnable price he deserves 5*pluse rating.",
        profileImage: "https://lh3.googleusercontent.com/a/ACg8ocJiBwzHMpcZZmtPmlwbQRL4oXOmlKsYllDT0Ttejpi-MRIGYw=w90-h90-p-rp-mo-br100",
    },
    {
        name: "Vijay yadav",
        time: "2025-12-14T16:00:00",
        rating: 5,
        text:
            "My ac not cooling properly multiple time visit on uc but no slove my issue. My friend given number on Digital Aircon he come and repaired my ac and now is properly cooling im so happy he deserves more than 5 star",
        profileImage: "https://lh3.googleusercontent.com/a/ACg8ocIB0ePxXH7T2TJYq5KnNKgAyhjtgMEu2LwqIZzxqKjR7zUUcg=w45-h45-p-rp-mo-br100",
    },
];

export default function TestimonialSection() {
    return (
        <section className="bg-[#f7faff] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1e40af] mb-12 ">
                    Trusted Experiences from Our Customers
                </h2>

                {/* Rating Badge with Google Logo */}
                <div className="flex justify-center mb-8">
                    <a
                        href={GOOGLE_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-gray-900">4.9</span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.122-6.54L.244 6.91l6.562-.954L10 0l2.194 5.956 6.562.954-4.854 4.64 1.122 6.54L10 15z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="h-6 w-px bg-gray-300"></div>
                        {/* Google Logo Image */}
                        <img
                            src="https://www.gstatic.com/marketing-cms/assets/images/c5/3a/200414104c669203c62270f7884f/google-wordmarks-2x.webp"
                            alt="Google"
                            className="h-6 w-auto"
                        />
                    </a>
                </div>

                {/* ✅ DESKTOP – unchanged size */}
                <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-48 justify-items-center">
                    {reviews.map((review, i) => (
                        <ReviewCard key={i} review={review} />
                    ))}
                </div>

                {/* ✅ MOBILE – horizontal scroll, no cut */}
                <div className="lg:hidden overflow-x-auto">
                    <div className="flex gap-4 px-[calc(50%-175px)] pb-4">
                        {reviews.map((review, i) => (
                            <ReviewCard key={i} review={review} />
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <a
                        href={GOOGLE_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium underline"
                    >
                        <FcGoogle className="w-5 h-5" />
                        View more reviews on Google
                    </a>
                </div>
            </div>
        </section>
    );
}

function ReviewCard({ review }) {
    const [expanded, setExpanded] = useState(false);
    const [time, setTime] = useState(formatTime(review.time));
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const i = setInterval(() => setTime(formatTime(review.time)), 60000);
        return () => clearInterval(i);
    }, [review.time]);

    return (
        <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
                group bg-white
                w-[350px]
                min-w-[300px] max-w-[350px]
                shrink-0
                rounded-xl border border-gray-200
                shadow-sm hover:shadow-lg
                transition-all duration-200 p-6
                relative
            "
        >
            {/* Google Logo Indicator */}
            {isHovered && (
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md border hidden sm:block">
                    <FcGoogle className="w-5 h-5" />
                </div>
            )}

            {/* Rating + Google */}
            <div className="flex items-center mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 15l-5.878 3.09 1.122-6.54L.244 6.91l6.562-.954L10 0l2.194 5.956 6.562.954-4.854 4.64 1.122 6.54L10 15z" />
                    </svg>
                ))}
                <div className="ml-auto flex items-center gap-2">
                    <FcGoogle className="w-6 h-6" />
                </div>
            </div>

            {/* Text */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {expanded ? review.text : `${review.text.slice(0, 110)}...`}
                <button
                    suppressHydrationWarning
                    onClick={(e) => {
                        e.preventDefault();
                        setExpanded(!expanded);
                    }}
                    className="text-blue-600 ml-1 font-medium hover:text-blue-800"
                >
                    {expanded ? "Show less" : "Show more"}
                </button>
            </p>

            {/* User */}
            <div className="flex items-center gap-3">
                <img
                    src={review.profileImage}
                    className="w-10 h-10 rounded-full"
                    alt={review.name}
                />
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold text-gray-800 group-hover:text-blue-600">
                                {review.name}
                            </p>
                            <p className="text-xs text-gray-500">{time}</p>
                        </div>
                        {isHovered && (
                            <svg
                                className="w-4 h-4 text-blue-500 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
}   