import React from 'react'
import { HeaderWrapper } from '../assets/styles/header'
import { FooterWrapper } from '../assets/styles/Footer'
import { footer, footerObj } from '../commons/footer'
import facebook from '../assets/images/logo-fb-simple 2.svg';
import insta from '../assets/images/insta.svg';
import twitter from '../assets/images/twitter.svg'
function Footer() {
  return (
    <HeaderWrapper className='footer'>
        <FooterWrapper>
            <div className='col-md-6'>
            <h3 className='footer-text-heading'>
                    Digital agency    
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Nullam dictum aliquet accumsan porta lectus ridiculus in <br />
             mattis. Netus sodales in volutpat ullamcorper amet <br />
             adipiscing fermentum.
            </p>
            <div className='social-media'>
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={insta} alt="" />
            </div>
            </div>
            {footerObj.map((item:footer,key)=>{
                return<div className='col-md-2' key={key}>
                    <h3 className='footer-text-heading'>
                        {item.title}
                    </h3>
                    {item.arr.map((item:string)=>{
                        return <p key={item}>{item}</p>
                    })}
                </div>
            })}
            
        </FooterWrapper>
    </HeaderWrapper>
  )
}

export default Footer