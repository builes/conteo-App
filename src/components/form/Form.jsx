import { useForm } from '../utils/hooks/useForm';
import { useLocalStorage } from '../utils/hooks/useLocalStorage';

export const Form = () => {
	const { code, name, quantity, description, onInputChange, onResetForm } =
		useForm({ code: '', name: '', quantity: '', description: '' });

	const { value: products, setValue: setFormData } =
		useLocalStorage('Products');

	const handleCreateProduct = (e) => {
		e.preventDefault();
		const currentDate = new Date();
		const date = currentDate.toLocaleString();
		const product = { code, name, quantity, description, date };
		setFormData([product, ...products]);
		onResetForm();
	};

	return (
		<form onSubmit={handleCreateProduct}>
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
			/>
			<input
				type='text'
				name='name'
				value={name}
				placeholder='Enter the product name'
				onChange={onInputChange}
				required
			/>
			<input
				type='number'
				name='quantity'
				value={quantity}
				placeholder='Enter how many products'
				onChange={onInputChange}
				required
			/>
			<textarea
				name='description'
				value={description}
				cols='30'
				rows='10'
				placeholder='Enter the description'
				onChange={onInputChange}
				required
			></textarea>
			<button type='submit'>Create New Product</button>
			{/* <button>Delete all fields</button> */}
		</form>
	);
};
