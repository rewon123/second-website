import React from 'react';
// importing the css file for the products or courses
import './Product.css'


const Product = (props) => {
  // getting the data from product.
  const { img, name, price, category} = props.product;


    return (
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full cards" >
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={img}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{name} </h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{category}</h2>
          <p class="mt-1">${price} </p>
          {/* calling a function for add a course to cart  */}
          <button style={{color:"black"}} id="buy-now" onClick={() => props.handleAddProduct(props.product)}>Enroll-Now </button>
        </div>
      </div>

    );
};
export default Product;