"use strict";
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(20);
account.withdraw(30);
console.log(account.getBalance());
//# sourceMappingURL=bankAccount.js.map