import React from 'react'
import { Button, HeaderWrapper } from '../../assets/styles/header'
import { BlogCard, BlogWrapper } from '../../assets/styles/Blog'
import { blog } from '../../commons/blog'
import { explore } from '../../commons/explore'
import right from '../../assets/images/arrow-right.svg'
import { useNavigate } from 'react-router'

function Blog() {
    const navigate=useNavigate()
    const handlePost=():void=>{
        navigate('/posts')
    }
  return (
    <HeaderWrapper className='explore'>
        <BlogWrapper>
        <h1>Our Blogs</h1>
        <div className='card-view'>
            {blog.map((item:explore)=>{
                return <BlogCard>
                    <img src={item.logo} alt='logo'/>
                    <div className='blog-para'>
                        <h1>{item.title}</h1>
                        <p>{item.para}</p>
                        <div className='right-arrow'>
                        <img src={right} alt="right" />
                        </div>
                    </div>
                </BlogCard>
            })}
        </div>
        <div className='button'>
            <Button onClick={handlePost}>View all posts</Button>
        </div>

        </BlogWrapper>
    </HeaderWrapper>
  )
}

export default Blog