class BankAccount {
    constructor(balance, interestRate)   {
        this.balance = balance;
        this.interestRate = interestRate;
    }

    addInterest()   {
        return this.balance = this.balance * this.interestRate;
    }
}

class BankAccountWithFee extends BankAccount   {
    constructor(balance, interestRate, fee)  {
        super();
        this.balance = balance;
        this.interestRate = interestRate;
        this.fee = fee;
    }

    applyFee()  {
        return this.balance -this.fee;
    }
}

let alexAccount = new BankAccount(1000, .05);
let alexFees = new BankAccountWithFee(1000, .05, 10);
console.log(alexAccount.addInterest());
console.log(alexFees.applyFee());
console.log(alexFees.addInterest());
