import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
import Loader from "../Loader";
// import HelloWorld from '../HelloWorld'

function Product() {
    const { id } = useParams()
    const url = `https://5ff9101b17386d0017b51b04.mockapi.io/products/${id}`;
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false,
    })

    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
        })
        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [])

    if (product.error) {
        content = <p>
            Error, Refresh or Try again later

        </p>
    }

    if (product.loading) {
        content = <Loader></Loader>
    }


    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.image}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    }

    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
}

export default Product;