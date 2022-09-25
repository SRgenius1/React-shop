import React from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductItem.scss';
import cartImg from '../assets/icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const {addToCart} = React.useContext(AppContext);

	const handleClick = item => {
		console.log('Holas');
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={cartImg} alt="add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
