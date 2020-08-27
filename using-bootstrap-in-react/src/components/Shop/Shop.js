// this s the main file which contains all the component without including the header
import React, { useState } from 'react';
import './Shop.css'
// connecting the carousel component.
import Carousel from '../Carousel/Carousel'
// connecting the product component.
import Product from '../Product/Product';
// connecting the cart component
import Cart from '../Cart/Cart';
// getting the data from fake-data which contains the all the img/price/name etc
import fakeData from '../../fakeData';


const Shop = () => {
    let data = fakeData;
    let [products, setProducts] = useState(data);
    let [cart,setCart] = useState([]);
    let handleAddProduct = (product) => {
      
      const newCart = [...cart, product];
      setCart(newCart);
  }
    return (
        <div>
            <Carousel></Carousel>
            <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
            {
              
               products.map(product => <Product handleAddProduct = {handleAddProduct} product={product}>{product.name}</Product>)
            }
    </div>
  </div>
</section>
              <Cart cart={cart}></Cart>
            </div>
    );
};

export default Shop;