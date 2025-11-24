"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiStar, FiUser, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="flex-1 min-w-0 max-w-[calc(50%-12px)] p-8 bg-blue-300/5 border border-blue-300/20 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-blue-300/40 hover:shadow-[0_10px_40px_rgba(147,197,253,0.15)]">
            {/* Header with avatar and name */}
            <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-blue-400/20 border-2 border-blue-400/30 flex items-center justify-center">
                    {review.avatar ? (
                        <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <FiUser className="w-8 h-8 text-blue-300/60" />
                    )}
                </div>
                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-white/90">
                        {review.isAnonymous ? "Anonymous Client" : review.name}
                    </h4>
                    {!review.isAnonymous && (review.role || review.company) && (
                        <p className="text-sm text-white/50">
                            {review.role && review.company
                                ? `${review.role} at ${review.company}`
                                : review.role || review.company}
                        </p>
                    )}
                </div>
            </div>

            {/* Star rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                    <FiStar
                        key={index}
                        className={`w-5 h-5 ${
                            index < review.rating
                                ? "fill-blue-400 text-blue-400"
                                : "text-blue-400/20"
                        }`}
                    />
                ))}
            </div>

            {/* Comment */}
            <p className="text-white/70 leading-relaxed italic">
                "{review.comment}"
            </p>
        </div>
    );
}
