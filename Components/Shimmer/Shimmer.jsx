import React from "react";
import "./Shimmer.css";

const AmazonSkeleton = () => {
  return (
    <div className="skeleton-wrapper">
      {/* Navbar Skeleton */}
      <div className="skeleton-navbar">
        <div className="skeleton-logo"></div>
        <div className="skeleton-search"></div>
        <div className="skeleton-icons">
          <div className="skeleton-icon"></div>
          <div className="skeleton-icon"></div>
          <div className="skeleton-icon"></div>
        </div>
      </div>

      {/* Banner Skeleton */}
      <div className="skeleton-banner"></div>

      {/* Product Grid Skeleton */}
      <div className="skeleton-grid">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="skeleton-card">
            <div className="skeleton-img"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-title short"></div>
            <div className="skeleton-rating"></div>
            <div className="skeleton-price"></div>
            <div className="skeleton-button"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazonSkeleton;
