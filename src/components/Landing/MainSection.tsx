import React from 'react'
import { Button, HeaderWrapper, Logo, } from '../../assets/styles/header'
import { Total,MainHeading, MainImageWrapper, MainLeft, MainPara, MainRight, OtherColorHeading, StarSection, StarSpan, TotalProject } from '../../assets/styles/Mainsection'
import main from '../../assets/images/image 6.png'
import {ReactComponent as Star} from '../../assets/images/star.svg'
function MainSection() {
  return (
    <HeaderWrapper>
        <Logo>

        <MainLeft>
            <MainHeading>
            Building Brands <br />in the <OtherColorHeading>Digital Age</OtherColorHeading>
            </MainHeading>
            <MainPara>
                Your partner in navigating the ever-evolving landscape of <br />
                digital marketing. From conceptualization to execution, we <br/>
                craft tailored solutions that drive results and elevate your <br />
                brand to new heights.
            </MainPara>
            <Button>Learn More</Button>
        </MainLeft>
        <MainRight>
            <MainImageWrapper>

            <img src={main} alt='main'/>
            <TotalProject>
                <StarSection>
                <Star/><StarSpan>PROJECTS</StarSpan>
                </StarSection>
                <Total>
                    <h3>600+</h3><span>Done</span>
                </Total>
            </TotalProject>
            </MainImageWrapper>
        </MainRight>
        </Logo>
    </HeaderWrapper>
  )
}

export default MainSection