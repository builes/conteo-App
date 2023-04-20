import { verifyCodeProduct } from '../utils/helpers/verifyCodeProduct';
import { useForm } from '../utils/hooks/useForm';
import { useLocalStorage } from '../utils/hooks/useLocalStorage';

export const Form = ({ products, setProducts }) => {
	const { code, name, quantity, description, onInputChange, onResetForm } =
		useForm({ code: '', name: '', quantity: '', description: '' });

	const handleCreateProduct = (e) => {
		e.preventDefault();
		const currentDate = new Date();
		const date = currentDate.toLocaleString();
		const existCode = verifyCodeProduct(products, code);

		if (!existCode) {
			const product = { code, name, quantity, description, date };
			setProducts([product, ...products]);
			onResetForm();
			return;
		}

		alert('El codigo del producto ya se encuentra registrado');
	};

	return (
		<form onSubmit={handleCreateProduct} className='col-12 col-sm-6 col-lg-4'>
			<p>
				Please, fill in all the fields of the form to be able to create a new
				product
			</p>

			<input
				required
				type='number'
				name='code'
				value={code}
				placeholder='Enter the product code'
				onChange={onInputChange}
				className='form-control mb-3'
			/>
			<input
				type='text'
				name='name'
				value={name}
				placeholder='Enter the product name'
				onChange={onInputChange}
				required
				className='form-control mb-3'
			/>
			<input
				type='number'
				name='quantity'
				value={quantity}
				placeholder='Enter how many products'
				onChange={onInputChange}
				required
				className='form-control mb-3'
			/>
			<textarea
				name='description'
				value={description}
				cols='5'
				rows='10'
				placeholder='Enter the description'
				onChange={onInputChange}
				required
				className='form-control mb-3'
			></textarea>
			<button type='submit' className='btn btn-success mb-5'>
				Create New Product
			</button>
			{/* <button>Delete all fields</button> */}
		</form>
	);
};
