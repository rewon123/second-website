import React from 'react';
// connecting the css file for extra design
import './Carousel.css';
// importing the carousel images
import pic1 from './3779226.jpg';
import pic2 from './27827.jpg';
import pic3 from './21421.jpg';
const Carousel = () => {
    return (
        <div className="container">
    <div id="carouselExampleControls" class="carousel slide sliding-bg" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
              <div class="row align-items-center">
                <div class="col-md-7">
                    <h1>Affiliate Marketing – A Beginner’s Guide to Earning Online</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.
                    </p>
                    <h1 class="price">120.99$</h1>
                    <button class="btn-buy-now">Enroll-Now</button>
                </div>
                    <div class="col-md-5">
                        <img src={pic1} class="d-block img" alt="..."></img>
                     </div>
                </div>
          </div>
          <div class="carousel-item">
              <div class="row align-items-center">
                  <div class="col-md-7">
                      <h1>IELTS Live Course</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.
                    </p>
                    <h1 class="price">120.99$</h1>
                    <button class="btn-buy-now">Enroll-now</button></div>
                  <div class="col-md-5"> <img src={pic2} class="d-block w-100 img" alt="..."></img></div>
              </div>
          </div>
          <div class="carousel-item">
         <div class="row align-items-center">
             <div class="col-md-7">
                 <h1>Improve Your Speaking, Listening & Writing</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.
                </p>
                <h1 class="price">120.99$</h1>
                <button class="btn-buy-now">Enroll-now</button></div>
             <div class="col-md-5"><img src={pic3} class="img d-block w-100" alt="..."></img></div>
         </div>
          </div>
        </div>
        <p class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </p>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
 </div>
    );
};

export default Carousel;