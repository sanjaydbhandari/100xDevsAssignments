/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

let Transactions = [
    {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
    {
		id: 2,
		timestamp: 1656076800055,
		price: 2000,
		category: 'Investing',
		itemName: 'SIP',
	},
    {
		id: 3,
		timestamp: 165607684011,
		price: 315,
		category: 'Travelling expense',
		itemName: 'traveling pass',
	},
    {
		id: 4,
		timestamp: 165607680023,
		price: 899,
		category: 'Recharge',
		itemName: 'Phone Recharge',
	},
    {
		id: 5,
		timestamp: 165607680023,
		price: 666,
		category: 'Recharge',
		itemName: "Mother's Phone Recharge",
	}
];

let expenditureAnalysis = [];

function checkCategory(transaction){
    if(expenditureAnalysis.length==0) return false;
    expenditureAnalysis.forEach((expense)=>{
        if(expense.category!=transaction.category)
        	return false;
    });
	 return true;
}

function calculateTotalSpentByCategory(transactions) {
    transactions.map((transaction,index,transactions)=>{
		console.log(checkCategory(transaction));
        if(checkCategory(transaction)){
			expenditureAnalysis.map(expense=>{
				if(expense.category == transaction.category)
					expense.price+=transaction.price;
			});
		}
		else{
			expenditureAnalysis.push({category:transaction.category,price:transaction.price})
		}
		console.log(expenditureAnalysis);
    });
	return expenditureAnalysis;
}

console.log(calculateTotalSpentByCategory(Transactions));

module.exports = calculateTotalSpentByCategory;