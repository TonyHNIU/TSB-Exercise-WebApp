import React from "react";

const AccountList = ({ accounts, onSelectAccount }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Accounts</h2>
      <ul className="mt-2">
        {accounts.length > 0 ? (
          accounts.map((account) => (
            <li
              key={account.id}
              className="border p-2 mt-1 cursor-pointer"
              onClick={() => onSelectAccount(account.id)}
            >
              {account.name} - Balance: ${account.balance}
            </li>
          ))
        ) : (
          <li className="border p-2 mt-1">No accounts found.</li>
        )}
      </ul>
    </div>
  );
};

export default AccountList;
