class Invoices {
    client: string;
    details: string;
    amount: number

    constructor(c: string, d: string, a: number) {
        this.client = c
        this.details = d
        this.amount = a
    }

    format() {
        return `${this.client} owes ₹ ${this.amount} for ${this.details}`
    }

}

const invOne = new Invoices("Thanos", "Swiping half universe", 1)
const invTwo = new Invoices("Iron-Man", "bring the half swipe universe back", 100000000)

let invoices: Invoices[] = []

invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format())
})


const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)
})
