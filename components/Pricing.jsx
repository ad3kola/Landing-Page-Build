"use client";
import { CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Pricing() {
  const [month, setMonth] = useState(true);
  const togglePlan = () => {
    setMonth((prev) => !prev);
  };

  const pricings = [
    {
      id: 1,
      category: "Basic",
      price_monthly: 15,
      price_yearly: 144,
      duration_monthly: "/month",
      duration_yearly: "/year",
      desc: "Everything necessary to get started",
      price_access: [
        {
          id: 1,
          access: "5 products",
        },
        {
          id: 2,
          access: "Up to 1,000 subscribers",
        },
        {
          id: 3,
          access: "Basic analytics",
        },
        {
          id: 4,
          access: "48-hour support response time",
        },
      ],
    },
    {
      id: 2,
      category: "Essential",
      price_monthly: 30,
      price_yearly: 280,
      duration_monthly: "/month",
      duration_yearly: "/year",
      desc: "Everything in Basic, plus essential tools for growing your business.",
      price_access: [
        {
          id: 1,
          access: "25 products",
        },
        {
          id: 2,
          access: "Up to 10,000 subscribers",
        },
        {
          id: 3,
          access: "Advanced analytics",
        },
        {
          id: 4,
          access: "24-hour support response time",
        },
        {
          id: 5,
          access: "Marketing analytics",
        },
      ],
    },
    {
      id: 3,
      category: "Growth",
      price_monthly: 60,
      price_yearly: 630,
      duration_monthly: "/month",
      duration_yearly: "/year",
      desc: "Everything in Essential, plus collaboration tools and deeper insights.",
      price_access: [
        {
          id: 1,
          access: "Unlimited products",
        },
        {
          id: 2,
          access: "Unlimited subscribers",
        },
        {
          id: 3,
          access: "Advanced analytics",
        },
        {
          id: 4,
          access: "1-hour dedicated support response time",
        },
        {
          id: 5,
          access: "Marketing automations",
        },
        {
          id: 6,
          access: "Custom reporting tools",
        },
      ],
    },
  ];
  return (
    <>
      <div className="w-full px-3 py-10">
        <div className="mx-auto border rounded-xl border-green-200/30 flex flex-col items-center justify-center">
          <div className="mx-auto text-center px-6 py-10">
            <h1 className="text-sm text-green-500 font-semibold">Pricing</h1>
            <h2 className="text-3xl font-bold text-gray-200">
              Our Pricing Plans, best for you.
            </h2>
            <h3 className="text-green-100 mt-5 text-base leading-7">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </h3>
          </div>
          <div className="relative mx-auto w-44 h-9 rounded-full border border-white flex justify-between items-center space-x-3">
            <p
              onClick={togglePlan}
              className="pl-4 z-20 text-sm cursor-pointer md:text-base text-white"
            >
              Monthly
            </p>
            <p
              onClick={togglePlan}
              className="pr-3 z-20 text-sm cursor-pointer md:text-base text-white"
            >
              Annualy
            </p>
            <div
              className={
                month
                  ? "absolute top-1/2 -translate-y-1/2 h-7 z-10 w-20 -left-2 transition ease-in-out rounded-full duration-500 bg-green-500"
                  : "absolute top-1/2 -translate-y-1/2 h-7 z-10 w-20 right-1 transition ease-in-out duration-500 rounded-full bg-green-500"
              }
            ></div>
          </div>
          <div className="px-6 my-4">
            <div className="mx-auto flex items-center justify-center">
              <div className=" py-5 px-2 flex flex-col lg:flex-row justify-center lg:space-x-12 mx-auto">
                {pricings.map((pricing) => (
                  <div className="mb-12 w-[380px]">
                    <h1 className="text-base font-bold text-white">
                      {pricing.category}
                    </h1>
                    <h1 className="mt-5 text-5xl text-white font-bold">
                      {`$${
                        month ? pricing.price_monthly : pricing.price_yearly
                      }`}
                      <span className="text-sm text-gray-200">
                        {` ${
                          month
                            ? pricing.duration_monthly
                            : pricing.duration_yearly
                        }`}
                      </span>
                    </h1>
                    <button className="w-full rounded-md mt-5 bg-green-500 text-white text-center py-3 text-base cursor-pointer hover:bg-green-400 font-bold">
                      Buy plan
                    </button>
                    <h1 className="text-sm mt-5 text-green-400 font0semibold tracking-wider leading-6">
                      {pricing.desc}
                    </h1>
                    <ul className="w-full space-y-4 mt-5">
                      {pricing.price_access.map((plan) => (
                        <li
                          key={plan.id}
                          className="flex items-center space-x-2"
                        >
                          <CheckBadgeIcon className="h-6 text-green-500" />
                          <p className="text-white">{plan.access}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
