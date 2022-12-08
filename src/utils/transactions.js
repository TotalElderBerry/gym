import records from "./records"
import translateDate from '../Controllers/translateDate'

const Transactions = [
	{
		id: 1,
		user:records[0],
		payment: {
			type: "daily",
			date: "11/11/11",
		},
		amount: "70"
	},
	{
		id: 2,
		user: records[1],
		payment: {
			type: "monthly",
			date: "01/11/11",
		},
		amount: "700"
	},
	{
		id: 3,
		user: records[2],
		payment: {
			type: "monthly",
			date: "3/11/11",
		},
		amount: "700"
	},
	{
		id: 4,
		user:records[3],
		payment: {
			type: "daily",
			date: "8/11/11",
		},
		amount: "70"
	},
	{
		id: 5,
		user:records[4],
		payment: {
			type: "monthly",
			date: "11/11/11",
		},
		amount: "700"
	},

]

Transactions.map((t)=>{
	t.payment.date = translateDate(t.payment.date)
})

export default Transactions