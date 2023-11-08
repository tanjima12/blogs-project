const JoinFamily = () => {
  return (
    <div className="ml-32 mt-10">
      <h1 className="text-3xl font-ursive mb-1">
        JOIN THE<span className="text-3xl font-zeyeda"> Family</span>
      </h1>
      <p className="text-xl font-thin mb-2">
        Find out first about new trips, travel recommendations & discounts.
        <br></br>
        Don’t worry we won’t spam you!
      </p>
      <div className="mb-3">
        <input
          type="email"
          placeholder="email"
          name="email"
          className="border rounded-lg w-96"
        />
      </div>
      <div className="flex gap-10">
        <button className="bg-orange-900 rounded-3xl text-white px-4 py-2">
          FACEBOOK GROUP
        </button>
        <button className="bg-amber-800 rounded-3xl text-white px-4 py-2">
          DEALS AND OFFERS
        </button>
      </div>
    </div>
  );
};

export default JoinFamily;
