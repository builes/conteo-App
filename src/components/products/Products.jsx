import { useState } from 'react';

export const Products = ({ products, setProducts }) => {
	const deleteProduct = (code) => {
		const newProducts = products.filter((product) => product.code !== code);
		setProducts(newProducts);
	};

	if (products.length === 0) {
		return <h1>No products yet</h1>;
	}

	return (
		<div>
			{products.map(({ code, name, quantity, description, date }) => (
				<div key={code}>
					<p>Code: {code}</p>
					<p>Name: {name}</p>
					<p>Quantity: {quantity}</p>
					<p>description: {description}</p>
					<time>date: {date}</time>
					<button onClick={() => deleteProduct(code)}>Delete Product</button>
				</div>
			))}
		</div>
	);
};
