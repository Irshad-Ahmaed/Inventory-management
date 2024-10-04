import React, { ChangeEvent, FormEvent, useState } from 'react'
import { v4 } from 'uuid';
import Header from '@/app/(components)/Header';
import { CrossIcon } from 'lucide-react';

type ProductFormData = {
    name: string;
    price: number;
    stockQuantity: number;
    rating: number;
}

type CreateProductModalProps = {
    isOpen: boolean;
    onClose: ()=> void;
    onCreate: (formData: ProductFormData) => void;
}

const CreateProductModal = ({isOpen, onClose, onCreate}: CreateProductModalProps) => {
    const [formData, setFormData] = useState({
        productId: v4(),
        name: "",
        price: 0,
        stockQuantity: 0,
        rating: 0 
    });

    if(!isOpen) return null;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreate(formData);
        onClose();
    }

    const handleChange=(e: ChangeEvent<HTMLInputElement>)=> {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:
            name === "price" || name === "stockQuantity" || name === "rating"
            ? parseFloat(value)
            : value,
        });
    }
    const labelCssStyle = "block text-sm font-medium text-gray-700";
    const inputCssStyle = "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";
  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20'>
        <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
            <Header name='Create New Product' />

            <CrossIcon onClick={onClose} className='absolute rotate-45 right-2 top-2 w-5 h-5 cursor-pointer hover:text-red-500'/>
            
            <form onSubmit={handleSubmit} className='mt-5'>
                {/* Product Name */}
                <label htmlFor='productName' className={labelCssStyle}>
                    Product Name
                </label>
                <input type='text' name='name' placeholder='Name' 
                onChange={handleChange} value={formData.name} className={inputCssStyle} required/>

                {/* Product Price */}
                <label htmlFor='productPrice' className={labelCssStyle}>
                    Price
                </label>
                <input type='number' name='price' placeholder='Price' 
                onChange={handleChange} value={formData.price} className={inputCssStyle} required/>

                {/* Product Stock Quantity */}
                <label htmlFor='stockQuantity' className={labelCssStyle}>
                    Stock Quantity
                </label>
                <input type='number' name='stockQuantity' placeholder='StockQuantity' 
                onChange={handleChange} value={formData.stockQuantity} className={inputCssStyle} required/>

                {/* Product Rating */}
                <label htmlFor='rating' className={labelCssStyle}>
                    Rating
                </label>
                <input type='number' name='rating' placeholder='Rating' 
                onChange={handleChange} value={formData.rating} className={inputCssStyle} required/>

                {/* Create Action */}
                <button type='submit' className='relative mt-4 left-[40%] px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Create</button>
            </form>
        </div>
    </div>
  )
}

export default CreateProductModal