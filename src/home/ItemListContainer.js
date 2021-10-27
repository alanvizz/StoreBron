import React from 'react';
import Greeting from './components/Greeting.js';
import ItemList from './components/ItemList.js';

const ItemListContainer = function () {
	const greeting = "Soy ItemListContainer!";
	return(
		<>
		<Greeting greeting={greeting} />
		<ItemList/>
		</>)
}

export default ItemListContainer;