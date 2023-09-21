function Newsletter() {
  return (
    <>
      <div className="bg-black/90 py-24 px-5 flex items-center justify-center flex-col mx-auto overflow-hidden">
        <h1 className="text-3xl font-bold text-center px-10 text-gray-100">
          Get notified when we're launching.
        </h1>
        <h2 className="max-w-2xl mx-auto text-green-200 text-center font-semibold mt-3 px-6 text-base leading-7">
          Reprehenderit ad esse et non officia in nulla. Id proident tempor
          incididunt nostrud nulla et culpa.
        </h2>
        <div className="flex items-center justify-center mt-10">
          <div className="flex items-center justify-between space-x-5 p-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow outline-none border border-gray-600 rounded-md bg-transparent text-base placeholder:text-gray-700 p-3 focus:border-2 focus:border-white focus:duration-100 text-white w-72"
            />
            <button className="bg-white text-gray-800 font-semibold p-3 rounded-md whitespace-nowrap">
              Notify me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
