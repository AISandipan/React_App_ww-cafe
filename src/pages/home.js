import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
          <div id="intro" class="parallax-window" data-parallax="scroll" data-image-src="./assets/img/cafe-interior.jpg">
          <nav id="tm-nav" class="fixed w-full bg-black opacity-8">
              <div class="tm-container mx-auto px-2 md:py-6 text-right">
                  <button class="md:hidden py-2 px-2" id="menu-toggle"><i class="fas fa-2x fa-bars tm-text-gold"></i></button>
                  <ul class="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
                      <li class="inline-block mb-4 mx-4"><a href="#intro" class="tm-text-gold py-1 md:py-3 px-4">Intro</a></li>
                      <li class="inline-block mb-4 mx-4"><a href="#menu" class="tm-text-gold py-1 md:py-3 px-4">Menu</a></li>
                      <li class="inline-block mb-4 mx-4"><a href="#about" class="tm-text-gold py-1 md:py-3 px-4">About</a></li>
                      <li class="inline-block mb-4 mx-4"><a href="#contact" class="tm-text-gold py-1 md:py-3 px-4">Contact</a></li>
                  </ul>
              </div>            
          </nav>
          <div class="container mx-auto px-2 tm-intro-width">
              <div class="sm:pb-60 sm:pt-48 py-20">
                  <div class="bg-black bg-opacity-70 p-12 mb-5 text-center rounded-xl">
                      <h1 class="text-white text-5xl tm-logo-font mb-5">Whismy Cafe</h1>
                      <p class="tm-text-gold tm-text-2xl font-bold">Indulge in Sweet Perfection: Your Cupcake Haven Awaits!</p>
                  </div>    
                  <div class="bg-black bg-opacity-70 p-10 mb-5 rounded-xl">
                      <p class="text-white leading-8 text-lg font-bold">
                          Need a special design for a special day? Or are you simply feeling creative? We are here to make your cupcake dreams come true. Get creative or run wild with whimsy!
                        If you have any question, please <a rel="nofollow" href="https://www.tooplate.com/contact" target="_parent">send us a message</a>. </p>
                  </div>
                  <div class="text-center">
                      <div class="inline-block">
                          <a href="#menu" class="flex justify-center items-center bg-black bg-opacity-70 py-6 px-8 rounded-lg font-semibold tm-text-2xl tm-text-gold hover:text-gray-200 transition">
                              <i class="fas fa-coffee mr-3"></i>
                              <span>Let's explore...</span>                        
                          </a>
                      </div>                    
                  </div>                
              </div>
          </div>        
      </div>
      <div id="menu" class="parallax-window" data-parallax="scroll" data-image-src="./assets/img/pattern-bg.jpg">
          <div class="container mx-auto tm-container py-24 sm:py-48">
              <div class="text-center mb-16">
                  <h2 class="bg-black text-white py-6 px-12 text-4xl font-medium inline-block rounded-md">Our Cafe Menu</h2>
              </div>            
              <div class="flex flex-col lg:flex-row justify-around items-center">
                  <div class="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
                      <div class="flex items-start mb-6 tm-menu-item">
                          <img src="./assets/img/menu-item-1.png" alt="Image" class="rounded-md" /> 
                          <div class="ml-3 sm:ml-6">
                              <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-black font-bold">Chocolate Fudge</h3>
                              <div class="text-white text-md sm:text-lg font-light mb-1">S $8.50</div>
                              <div class="text-white text-md sm:text-lg font-light">L $10.50</div>
                          </div>                    
                      </div>
                      <div class="flex items-start mb-6 tm-menu-item">
                          <img src="./assets/img/menu-item-2.png" alt="Image" class="rounded-md" />
                          <div class="ml-3 sm:ml-6">
                              <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-black font-bold">Cottoncandy</h3>
                              <div class="text-white text-md sm:text-lg font-light mb-1">S $9.50 . BG #544639</div>
                              <div class="text-white text-md sm:text-lg font-light">L $12.50</div>
                          </div>                    
                      </div>
                      <div class="flex items-start mb-6 tm-menu-item">
                          <img src="./assets/img/menu-item-3.png" alt="Image" class="rounded-md" />
                          <div class="ml-3 sm:ml-6">
                              <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-black font-bold">Caramel</h3>
                              <div class="text-white text-md sm:text-lg font-light mb-1">M $11.75</div>
                              <div class="text-white text-md sm:text-lg font-light">L $14.75</div>
                          </div>                    
                      </div>
                      <div class="flex items-start mb-6 tm-menu-item">
                          <img src="./assets/img/menu-item-4.png" alt="Image" class="rounded-md" />
                          <div class="ml-3 sm:ml-6">
                              <h3 class="text-lg sm:text-xl tm-text-black font-bold mb-1">Candy Mix</h3>
                              <div class="text-white text-md sm:text-lg font-light">Size M $11.75 . L $14.75</div>
                          </div>                    
                      </div>
                  </div>
                  <div class="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
                      <div class="flex items-start justify-end mb-6 tm-menu-item-2">
                          <div class="text-right mr-6">
                              <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-black font-bold">Chocolate Corn</h3>
                              <div class="text-white text-md sm:text-lg font-light mb-1">Small $10</div>
                              <div class="text-white text-md sm:text-lg font-light">Large $15</div>
                          </div>
                          <img src="./assets/img/menu-item-5.png" alt="Image" class="rounded-md" />                   
                      </div>
                      <div class="flex items-start justify-end mb-6 tm-menu-item-2">
                          <div class="text-right mr-6">
                              <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-black font-bold">Buttercup Chocolate</h3>
                              <div class="text-white text-md sm:text-lg font-light mb-1">Small $12.50</div>
                              <div class="text-white text-md sm:text-lg font-light">Large $16.50</div>
                          </div>
                          <img src="./assets/img/menu-item-6.png" alt="Image" class="rounded-md" />                    
                      </div>
                      <div class="flex items-start justify-end mb-6 tm-menu-item-2">
                          <div class="text-right mr-6">
                              <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-black font-bold">Iced Milky Latte</h3>
                              <div class="text-white text-md sm:text-lg font-light mb-1">Small $14</div>
                              <div class="text-white text-md sm:text-lg font-light">Large $18</div>
                          </div>   
                          <img src="./assets/img/menu-item-7.png" alt="Image" class="rounded-md" />                 
                      </div>
                      <div class="flex items-start justify-end mb-6 tm-menu-item-2">                    
                          <div class="text-right mr-6">
                              <h3 class="text-lg sm:text-xl tm-text-black font-bold mb-1">Banana Rasberry</h3>
                              <div class="text-white text-md sm:text-lg font-light">Small $10 . Large $15</div>
                          </div> 
                          <img src="./assets/img/menu-item-8.png" alt="Image" class="rounded-md" />                   
                      </div>
                  </div>
              </div>
          </div>        
      </div>
      <div id="about" class="parallax-window" data-parallax="scroll" data-image-src="./assets/img/light-bg.jpg">
          <div class="container mx-auto tm-container py-24 sm:py-48">
              <div class="tm-item-container rounded-lg sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4">
                  <div class="bg-transperant bg-opacity-80 p-12 pb-14 mb-5">
                      <h2 class="mb-6 tm-text-black text-4xl font-medium">About our cafe</h2>
                      <p class="mb-6 text-base text-white leading-8">
                          At Whisk & Whimsy, we use the freshest, locally sourced ingredients to ensure that each cupcake is as delicious as it is beautiful. Our skilled bakers whip up a delightful variety of flavors, from classic favorites to innovative creations that are sure to surprise and delight.
                    </p>
                      <p class="text-base leading-8 text-white">
                          If you wish to <a rel="nofollow" href="https://www.tooplate.com/contact" target="_parent">support us</a>, please make a little donation via PayPal. That would be
                      very helpful. Another way is to tell your friends about Tooplate website. Thank you. </p>
                  </div>
                  <a href="#contact" class="inline-block tm-bg-black transition text-white text-xl pt-3 pb-4 px-8 rounded-md">
                      <i class="far fa-comments mr-4"></i>
                      Contact
                  </a>
              </div>           
          </div>        
      </div>
      <div id="contact" class="parallax-window relative" data-parallax="scroll" data-image-src="./assets/img/pattern-bg.jpg">
          <div class="container mx-auto tm-container pt-24 pb-48 sm:py-48">
              <div class="flex flex-col lg:flex-row justify-around items-center lg:items-stretch">
                  <div class="flex-1 rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container">
                      <h2 class="text-3xl mb-6 tm-text-gold">Contact Us</h2>
                      <p class="mb-6 text-lg leading-8">
                          We invite you to explore our delightful offerings and discover your new favorite cupcake. Visit us in-store or place an order online to experience the magic of Whisk & Whimsy Cupcakes. Follow us on social media for updates on new flavors, special promotions, and behind-the-scenes glimpses of our bakery.   
                      </p>
                      <p class="mb-10 text-lg">
                          <span class="block mb-2">Tel: <a href="tel:0100200340" class="hover:text-light-600 transition">010-020-0340</a></span>
                          <span class="block">Email: <a href="mailto:info@company.com" class="hover:text-light-600 transition">info@company.com</a></span>                        
                      </p>
                      <div class="text-center">
                          <a href="https://www.google.com/maps" class="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-black">
                              <i class="fas fa-map-marked-alt mr-8"></i>
                              Open Maps
                          </a>
                      </div>                    
                  </div>
                  <div class="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container">
                      <form action="" method="POST" class="text-lg">
                          <input type="text" name="name" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Name" required="" />
                          <input type="email" name="email" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Email" required="" />
                          <textarea rows="6" name="message" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Message..." required=""></textarea>
                          <div class="text-right">
                              <button type="submit" class="text-white hover:text-yellow-500 transition">Send it</button>
                          </div>                        
                        </form>
                  </div>
              </div>
              <footer class="absolute bottom-0 left-0 w-full">
                  <div class="text-white container mx-auto tm-container p-8 text-lg flex flex-col md:flex-row justify-between">
                      <span>Copyright 2022 Whisk & Whimsy Cupcakes Cafe. All rights reserved.</span>
                      <span class="mt-5 md:mt-0">Design: <a href="https://www.tooplate.com" target="_parent">Tooplate</a></span>
                  </div>                
              </footer>
          </div>        
      </div>
      </div>
    );
  }
}

export default Home;