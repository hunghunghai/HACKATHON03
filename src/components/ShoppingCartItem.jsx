import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function ShoppingCartItem({ product, handleRemoveFromCart, handleIncreaseQty, handleDecreaseQty }) {
    return (
        <tr>
            <td>
                <img width={50} src={product.imageUrl} alt={product.name} />
            </td>
            <td>{product.name}</td>
            <td>
                <div className="qty-control">
                    <button onClick={() => handleDecreaseQty(product)} className='btn-up-down'>-</button>
                    {product.qty}
                    <button onClick={() => handleIncreaseQty(product)} className='btn-up-down'>+</button>
                </div>
            </td>
            <td>{product.price}</td>
            <td>
                <button onClick={() => handleRemoveFromCart(product)}>
                    <DeleteOutlineOutlinedIcon />
                </button>
            </td>
        </tr>
    );
}
