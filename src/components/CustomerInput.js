import React, { useState } from "react";

const CustomerInput = ({ onFetchAccounts }) => {
  const [customerId, setCustomerId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerId) {
      onFetchAccounts(customerId);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-lg font-bold">Enter Customer ID</h2>
      <input
        type="text"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        placeholder="Customer ID"
        className="border p-2 mt-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        Fetch Accounts
      </button>
    </form>
  );
};

export default CustomerInput;
