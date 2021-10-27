import React from 'react';
import ItemCount from './ItemCount.js';
import ProductoImagen from '../../assets/pelota.jpg';

const style = {
	card: {
		marginTop: 20,
		width: '30%',
		marginRight: 'auto',
		marginLeft: 'auto',
		paddingTop: 20,
	},
	image: {
		width: 200,
		heigth: 200,
		marginRight: 'auto',
		marginLeft: 'auto',
	},
}

const Item = function({id, name, price, initial, min, max}){
	const addToCart = function(quantity){console.log('Se agregaron '+ quantity + ' unidades al carrito')}
	return(
		<div className="card" style={style.card}>
			<h3>{name}</h3>
			<p>${price}</p>
  			<img style={style.image} className="card-img-top img-thumbnail" src={ProductoImagen} alt="product-image"/>
			<ItemCount max={max} min={min} initial={initial} onAdd={addToCart}/>
		</div>
		);
}

export default Item; 