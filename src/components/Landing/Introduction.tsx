import React from 'react'
import { HeaderWrapper } from '../../assets/styles/header'
import { IntroImage, IntroText,IntroWrapper } from '../../assets/styles/Introduction'
import img from '../../assets/images/Rectangle 21.png'
import { ReactComponent as Comma } from '../../assets/images/comma.svg'
import { ReactComponent as LeftArrow } from '../../assets/images/arrow-left.svg'
import { ReactComponent as RightArrow } from '../../assets/images/arrow-right.svg'


function Introduction() {
  return (
    <HeaderWrapper className='intro'>
        <IntroWrapper>

        
        <IntroImage>
            <img src={img} alt='img'/>
            <span>
                <Comma/>
            </span>
        </IntroImage>
        <IntroText>
            <p>
            “The results have been incredible. With Power Digital, it feels like <br />
            they’re in our trench, supporting and understanding us. They’re like <br/>
             partner and mentor in helping us get where we want to be.”
            </p>
            <br />
            <span className='name'>David Calathan</span><span> - Director of Design Operations, New York</span>
            <div className='arrows'>
                <LeftArrow/>
                <RightArrow/>
            </div>
        </IntroText>
        </IntroWrapper>
    </HeaderWrapper>
  )
}

export default Introduction