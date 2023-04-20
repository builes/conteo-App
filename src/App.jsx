import React from 'react';
import { Form } from './components/form/Form';
import { Products } from './components/products/Products';
import { useLocalStorage } from './components/utils/hooks/useLocalStorage';

export const App = () => {
	const { value: products, setValue: setProducts } =
		useLocalStorage('products');

	return (
		<div>
			<h1>Create a new Product</h1>
			<Form products={products} setProducts={setProducts} />
			<Products products={products} setProducts={setProducts} />
		</div>
	);
};
