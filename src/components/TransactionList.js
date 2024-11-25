import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../api";

const TransactionList = ({ accountId }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const data = await fetchTransactions(accountId);
      setTransactions(data);
    };
    if (accountId) {
      getTransactions();
    }
  }, [accountId]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">
        Transactions for Account ID: {accountId}
      </h2>
      <ul className="mt-2">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <li key={transaction.id} className="border p-2 mt-1">
              Date: {transaction.date} - Amount: ${transaction.amount} - Type:{" "}
              {transaction.type}
            </li>
          ))
        ) : (
          <li className="border p-2 mt-1">
            No transactions found for this account.
          </li>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
