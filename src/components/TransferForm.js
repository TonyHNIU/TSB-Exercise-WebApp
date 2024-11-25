import React, { useState } from "react";

const TransferForm = ({ accounts, onTransfer }) => {
  const [fromAccountId, setFromAccountId] = useState("");
  const [toAccountId, setToAccountId] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async (e) => {
    e.preventDefault();
    if (!fromAccountId || !toAccountId || !amount) {
      alert("Please fill in all fields.");
      return;
    }

    const transferData = {
      fromAccountId,
      toAccountId,
      amount: parseFloat(amount),
    };

    try {
      const response = await fetch("http://localhost:8080/api/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transferData),
      });

      if (response.ok) {
        alert("Transfer successful!");
        onTransfer();
      } else {
        const error = await response.json();
        alert(`Transfer failed: ${error.message}`);
      }
    } catch (error) {
      console.error("Error during transfer:", error);
      alert("Transfer failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleTransfer} className="p-4">
      <h2 className="text-lg font-bold">Transfer Funds</h2>
      <select
        value={fromAccountId}
        onChange={(e) => setFromAccountId(e.target.value)}
        className="border p-2 mt-2"
      >
        <option value="">Select Source Account</option>
        {accounts && accounts.length > 0 ? (
          accounts.map((account) => (
            <option key={account.id} value={account.id}>
              {account.name} - Balance: ${account.balance}
            </option>
          ))
        ) : (
          <option disabled>No accounts available</option>
        )}
      </select>
      <select
        value={toAccountId}
        onChange={(e) => setToAccountId(e.target.value)}
        className="border p-2 mt-2"
      >
        <option value="">Select Target Account</option>
        {accounts && accounts.length > 0 ? (
          accounts.map((account) => (
            <option key={account.id} value={account.id}>
              {account.name} - Balance: ${account.balance}
            </option>
          ))
        ) : (
          <option disabled>No accounts available</option>
        )}
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border p-2 mt-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        Transfer
      </button>
    </form>
  );
};

export default TransferForm;
