import React from 'react'
import { Button, HeaderWrapper } from '../../assets/styles/header'
import { ExploreText, ExploreWrapper } from '../../assets/styles/ExploreText'
import { exploreArr } from '../../commons/explore'

function Explore() {

    

  return (
    <HeaderWrapper className='explore'>
        <ExploreText>
            <h1 className='explore-head'>Explore Our Services</h1>
            <p className='explore-para'>We are self-service data analytics software that lets you create visually.</p>
            <ExploreWrapper>

            {exploreArr.map((item:any)=>{
                return <div className='explore-container' key={item.title}>
                    <img src={(item.logo)} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.para}</p>
                </div>
            })}
            </ExploreWrapper>
            <Button>Learn More</Button>
        </ExploreText>
    </HeaderWrapper>
  )
}

export default Explore