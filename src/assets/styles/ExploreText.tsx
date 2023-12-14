import styled from "styled-components";

export const ExploreText = styled.div`
    text-align:center;
    line-height:20px;
    padding-bottom:30px;
    > .explore-head{
        color: #122b7e;
        font-size:40px;
        font-weight:600;
    };
    > .explore-para{
        color: #47536B
    }
`
export const ExploreWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom:24px;
    > .explore-container{
        text-align: left;
        padding-right: 48px;
    };
    > .explore-container > p {
        color: #857ea2;
    };
    > .explore-container > h3{
        color:#122b7e;
        font-weight:400
    }
`