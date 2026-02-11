import './App.css'
import { useState } from 'react'



function App() {
     const [mode, setMode] = useState("light")
  return (
    <div className={mode == "dark" ? "app active" : "app"}>

        <header className="navbar">
        <div className="logo">
          <h2>ROLEX</h2>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Featured</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">New</a></li>
          </ul>
        </nav>
        <div className="icons">
          <button className="icon">
            <i class="fa-regular fa-moon" onClick={() => {
              if(mode == "dark") {
                  setMode("light")
                } else{
                  setMode("dark")
                }
            }} ></i>
            <i class="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <span className="tag">Popular</span>
          <h1>NEW WATCH<br />COLLECTIONS B720</h1>
          <p>
            Latest arrival of the new imported watches of the B720 series,
            with a modern and resistant design.
          </p>
          <div className="hero-price">$1245</div>
          <div className="hero-buttons">
            <button className="btn-outline">Discover</button>
            <button className="btn-dark">ADD TO CART</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-bg"></div>
          <img src="/public/imgs/home 1.png" alt="watch" />
        </div>
      </section>

      <section className="featured">
        <h2>FEATURED</h2>
        <div className="featured-cards">

          <div className="card up">
            <span className="sale">SALE</span>
            <img src="/public/imgs/featured1 1.png" alt="" />
            <h3>JAZZMASTER</h3>
            <p className="price">$1050</p>
            <button>ADD TO CART</button>
          </div>

          <div className="card">
            <span className="sale">SALE</span>
            <img src="/public/imgs/featured1 1.png" alt="" />
            <h3>INGERSOLL</h3>
            <p className="price">$250</p>
            <button>ADD TO CART</button>
          </div>

          <div className="card">
            <span className="sale">SALE</span>
            <img src="/public/imgs/featured1 1.png" alt="" />
            <h3>ROSE GOLD</h3>
            <p className="price">$890</p>
            <button>ADD TO CART</button>
          </div>

        </div>
      </section>

      <section className="story">
        <div className="story-img">
          <div className="story-bg"></div>
          <img src="/public/imgs/story 1.png" alt="" />
        </div>

        <div className="story-text">
          <h2>OUR STORY</h2>
          <p>
            Watches are not just instruments for measuring time.
            They are an expression of personality and style.
          </p>
          <button className="btn-dark">DISCOVER</button>
        </div>
      </section>

      <section className="products">
        <h2>PRODUCTS</h2>
        <div className="products-grid">
          <div className="product">
            <img src="/public/imgs/product1.png" alt="" />
            <p>SPIRIT ROSE</p>
            <span>$950</span>
            </div>

          <div className="product">
            <img src="/public/imgs/product2.png" alt="" />
            <p>KHAKI PILOT</p>
          <span>$850</span>
          </div>

          <div className="product">
            <img src="/public/imgs/product3.png" alt="" />
            <p>JUBILEE BLACK</p>
          <span>$1250</span>
          </div>

          <div className="product">
            <img src="/public/imgs/product4.png" alt="" />
            <p>FOSIL ME3</p>
          <span>$650</span>
          </div>
        </div>
      </section>

      <section className="review">
        <div className="story-text">
          <p>
They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.
          </p>
        </div>

        <div className="story-img">
          <div className="story-bg"></div>
          <img src="/public/imgs/story 1.png" alt="" />
        </div>
      </section>

      <section className="new">
        <h2>NEW ARRIVALS</h2>
        <div className="new-grid">
          <div className="new-card">
            <img src="/public/imgs/new1.png" alt="" />
            <p>$$980</p>
            </div>

          <div className="new-card">
            <img src="/public/imgs/new2.png" alt="" />
          <p>$980</p>
          </div>

          <div className="new-card">
            <img src="/public/imgs/new3.png" alt="" />
          <p>$980</p>
          </div>

          <div className="new-card">
            <img src="/public/imgs/new4.png" alt="" />
          <p>$980</p>
          </div>

        </div>
      </section>

      <section className="newsletter">
        <h2>Subscribe Our Newsletter</h2>
        <div className="newsletter-box">

          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </section>

    <div className="footer-container">
      <footer>
        <div className="footer-section">
          <h3>Our Information</h3>
          <p>1234 - Peru</p>
          <p>La Libertad 43210</p>
          <p>123-456-789</p>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>Support Center</li>
            <li>Customer Support</li>
            <li>About Us</li>
            <li>Copy Right</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li>Road bikes</li>
            <li>Mountain bikes</li>
            <li>Electric</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <ul>
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p> Bedimcode. All rights reserved.</p>
      </div>
    </div>

    </div>
  )
}

export default App

