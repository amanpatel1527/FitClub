import React, { useRef } from 'react'
import "./join.css";
import emailjs from '@emailjs/browser'


const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yb2kbc1', 'template_hn2ovcd', form.current, 'pTpVmEEwwXDe3lyyh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
 

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span >YOUR BODY</span>
                    <span className='stroke-text'> WITH US ?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user-email' placeholder='Enter your email ' />
                    <button className='btn-j btn'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join