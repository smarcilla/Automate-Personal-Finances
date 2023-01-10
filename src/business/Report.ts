import { Transaction } from './Transaction';

export class Report {
  static build(transactions: Transaction[], year: number): Report {
    return new Report(transactions, year);
  }

  private year: number;

  constructor(public transactions: Transaction[], year: number) {
    this.year = year;
  }

  get title() {
    return `Annual report ${this.year}`;
  }

  get annualIncomes() {
    return this.transactions
      .filter(transaction => transaction.year === this.year)
      .filter(transaction => transaction.isIncome())
      .reduce((currentIncome, currentTransaction) => {
        return currentIncome + currentTransaction.amount;
      }, 0);
  }

  get annualExpenses() {
    return this.transactions
      .filter(transaction => transaction.year === this.year)
      .filter(transaction => transaction.isExpense())
      .reduce((currentExpenses, currentTransaction) => {
        return currentExpenses + currentTransaction.amount;
      }, 0);
  }

  get annualResult() {
    return this.annualIncomes + this.annualExpenses;
  }
}
