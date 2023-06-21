import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


const firstBook = {
  author: "Carley Fortune",
  title: "Every Summer After",
  img: "./images/book-1.jpg",
};

const secondBook = {
  author: "Elin Hilderbrand",
  title: "The Five-Star Weekend",
  img: "https://m.media-amazon.com/images/I/71tvrdlSpTL._AC_UL400_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    </section>
  );
};
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>

    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);