"use client";
import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log("Subscribed with email:", email);
  };

  return (
    <div className="bg-[#f9f7f5] p-6 rounded-lg max-w-6xl mx-auto">
      <h2 className="text-2xl text-[#b3773b] font-bold text-center mb-4">
        Subscribe to Our Newsletter
      </h2>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="email"
          placeholder="Yourmail@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C59815]"
        />
        <button
          className={`flex flex-row items-center justify-center px-2.5 gap-2.5 w-[150px] h-[43px] bg-[#FBBC04] rounded-[10px] cursor-pointer `}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
