import React, { useEffect, useState } from 'react';
import Loading from './Loading.js';
import ItemDetail from './ItemDetail.js'

const product = [{id:'1', name: 'Camiseta ', brand: 'Nike', price: 100, initial: 2, min: 2, max: 10, image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/291/743/products/denver-blanca-7-131-20a546982cb4e14ab716094279917073-640-0.jpg'}];

const ItemDetailContainer = function(){
const [ item, setItem ] = useState([]);
const [ loading, setLoading] = useState(true);

useEffect( () => {
	const task = new Promise( ( resolve, reject ) => {
		setTimeout(() => {
				resolve(product);
			}, 3000)});

	task.then(
		res => {
			setItem(res);
			setLoading(false)
		},
		err => {console.log(err)},
		);

	}, []);

	return(<div>
		{ loading && <Loading />}
		{item.map(it => 
		<ItemDetail
		id={it.id}
		name={it.name}
		brand={it.brand}
		price={it.price}
		initial={it.initial}
		max={it.max}
		min={it.min}
		image={it.image}
		 />)}
		</div>);
}

export default ItemDetailContainer; 