"use client";

import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReviewCard from "./ReviewCard";
import { reviews } from "@/data/reviews";

export default function ReviewsCarousel() {
    const cardsPerPage = 2; // Show 2 cards at a time
    const totalPages = Math.ceil(reviews.length / cardsPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, totalPages]);

    // Scroll to current page
    useEffect(() => {
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.offsetWidth;
            carouselRef.current.scrollTo({
                left: containerWidth * currentPage,
                behavior: "smooth",
            });
        }
    }, [currentPage]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentPage(index);
        setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
    };

    return (
        <div className="relative w-full">
            {/* Navigation buttons */}
            <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-blue-400/20 hover:bg-blue-400/30 border border-blue-400/40 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(147,197,253,0.4)]"
                aria-label="Previous review"
            >
                <FiChevronLeft className="w-6 h-6 text-blue-300" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-blue-400/20 hover:bg-blue-400/30 border border-blue-400/40 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(147,197,253,0.4)]"
                aria-label="Next review"
            >
                <FiChevronRight className="w-6 h-6 text-blue-300" />
            </button>

            {/* Carousel container */}
            <div className="px-16 overflow-hidden">
                <div
                    ref={carouselRef}
                    className="flex overflow-x-hidden scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                        <div key={pageIndex} className="min-w-full flex gap-6 px-1 flex-shrink-0">
                            {reviews
                                .slice(pageIndex * cardsPerPage, (pageIndex + 1) * cardsPerPage)
                                .map((review) => (
                                    <ReviewCard key={review.id} review={review} />
                                ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                            index === currentPage
                                ? "w-8 h-2 bg-blue-400"
                                : "w-2 h-2 bg-blue-400/30 hover:bg-blue-400/50"
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
