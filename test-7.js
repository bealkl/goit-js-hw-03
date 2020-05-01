//GOIT javascript homework 03 task 7
'use strict';

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const maxID = this.transactions.length;
    this.transactions[maxID] = { type: type, amount: amount };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return `id = ${id}, type = ${this.transactions[id].type}, amount = ${this.transactions[id].amount}`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    this.transactions.forEach(element => {
      if (element.type === type) total += element.amount;
    });
    return total;
  },
};

///////////////////////////////test

// const z = account;

// console.log(z.getBalance());
// z.deposit(10);
// console.log(z.getBalance());
// // console.table(z.transactions);
// z.deposit(12);
// console.log(z.getBalance());
// // console.table(z.transactions);
// z.withdraw(11);
// console.log(z.getBalance());
// // console.table(z.transactions);
// z.deposit(9);
// console.log(z.getBalance());
// // console.table(z.transactions);
// z.withdraw(4);
// console.log(z.getBalance());

// console.table(z.transactions);

// console.log(z.getBalance());

// console.log(z.getTransactionDetails(2));

// console.log(z.getTransactionTotal('deposit'));
// console.log(z.getTransactionTotal('withdraw'));
