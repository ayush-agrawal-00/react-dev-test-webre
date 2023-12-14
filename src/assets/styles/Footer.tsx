import styled from "styled-components";

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    > .col-md-6{
        width:60%;
        line-height:2;
        > p{
            line-height: 28px;
        };
        > .social-media{
            margin-top:30px;
            width: 113px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            > img{
                cursor:pointer;
            }
        }
    };
    > .col-md-2{
        width:20%;
        line-height:2;
        > p{
            cursor:pointer;
        }
    }
    
`