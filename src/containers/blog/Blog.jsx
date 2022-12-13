import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from "./blog-imports";
import './blog.css';

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h2 className="gradient__text">A lot is happening and we're writing about it.</h2>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="August 10, 2022"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="September 28, 2022"/>
          <Article imgUrl={blog03} date="November 1, 2022"/>
          <Article imgUrl={blog04} date="December 4, 2022"/>
          <Article imgUrl={blog05} date="December 30, 2022"/>
        </div>
      </div>
    </div>
  )
}

export default Blog;