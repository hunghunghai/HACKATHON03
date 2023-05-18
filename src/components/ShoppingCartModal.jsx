import React from 'react';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ShoppingCartModal({ open, handleClose, cartItems, handleRemoveFromCart, handleIncreaseQty, handleDecreaseQty, calculateTotalPrice, handleCheckout }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <table className='shopping-table'>
                    <thead>
                        <tr>
                            <th>img</th>
                            <th>name</th>
                            <th>qty</th>
                            <th>price</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render shopping cart items */}
                        {cartItems.map((product, index) => (
                            <tr key={index}>
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
                        ))}

                        <tr>
                            <td colSpan="3" className="total-label">Total:</td>
                            <td colSpan="2">${calculateTotalPrice()}</td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                                <button className='order' onClick={handleCheckout}>Thanh toán</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Box>
        </Modal>
    );
}
