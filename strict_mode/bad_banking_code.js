// The keys are account names and values are the account balances

const accounts = {
  a: 100,
  b: 0,
  c: 20,
};

// This function gets an account from a user and checks whether its a, b or c
function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!Object.hasOwn(accounts, accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}

// * Why is this bad code ?
// * Consider a scenario where a user enters an invalid account name.
// * Whether its valid or invalid the from account will already be debited
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  accounts[from] -= amount;
  accounts[getAccount()] += amount;
}

// * A much better transfer function
function safeTransfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    // * case an exception was thrown, this will reverse the debiting
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}
