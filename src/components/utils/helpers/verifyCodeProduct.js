// if find the code of the product return the value else return undefined
export const verifyCodeProduct = (products, codeProduct) => {
	return products.find(({ code }) => {
		console.log(code, codeProduct, 'hola');
		return code === codeProduct;
	});
};
