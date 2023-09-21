import React from "react";
const stats = [
    {
      id: 1,
      name: "Transactions made worldwide",
      data: "49 trillion",
    },
    {
      id: 2,
      name: "Investments in billion dollar companies",
      data: "over 8,803,530",
    },
  {
    id: 3,
    name: "Trusted by many nations around the world",
    data: "17,700,000",
  },
  {
    id: 4,
    name: "Baskets of bread for people to be fed with",
    data: "about 12,000",
  },
];

function Stats() {
  return (
    <>
      <div>
        <div className="py-16 sm:py-14 w-full">
          <div className="mx-auto mt-2 lg:text-center max-w-[1440px]">
            <div className="px-6 lg:px-8">
              <h1 className="text-base text-green-400">Stats</h1>
              <h2 className="text-3xl mt-2 font-bold text-gray-200">
                What makes us stand out in the world today
              </h2>
            </div>
            <div className="w-full py-3 mx-auto overflow-hidden rounded-3xl">
              <div className="md:mx-4 mx-8 rounded-3xl overflow-hidden mt-1 lg:space-x-1 flex flex-col lg:flex-row items-center justify-center">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="w-full flex flex-col mx-auto items-center mt-1 first: justify-center bg-green-200/25 py-8"
                  >
                    <h2 className="text-green-500 whitespace-nowrap md:text-3xl  text-2xl font-bold">
                      {stat.data}
                    </h2>
                    <h3 className="text-gray-200 text-base md:text-sm whitespace-nowrap font-semibold">
                      {stat.name}
                    </h3>
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

export default Stats;
