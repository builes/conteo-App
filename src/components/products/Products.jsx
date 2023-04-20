import { useState } from 'react';

export const Products = ({ products }) => {
	if (products.length === 0) {
		return <h1>No products yet</h1>;
	}

	return (
		<div>
			{products.map(({ code, name, quantity, description, date }) => (
				<>
					<p>Code: {code}</p>
					<p>Name: {name}</p>
					<p>Quantity: {quantity}</p>
					<p>description: {description}</p>
					<time>date: {date}</time>
				</>
			))}
		</div>
	);
};
