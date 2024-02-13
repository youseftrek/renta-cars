import React from "react";
import Card from "../shared/Card";

const WhyUs = () => {
  return (
    <section className="flex justify-center mb-10">
      <container className="flex flex-col justify-center max-w-[1920px] w-full mt-6 p-4">
        <div className="mb-6 flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl xl:text-4xl text-center mb-2">
            Why to choose us
          </h2>
          <p className="text-center max-w-[600px] text-slate-700">
            Discover an extensive selection of vehicles tailored to your
            preferences, ensuring an ideal match for every journey. Experience
            effortless booking with our intuitive platform, designed for
            seamless navigation and swift reservations.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
          <Card
            src="/assets/images/fast-time.png"
            heading="Fast & Easy Booking"
            description="Our streamlined booking process ensures quick and efficient reservations, saving you valuable time and effort."
          />
          <Card
            src="/assets/images/price.png"
            heading="Competitive Pricing"
            description="We offer competitive rates and transparent pricing, allowing customers to find affordable options without sacrificing quality or service."
          />
          <Card
            src="/assets/images/call-center.png"
            heading="24/7 Customer Service"
            description="Our dedicated customer service team is available 24/7, ready to assist you with any queries, concerns, or assistance you may need at any hour of the day or night."
          />
        </div>
      </container>
    </section>
  );
};

export default WhyUs;
