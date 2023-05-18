import React, { useState } from 'react';
import '../css/header.css';
import Header from './Header';
import ShoppingCartModal from './ShoppingCartModal';
import ProductCard from './ProductCard';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 800,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

const products = [
    {
        name: 'Airpods Pro',
        price: 24900,
        imageUrl: 'https://static-images.vnncdn.net/files/publish/2022/7/7/airpods-pro-copy-1172.jpg',
        qty: 0,
        heading: 'Wireless Noise Cancelling Earphones',
        des: 'AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparency mode so much can hear your surroundings.',
    },
    {
        name: 'Apple Watch',
        price: 40900,
        imageUrl: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2020/09/Apple-Watch-Series-6-Always-on-display.jpg',
        qty: 0,
        heading: 'You’ve never seen a watch like this',
        des: 'The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.',
    },
    {
        name: 'Macbook Pro',
        price: 199900,
        imageUrl: 'https://24hstore.vn/upload_images/images/2020/11/23/chrome-1.jpg',
        qty: 0,
        heading: 'The best for the brightest',
        des: 'Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.',
    },
    {
        name: 'iPhone 11 pro',
        price: 106600,
        imageUrl: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/10/iPhone%2011%20Pro%20(8).png',
        qty: 0,
        heading: 'Pro cameras. Pro display. Pro performance',
        des: 'A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
    },
    {
        name: 'iPad Pro',
        price: 71900,
        imageUrl: 'https://photo2.tinhte.vn/data/attachment-files/2021/04/5440710_ipad_pro-1.jpg',
        qty: 0,
        heading: 'Your next computer is not a computer',
        des: 'It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.',
    },
];

export default function ShoppingCart() {
    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find((item) => item.name === product.name);
        if (existingItem) {
            const updatedItems = cartItems.map((item) => {
                if (item.name === product.name) {
                    return { ...item, qty: item.qty + 1 };
                }
                return item;
            });
            setCartItems(updatedItems);
        } else {
            setCartItems((prevCartItems) => [...prevCartItems, { ...product, qty: 1 }]);
        }
    };

    const handleRemoveFromCart = (product) => {
        const updatedItems = cartItems.filter((item) => item.name !== product.name);
        setCartItems(updatedItems);
    };

    const handleIncreaseQty = (product) => {
        const updatedItems = cartItems.map((item) => {
            if (item.name === product.name) {
                return { ...item, qty: item.qty + 1 };
            }
            return item;
        });
        setCartItems(updatedItems);
    };

    const handleDecreaseQty = (product) => {
        const updatedItems = cartItems.map((item) => {
            if (item.name === product.name && item.qty > 1) {
                return { ...item, qty: item.qty - 1 };
            }
            return item;
        });
        setCartItems(updatedItems);
    };

    const isItemInCart = (product) => {
        return cartItems.some((item) => item.name === product.name);
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for (const item of cartItems) {
            totalPrice += item.price * item.qty;
        }
        return totalPrice;
    };
    const handleCheckout = () => {
        // Reset giỏ hàng
        setCartItems([]);

        // Hiển thị thông báo thành công
        alert('Thanh toán thành công');
    };

    return (
        <div className="background-container">
            <Header handleOpen={handleOpen} />
            <ShoppingCartModal
                open={open}
                handleClose={handleClose}
                cartItems={cartItems}
                handleRemoveFromCart={handleRemoveFromCart}
                handleIncreaseQty={handleIncreaseQty}
                handleDecreaseQty={handleDecreaseQty}
                calculateTotalPrice={calculateTotalPrice}
                handleCheckout={handleCheckout}
            />
            <div className="box-product">
                {/* Render product cards */}
                {products.map((product) => (
                    <ProductCard
                        key={product.uniqueKey}
                        product={product}
                        isItemInCart={isItemInCart}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleIncreaseQty={handleIncreaseQty}
                        handleDecreaseQty={handleDecreaseQty}
                        cartItems={cartItems}
                    />
                ))}

            </div>
        </div>
    );
}