import { useForm } from '../utils/hooks/useForm';

export const Form = () => {
	const { code, name, quantity, description, onInputChange, onResetForm } =
		useForm({ code: '', name: '', quantity: '', description: '' });

	const handleCreateProduct = (e) => {
		e.preventDefault();
		console.log(code, name, quantity, description);
		console.log('object');
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
				placeholder='Enter the product code'
				onChange={onInputChange}
			/>
			<input
				type='text'
				name='name'
				placeholder='Enter the product name'
				onChange={onInputChange}
				required
			/>
			<input
				type='number'
				name='quantity'
				placeholder='Enter how many products'
				onChange={onInputChange}
				required
			/>
			<textarea
				name='description'
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
