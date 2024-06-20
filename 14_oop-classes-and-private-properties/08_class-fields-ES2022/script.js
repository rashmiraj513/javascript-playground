// Underscore (_) before any variable or, function name denotes that entity as private
// and that should not be accessed outside the class. However, it doesn't stop you from
// accessing.
// However, Hash (#) makes sure that the variable or, function becomes private and can't
// be accessed outside the class.

class Wallet {
  // Private Variables must be declared directly inside the class but not inside the constructor.
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Not enough funds');
      return;
    }

    this.#processWithdraw(amount);
    this.#balance -= amount;
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this.#transactions.push({
      type: 'deposit',
      amount,
    });
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this.#transactions.push({
      type: 'withdraw',
      amount,
    });
  }

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(500);
wallet.withdraw(100);
console.log(wallet.balance);
