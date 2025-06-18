class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number) : void {
    this.balance = this.balance + amount;
    }

    withdraw(amount: number) : void {
    if(amount <= this.balance) {
        this.balance = this.balance - amount;

    }
    }

    getBalance() : number {
     return this.balance;
    }
}

const account = new BankAccount(20);
account.withdraw(30);
console.log(account.getBalance());