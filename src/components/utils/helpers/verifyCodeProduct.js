export const products = JSON.parse(localStorage.getItem('Products')) || [];

// if find the code of the product return the value else return undefined
export const verifyCodeProduct = (codeProduct) => {
	return products.find(({ code }) => code === codeProduct);
};
