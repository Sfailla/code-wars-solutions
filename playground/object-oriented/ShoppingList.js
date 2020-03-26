class ShoppingList {
	constructor(items) {
		this.items = items;
	}

	addItem(item) {
		this.items.push(item);
	}

	editItem(itemName, newItem) {
		this.items.find(item => {
			if (item.name === itemName) {
				item.name = newItem.name || item.name;
				item.price = newItem.price || item.price;
			}
		});
	}

	removeItem(itemName) {
		let newArr = [];
		this.items.filter(item => {
			return item.name !== itemName ? newArr.push(item) : item;
		});
		this.items = newArr;
	}

	showAllItems() {
		return this.items;
	}
}

class ShoppingListItem {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

const myShoppingList = new ShoppingList([
	new ShoppingListItem('milk', 4.99),
	new ShoppingListItem('eggs', 3.99),
	new ShoppingListItem('beer', 12.99)
]);

// adding a single item
myShoppingList.addItem(new ShoppingListItem('cookies', 2.99));
myShoppingList;
// removing a single item
myShoppingList.removeItem('eggs');
// edit a single item
myShoppingList.editItem('milk', { name: 'rice', price: 1.99 });
myShoppingList.editItem('cookies', { name: 'doritos', price: 5.99 });

myShoppingList.showAllItems();

myShoppingList;
