import React from 'react'
import {AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const Contect = () => {
  return (
   <>
    <Meta title="Contect us"/>
      <BreadCrumb title='Contect us' />
      <Container class1="contect-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12 w-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.1465440885697!2d72.62172105518187!3d23.002240055899303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86739a9f1cd5%3A0x1af3f33b03fbe446!2sRoyal%20COLLECTION!5e0!3m2!1sen!2sin!4v1672820687562!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            className='border-0 w-100'
            allowFullScreen=""
             loading="lazy" referrerPolicy="no-referrer-when-downgrade"
             title='map'
             >

             </iframe>
            </div>

            <div className="col-12 mt-5">
              <div className="contect-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className='contect-title'>Contect </h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" name=""  className='form-control' id="" placeholder='name'/>
                    </div>
                    <div>
                      <input type="email" name=""  className='form-control' id="" placeholder='Email'/>
                    </div>
                    <div>
                      <input type="tel" name=""  className='form-control' id="" placeholder='Mobile no'/>
                    </div>
                    <div>
                     <textarea name="" id=""
                    className='w-100 form-control'
                     cols="30" rows="4"
                     placeholder='Comments'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'> Submit</button>
                    </div>

                  </form>
                     </div>
                <div>
                  <h3 className='contect-title'>Get In Touch  With Us</h3>
                  <ul className="ps-0">
                  <li className='mb-3 d-flex gap-15 align-items-center m-0' >
                   <AiOutlineHome className='fs-3'/>
                  <address className='mb-0'>Hno: 34/267 Gujrat housing board,
                      maninagar
                      ahemedabad</address>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center m-0'>
                    <AiOutlinePhone className='fs-3'/>
                    <a href="tel:+91 9537128189"> 9537128189</a>
                    </li>
                  <li className='mb-3 d-flex gap-15 align-items-center m-0'>
                    <AiOutlineMail className='fs-3'/>
                    <a href="mailto:harshparmar0421@gmail.com">
                    harshparmar0421@gmail.com
                    </a>
                    
                    </li>
                  <li className='mb-3 d-flex gap-15 align-items-center m-0'>
                    <AiOutlineInfoCircle className='fs-3'/>
                    <p className='mb-0'>monday to friday 10pm to -8pm  </p>
                    </li>
                    
                  </ul>
                  </div>
                 
              </div>
            </div>
          </div>
       
      </Container>
   </>
  )
}

export default Contect