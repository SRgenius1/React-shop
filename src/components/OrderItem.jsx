import React from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import ico from '../assets/icons/icon_close.png';

const OrderItem = ({product}) => {
	const {removeFromCart} = React.useContext(AppContext);

	const handleRemove = (product) => {
		removeFromCart(product)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={ico} alt="close" onClick={() => handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;
