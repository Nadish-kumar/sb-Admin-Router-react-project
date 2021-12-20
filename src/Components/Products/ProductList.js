import React from 'react'
import ProductContent from './ProductContent'
import './ProductList.css'
import { Link } from 'react-router-dom'

const ProductList = () => {
    return (
        <div class="container">
            <Link to='/ProductList'>
            <button className='btn btn-success'>Add Product</button>
            </Link>
        <div class="row">
            
            <ProductContent />
            <ProductContent />
            <ProductContent />
            <ProductContent />
            <ProductContent />
            <ProductContent />
            </div>
            </div>
            
    )
}

export default ProductList
