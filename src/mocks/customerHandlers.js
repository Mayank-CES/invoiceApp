import { rest } from 'msw'

export const customers=[{id:1, name:"Mayank",phone:"9876543210",email:"mayank@gmail.com"}
                        ,{id:2, name:"Pulkit",phone:"9876556789",email:"pulkit@gmail.com"}
                        ,{id:3, name:"Anup",phone:"0123456789",email:"anup@gmail.com"}];

export const newCustomer=[{id:1, name:"Suyash Goyal",phone:"8962854321",email:"suyash@gmail.com"}];

export const items = [{id: 1, name: 'Computer', description: 'Powerful desktop setup', price: 69999, addedOn: '20 Jan 1970'},
{id: 2, name: 'Phone', description: 'Connect with others.', price: 9999, addedOn: '20 Jan 1970'},
{id: 3, name: 'OLED TV', description: 'Bring Home A Cinematic Experience Like Never Before', price: 99999, addedOn: '20 Jan 1970'},
{id: 4, name: 'Monitor', description: 'Display to increase productivity as well as consume OTT content.', price: 29999, addedOn: '17 Aug 2022'},
{id: 5, name: 'SDD', description: 'High speed "On The Go" Data backup.', price: 15000, addedOn: '17 Aug 2022'},
{id: 6, name: 'Earbuds', description: 'Listen to music completely handsfree', price: 5999, addedOn: '17 Aug 2022'}]

export const invoices=[{
    "id": 1234,
    "due_date": 1663632000000,
    "issued_date": 1660867200000,
    "ref_no": "1370974",
    "customer_id": 3,
    "bill_address": "Jaipur, Rajasthan",
    "paid_status": "Issued",
    "notes": "Hello",
    "invoice_items": [
        {
            "id": 1,
            "item_id": 2,
            "item_name": "Phone",
            "item_quantity": 2,
            "item_price": 9999,
            "invoice_id": 1234
        },
        {
            "id": 2,
            "item_id": 3,
            "item_name": "OLED TV",
            "item_quantity": 3,
            "item_price": 99999,
            "invoice_id": 1234
        },
        {
            "id": 3,
            "item_id": 6,
            "item_name": "Earbuds",
            "item_quantity": 5,
            "item_price": 5999,
            "invoice_id": 1234
        }
    ]
},
{
    "id": 124,
    "due_date": 1663632000000,
    "issued_date": 1660867200000,
    "ref_no": "164677",
    "customer_id": 1,
    "bill_address": "South Delhi, Delhi",
    "paid_status": "Paid",
    "notes": "Test2",
    "invoice_items": [
        {
            "id": 4,
            "item_id": 2,
            "item_name": "Phone",
            "item_quantity": 10,
            "item_price": 9999,
            "invoice_id": 124
        },
        {
            "id": 5,
            "item_id": 6,
            "item_name": "Earbuds",
            "item_quantity": 5,
            "item_price": 5999,
            "invoice_id": 124
        }
    ],
}
]


export const fetchCustomers = rest.get(
    "http://localhost:8080/Home/customers",
    async (req, res, ctx) =>{
        console.log("Data Requested")
        return res(ctx.status(200), ctx.json(customers));
    }
);

export const postCustomers = rest.post(
    "http://localhost:8080/Home/customer",
    async (req, res, ctx) =>{
        console.log("Data Posted")
        return res(ctx.status(200), ctx.json(newCustomer));
    }
);

export const fetchItems = rest.get(
    "http://localhost:8080/Home/items",
    async (req, res, ctx) =>{
        console.log("Data Requested")
        return res(ctx.status(200), ctx.json(items));
    }
);
export const fetchInvoices = rest.get(
    "http://localhost:8080/Home/invoices",
    async (req, res, ctx) =>{
        console.log("Data Requested")
        return res(ctx.status(200), ctx.json(customers));
    }
);


export const customerHandler=[fetchCustomers,postCustomers, fetchItems, fetchInvoices]