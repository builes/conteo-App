import { useState } from 'react';
import { Product } from '../product/Product';

export const Products = ({ products, setProducts }) => {
	const deleteProduct = (code) => {
		const newProducts = products.filter((product) => product.code !== code);
		setProducts(newProducts);
	};

	if (products.length === 0) {
		return (
			<div className='col-12 col-sm-6'>
				<h3>Products</h3>
				<p>No products yet</p>
			</div>
		);
	}

	return (
		<div className='col-12 col-sm-6 col-lg-8 border'>
			<h1>Products</h1>
			<div className='row'>
				{products.map((product) => (
					<div key={product.code} className='mb-4 col-lg-6'>
						<Product {...product} deleteProduct={deleteProduct} />
					</div>
				))}
			</div>
		</div>
	);
};
