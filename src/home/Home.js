import React from 'react';
import Greeting from './components/Greeting.js';
import ItemCount from './components/ItemCount.js';

const Home = function () {
	const greeting = "Soy ItemListContainer!";
	const addToCart = function(quantity){console.log('Se agregaron '+ quantity + ' unidades al carrito')}
	return(
		<>
		<Greeting greeting={greeting} />
		<ItemCount max={6} min={2} initial={1} onAdd={addToCart}/>
		</>)
}

export default Home;