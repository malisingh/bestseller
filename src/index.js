import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src="https://m.media-amazon.com/images/I/61HBIgPJt3L._AC_UL800_FMwebp_QL65_.jpg" alt='Every Summer After cover'/>
);
const Title = () => <h2>Every Summer After</h2>;
const Author = () => {
  return <h4>Carley Fortune</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);