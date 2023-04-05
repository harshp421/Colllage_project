import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import service01 from '../images/service.png'
import service02 from '../images/service-02.png'
import service03 from '../images/service-03.png'
import service04 from '../images/service-04.png'
import service05 from '../images/service-05.png'


const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERstyliest FOR PROS.</h4>
                <h5>Woman's Tshirt</h5>
                <p>From 400 or 1500.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                <h4>SUPERstyliest FOR PROS.</h4>
                <h5>Woman's Tshirt</h5>
                <p>From 400 or 1500.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                <h4>SUPERstyliest FOR PROS.</h4>
                <h5>Woman's Tshirt</h5>
                <p>From 400 or 1500.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                <h4>SUPERstyliest FOR PROS.</h4>
                <h5>Woman's Tshirt</h5>
                <p>From 400 or 1500.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                <h4>SUPERstyliest FOR PROS.</h4>
                <h5>Woman's Tshirt</h5>
                <p>From 400 or 1500.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className='home-wrapper-2 py-5'>

<div className="container-xxl">
  <div className="row">
    <div className="col-12">
      <div className="service d-flex align-items-center justify-content-between "
      >
        <div className='d-flex align-items-center gap-15'>
          <img src={service01} alt="services" />
          <div>
            <h6> Free Shipping  </h6>
            <p className='mb-0'>from all order above 500  </p>
          </div>
        </div>
        <div className='d-flex align-items-center gap-15'>
          <img src={service02} alt="services" />
          <div>
            <h6>Daily surprice Offer</h6>
            <p className='mb-0'> save upto 25% off </p>
          </div>
        </div>
        <div className='d-flex align-items-center gap-15'>
          <img src={service03} alt="services" />
          <div>
            <h6>Support 24/7 </h6>
            <p className='mb-0'> Shop with an export  </p>
          </div>
        </div>
        <div className='d-flex align-items-center gap-15'>
          <img src={service04} alt="services" />
          <div>
            <h6>Affortable Prices </h6>
            <p className='mb-0'> Get fectory Default price</p>
          </div>
        </div>
        <div className='d-flex align-items-center gap-15'>
          <img src={service05} alt="services" />
          <div>
            <h6>Secure Payment</h6>
            <p className='mb-0'> 100 % protected payment </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
    </section>
      {/* <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container> */}


      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Man's t-shirt</h6>
                  <p>10 Items</p>
                </div>
                 <div className="w-24">
                 <img src="https://cdna.lystit.com/photos/717e-2014/01/30/nike--futura-logo-t-shirt-product-1-16964995-0-335918059-normal.jpeg" alt="camera"  className="img-fluide " style={{width:"110px"
                }}/>                 </div>
              </div>
              <div className="d-flex gap align-items-center">
              <div>
                  <h6>Man's t-shirt</h6>
                  <p>10 Items</p>
                </div>
                 <div className="w-24">
                 <img src="https://cdna.lystit.com/photos/717e-2014/01/30/nike--futura-logo-t-shirt-product-1-16964995-0-335918059-normal.jpeg" alt="camera"  className="img-fluide " style={{width:"110px"
                }}/>                 
                </div>
              </div>
              <div className="d-flex gap align-items-center">
              <div>
                  <h6>Man's t-shirt</h6>
                  <p>10 Items</p>
                </div>
                 <div className="w-24">
                 <img src="https://cdna.lystit.com/photos/717e-2014/01/30/nike--futura-logo-t-shirt-product-1-16964995-0-335918059-normal.jpeg" alt="camera"  className="img-fluide " style={{width:"110px"
                }}/>                 </div>
              </div>
              <div className="d-flex gap align-items-center">
              <div>
                  <h6>Man's t-shirt</h6>
                  <p>10 Items</p>
                </div>
                 <div className="w-24">
                 <img src="https://cdna.lystit.com/photos/717e-2014/01/30/nike--futura-logo-t-shirt-product-1-16964995-0-335918059-normal.jpeg" alt="camera"  className="img-fluide " style={{width:"110px"
                }}/>                 </div>
              </div>
              <div className="d-flex gap align-items-center">
              <div>
                  <h6>Man's t-shirt</h6>
                  <p>10 Items</p>
                </div>
                 <div className="w-24">
                 <img src="https://cdna.lystit.com/photos/717e-2014/01/30/nike--futura-logo-t-shirt-product-1-16964995-0-335918059-normal.jpeg" alt="camera"  className="img-fluide " style={{width:"110px"
                }}/>                 </div>
              </div>
              <div className="d-flex gap align-items-center">
                 <div>
                  <h6>Man's t-shirt</h6>
                  <p>10 Items</p>
                </div>
                 <div className="w-24">
                 <img src="https://cdna.lystit.com/photos/717e-2014/01/30/nike--futura-logo-t-shirt-product-1-16964995-0-335918059-normal.jpeg" alt="camera"  className="img-fluide " style={{width:"110px"
                }}/>                 </div>
              </div>
              <div className="d-flex gap align-items-center">
                 <div>
                  <h6>Man's t-shirt</h6>
                  <p>10 Items</p>
                </div>
                 <div className="w-24">
                 <img src="https://cdna.lystit.com/photos/717e-2014/01/30/nike--futura-logo-t-shirt-product-1-16964995-0-335918059-normal.jpeg" alt="camera"  className="img-fluide " style={{width:"110px"
                }}/>                 </div>
              </div>
              <div className="d-flex gap align-items-center">
                 <div>
                  <h6>Man's t-shirt</h6>
                  <p>10 Items</p>
                </div>
                 <div className="w-24">
                 <img src="https://cdna.lystit.com/photos/717e-2014/01/30/nike--futura-logo-t-shirt-product-1-16964995-0-335918059-normal.jpeg" alt="camera"  className="img-fluide " style={{width:"110px"
                }}/>                 </div>
              </div>
             
             
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      {/* <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="https://logos-world.net/wp-content/uploads/2020/05/Zara-Logo.png" style={{width:"120px"}} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-700x394.png" style={{width:"120px"}} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://logos-world.net/wp-content/uploads/2020/04/Levis-Logo-120x67.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://logos-world.net/wp-content/uploads/2020/04/Louis-Vuitton-Logo-120x67.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://logos-world.net/wp-content/uploads/2020/04/Air-Jordan-Logo-120x67.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://logos-world.net/wp-content/uploads/2020/04/Supreme-Logo-120x67.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;