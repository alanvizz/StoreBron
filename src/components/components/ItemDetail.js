import React from 'react';
import ItemCount from './ItemCount.js';

const ItemDetail = function({id, name, brand, price, initial, max, min, image}) {

	const addToCart = function(){alert('Se agregó al carrito')};

	return 	<div className='container'>
				<div className='row text-center'>
					<div className='col'>
						<img src={image} />
					</div>
					<div className='col container'>
						<div className='pt-5'>
							<h2>{name}</h2>
							<h4>{'Marca: '+ brand}</h4>
							<h4>{'$ ' + price}</h4>
							<hr/>
						</div>
						<div className='pt-5'>
							<ItemCount
							max={max}
							min={min}
							initial={initial}
							onAdd={addToCart}
							/>
						</div>
					</div>
				</div>
			</div>
}

export default ItemDetail; 