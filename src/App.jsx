import { Form } from './components/form/Form';
import { Products } from './components/products/Products';
import { useLocalStorage } from './components/utils/hooks/useLocalStorage';
import './App.css';

export const App = () => {
	const { value: products, setValue: setProducts } =
		useLocalStorage('products');

	return (
		<div className='container-fluid-wrapper'>
			<h1 className='text-center mb-5 mt-3'>
				Here you can create and delete products
			</h1>
			<div className='row g-5'>
				<Form products={products} setProducts={setProducts} />
				<Products products={products} setProducts={setProducts} />
			</div>
		</div>
	);
};
