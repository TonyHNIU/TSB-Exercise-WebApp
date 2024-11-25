const BASE_URL = "http://localhost:8080/api";

export const fetchAccounts = async (customerId) => {
  const response = await fetch(`${BASE_URL}/accounts/${customerId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch accounts");
  }
  return response.json();
};

export const fetchTransactions = async (accountId) => {
  const response = await fetch(`${BASE_URL}/transactions/${accountId}`);
  return response.json();
};

export const transferFunds = async (transferData) => {
  const response = await fetch(`${BASE_URL}/transfer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transferData),
  });
  return response.json();
};
