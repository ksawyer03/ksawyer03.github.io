import React from 'react';

const Product = ({title, summary, reviews}) => {


}



const Products = ({products}) => {
return products.map((product, i) => (
	<Product
		key={i}
		title={products[i].title}
		summary={products[i].summary}
		reviews={products[i].reviews}
	/>
	))

}

export default Products;