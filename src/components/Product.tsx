// import React from "react";
import { useState, useEffect } from "react"

export default function Product() {
    const [products, getProducts]: any = useState([]);
    useEffect(() => {
        // api
        fetch("https://fakestoreapi.com/products")
        .then(data => data.json())
        .then(result => getProducts(result))
    }, []);

    const cards = products.map((product: any, index: number) => {
        return (
            <div
            className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" key={index}>
            <div
                className="border-neutral-100 px-6 py-3 dark:text-neutral-50">
                <img className="mx-auto" src={product.image} alt={product.title} style={{ width:'100px', height: '100px'}}/>
            </div>
            <div className="p-6">
                <h5
                className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                {product.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-bold">
                    INR. {product.price}
                </p>
            </div>
            <div
                className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 sticky top-[100vh]">
                <div className="px-6 pt-4 pb-2 text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Add To Cart
                    </button>
                </div>
            </div>
            </div>
        )
    })
  return (
    <>
        <h1 className="text-center my-3 text-3xl font-bold">Product Dashboard</h1>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-5" style={{ marginBottom: '10px'}}>
            {cards}
        </div>
    </>
  )
}
