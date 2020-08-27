import React from 'react';
// importing the css file
import './Cart.css'




const Cart = (props) => {
  const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price,0)
     const O = " " + cart.length ; 
     
    return (
       <div>
          <button type="button" class="btn btn1 d-flex" data-toggle="modal" data-target="#basicExampleModal"><i id="icon" className="fa fa-shopping-cart fa-2x"></i><h3> {O}</h3></button>
          <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h2 class="modal-title" id="exampleModalLabel">your cart<i id="icon" className="fa fa-shopping-basket fa-2x"></i> </h2>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                {/* this part contains the data of the cart */}
                <div class="modal-body">
                {
                  cart.map(prd => <p><strong>Course-Name:</strong><span>{prd.name}</span>
                  <br/> <strong>Price:</strong><span>{prd.price}</span></p>)
                  }
                </div>
                <div class="modal-footer">
                  <h6> total price: <strong>{total.toFixed(2)}</strong> </h6>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Checkout</button>
      </div>
              </div>
            </div>
          </div>
</div>
    );
};

export default Cart;