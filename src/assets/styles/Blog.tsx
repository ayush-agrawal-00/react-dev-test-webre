import styled from "styled-components";

export const BlogWrapper = styled.div`
    > h1{
        font-size: 40px;
        font-weight: 600;
    };
    > .card-view{
        display:flex;
        justify-content:space-between;
    };
    > .button{
        padding:60px 0px 30px;
        text-align:center;
    }
`
export const BlogCard = styled.div`
    height : 595px;
    z-index: 0;
    position:relative;
    > .blog-para{
        width: 285px;
        height: 219px;
        z-index:1;
        background-color:#fff;
        position: absolute;
        bottom: 0;
        right: 0;
        padding:20px;
        > h1{
            font-weight:500;
            color: #0F0049;
        };
        > p{
            color : #9690af;
        };
        > .right-arrow{
            text-align: end;
            >img{
                cursor:pointer;
            }
        }
    }
`