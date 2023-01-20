import Head from 'next/head';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productAdd } from '../app/features/ProductSlice';

export default function add() {
    const product = useSelector((state) => state.product.product)
    
    const dispatch = useDispatch()



    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (inputs) {
            dispatch(productAdd(inputs))
            var arr = JSON.parse(localStorage.getItem("data"))
            if (arr == null) arr = [];
            arr.push(inputs);
            localStorage.setItem("data", JSON.stringify(arr));
        }
    }

    return (
        <>
            <Head>
                <title>Add Product</title>
                <meta name="description" content="Add_Product" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="justify-center flex-1 max-w-2xl px-4  mx-auto ">
                    <h2 className="pb-2 text-xl font-bold text-center text-gray-800 md:text-3xl dark:text-gray-300">
                        Todo From
                    </h2>
                    <div className="px-3 py-6 rounded shadow-md dark:bg-gray-700 bg-gray-500">
                        <form onSubmit={handleSubmit} className="" id="myForm">
                            <div className="w-full px-3 mb-3">
                                <label htmlFor="Title"
                                    className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                    Title
                                </label>
                                <input type="text" id='Title' placeholder="title..."
                                    name="title"
                                    value={inputs.title || ""}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                            </div>
                            <div className="w-full px-3 mb-3">
                                <label htmlFor="Description"
                                    className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                    Description
                                </label>
                                <input type="text" id='Description' placeholder="description..."
                                    name="description"
                                    value={inputs.description || ""}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                            </div>
                            <div className="px-3">
                                <button
                                    className="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}