import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const articleData = [
  {
    imgURL: blog01,
    date: 'Sept 26, 2021',
    title: 'GPT-3 and Open Ai is the future. Let us explore how it is?',
  },
  {
    imgURL: blog02,
    date: 'Sept 27, 2021',
    title: '10 Step To Successfully Outsourcing Your Online Business',
  },
  {
    imgURL: blog03,
    date: 'Sept 28, 2021',
    title: 'Thousands Already Make Millions Online And So Can You',
  },
  {
    imgURL: blog04,
    date: 'Sept 29, 2021',
    title: 'Are You Too Clever For Success?',
  },
  {
    imgURL: blog05,
    date: 'Sept 30, 2021',
    title: 'The Ultimate Guide to Making Money Online',
  },
];

const Blog = () => {
  return (
    <div className='gta3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article
            imgUrl={articleData[0].imgURL}
            date={articleData[0].date}
            title={articleData[0].title}
          />
        </div>
        <div className='gpt3__blog-container_groupB'>
          {articleData.slice(1).map((item, index) => (
            <Article
              imgUrl={item.imgURL}
              date={item.date}
              title={item.title}
              key={item.title + index}
            />
          ))}
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Blog;
