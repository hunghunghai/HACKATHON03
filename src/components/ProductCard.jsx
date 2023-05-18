import React, { useState } from 'react';
import { AppleFilled } from '@ant-design/icons';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

export default function ProductCard({ product, isItemInCart, handleAddToCart, handleRemoveFromCart, cartItems }) {
    const [qty, setQty] = useState(0);

    const handleAdd = () => {
        handleAddToCart(product);
        setQty(qty + 1);
    };

    const handleRemove = () => {
        handleRemoveFromCart(product);
        setQty(qty - 1);
    };

    return (
        <div className='cart'>
            <div className='cart-logo'>
                <p><AppleFilled /></p>
                <p>{product.name}</p>
            </div>
            <div className='img-product mt'>
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className='info-product'>
                <div className='name-product'>
                    <p>{product.name}</p>
                    <p><FavoriteOutlinedIcon /></p>
                </div>
                <div className='title-product'>
                    <p>{product.heading}</p>
                    <p>{product.des}</p>
                </div>
                <div className='action-product'>
                    <p>$ <span>{product.price}</span></p>
                    {isItemInCart(product) ? (
                        <div className='action'>
                            <button onClick={handleRemove}>
                                <KeyboardArrowLeftOutlinedIcon />
                            </button>
                            <p>{qty}</p>
                            <button onClick={handleAdd}>
                                <ChevronRightOutlinedIcon />
                            </button>
                        </div>
                    ) : (
                        <div className='add-product' onClick={handleAdd}>
                            ADD <ChevronRightOutlinedIcon />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
