import styled from "styled-components";

 export const HeaderWrapper = styled.section`
    padding : 30px 130px;
    &.explore{
        background:#fbfbfb
    };
    &.intro{
        padding-top:121px
    };
    &.footer{
        background:#000;
        color:#ffffff
    }

 `
 export const Logo = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    > svg{
        margin-top:-11px
    }
 ` 
export const ListMenu = styled.ul`
    text-decoration: none;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    margin-top:0px;
`
export const ListItems = styled.li`
    color:#2D3748;
    font-size:16px;
    cursor:pointer;
`
export const Button = styled.button`
    background-color: #6153cd;
    outline: none;
    border: 0px;
    color: #ffffff;
    padding: 16px 24px;
    font-size: 16px;
    border-radius: 8px;
    font-weight: 700;
    cursor:pointer;
`

