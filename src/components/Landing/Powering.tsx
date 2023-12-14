import React from 'react'
import { PoweringWrapper , Para, GenWrap } from '../../assets/styles/Powering'
import { poweringimg } from '../../commons/powering'

function Powering() {
  return (
    <PoweringWrapper>
        <Para>Powering next-gen companies</Para>
        <GenWrap>
            {poweringimg.map((item:any)=><img src={item} alt='pwr' key={item}/>)}
        </GenWrap>
    </PoweringWrapper>
  )
}

export default Powering