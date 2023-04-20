import './product.css';

export const Product = ({
	code,
	name,
	quantity,
	description,
	date,
	deleteProduct,
}) => {
	return (
		<div className='card h-100'>
			<div className='card-body d-flex flex-column'>
				<h5 className='card-title uppercase'>{name}</h5>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>Code: {code}</li>
					<li className='list-group-item'>Quantity: {quantity}</li>
					<li className='list-group-item'>Date: {date}</li>
					<li className='list-group-item capitalize'>{description}</li>
				</ul>
				<p className='card-text'></p>
				<div className='mt-auto'>
					<button
						className='btn btn-danger'
						onClick={() => deleteProduct(code)}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};
