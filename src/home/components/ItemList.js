import React, { useEffect, useState } from 'react';
import Item from './Item.js';


const Loading = function(){
	return(
		<div className="text-center mt-5">
  			<div className="spinner-border" role="status">
    			<span className="sr-only">Loading...</span>
  			</div>
		</div>
		);
}


const catalogo = [
{id:'1', name: 'Producto 1',  price: 50, initial: 1, min: 2, max: 10},
{id:'2', name: 'Producto 2',  price: 100, initial: 1, min: 1, max: 10},
{id:'3', name: 'Producto 3',  price: 20, initial: 1, min: 3, max: 8}
];

const ItemList = function(){
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const task =  new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(catalogo);
			}, 2000)});

	task.then(
		res => {
			setProducts(res);
			setLoading(false)
		},
		err => {console.log(err)},
		);

	}, []);

				return <> 
				{loading && <Loading/>}
				<div className='row'>
					{products.map(product => 
								<Item 
								id={product.id}
								name={product.name}								
								price={product.price}
								initial={product.initial}
								min={product.min}
								max={product.max}
								/>)};
				</div>;
				</>
}

export default ItemList; 