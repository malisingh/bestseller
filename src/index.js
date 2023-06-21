import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
 {
    author: "Carley Fortune",
    title: "Every Summer After",
    img: "./images/book-1.jpg",
  },
 {
    author: "Elin Hilderbrand",
    title: "The Five-Star Weekend",
    img: "https://m.media-amazon.com/images/I/71tvrdlSpTL._AC_UL400_.jpg",
  },
];


const BookList = () => {
  return (
    <section className='booklist'>
     {books.map((book) => {
      const { img, title, author } = book;
      return <Book img={img} title={title} author={author} />;
     })}
    </section>
  );
};
const Book = (props) => {
  const { img, title, author} = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);