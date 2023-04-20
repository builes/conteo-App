export const Form = () => {
	return (
		<form>
			<p>
				Please, fill in all the fields of the form to be able to create a new
				product
			</p>

			<input type='number' name='' placeholder='Enter the product code' />
			<input type='text' name='' placeholder='Enter the product code' />
			<input type='number' name='' placeholder='Enter how many products' />
			<textarea
				name=''
				cols='30'
				rows='10'
				placeholder='Enter the description'
			></textarea>
		</form>
	);
};
