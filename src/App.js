import React, { useState } from "react";
import AccountList from "./components/AccountList";
import TransactionList from "./components/TransactionList";
import TransferForm from "./components/TransferForm";
import CustomerInput from "./components/CustomerInput";
import { fetchAccounts } from "./api";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleFetchAccounts = async (customerId) => {
    try {
      const customerAccounts = await fetchAccounts(customerId);
      setAccounts(customerAccounts);
    } catch (error) {
      console.error("Error fetching accounts:", error);
      setAccounts([]);
    }
  };

  const handleTransfer = () => {
    //
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Banking App</h1>
      <CustomerInput onFetchAccounts={handleFetchAccounts} />
      {accounts.length > 0 && (
        <>
          <AccountList
            accounts={accounts}
            onSelectAccount={setSelectedAccount}
          />
          {selectedAccount && (
            <>
              <TransactionList accountId={selectedAccount} />
              <TransferForm accounts={accounts} onTransfer={handleTransfer} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
