import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import { useAxiosGet } from "../../Hooks/Httprequest";
import Loader from "../Loader";

function Home() {
    const url = `https://5ff9101b17386d0017b51b04.mockapi.io/products?page=1&limit=10`;

    let products = useAxiosGet(url)
    
    let content = null

    
        if (products.error) {
                content = <p>
                    Error, Refresh or Try again later
    
                </p>
            }
    
            if (products.loading) {
                content = <Loader></Loader>
            }
        if (products.data) {
                content =
                    products.data.map((product) =>
                    <div>
                        <ProductCard key={product.id} product={product}/>
                    </div> 
                )
            }        

        // let content = null
        return (
            <div>
                <h1 className="font-bold text-2xl">Best Prices</h1>
                {content}
            </div>

        )
    }    

export default Home