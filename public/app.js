"use strict";
class Invoices {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ₹ ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoices("Thanos", "Swiping half universe", 1);
const invTwo = new Invoices("Iron-Man", "bring the half swipe universe back", 100000000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
