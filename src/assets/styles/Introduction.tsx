import styled from "styled-components";

export const IntroImage = styled.div`
    width:30%;
    position:relative;
    > span{
        position: absolute;
        top: -25px;
        left: -32px;
    }
`
export const IntroText = styled.div`
    width:70%;
    position:relative;
    > p{
        font-size: 24px;
        color: #47536B;
        font-weight: 400;
        margin-top:0px;
    };
    > span{
        font-size: 24px;
        color: #47536B;
        font-weight: 400;
        padding-bottom:20px;
    };
    > .name{
        font-weight:500;
    };
    > .arrows{
        width: 60px;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        right: 0;
        cursor:pointer;
    };

`
export const IntroWrapper = styled.div`
    display:flex;
    padding-bottom:50px
`