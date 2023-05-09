import React from 'react'
import { faStar } from "@fortawesome/free-solid-svg-icons";



const Course = (props) => {
    const { image, title, author, rating, price } = props;
 
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="Book cover" />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p>Author: {author}</p>
        <div className="rating">
          <span>Rating:</span>
          {Array.from({ length: rating }, (_, index) => (
            <i key={index} className="fa fa-star"></i>
          ))}
        </div>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

const App = () => {
  const books = [
    {
      id: 1,
      image: 'book1-cover.jpg',
      title: 'Book 1',
      author: 'Author 1',
      rating: 5,
      price: '$19.99'
    },
    {
      id: 2,
      image: 'book2-cover.jpg',
      title: 'Book 2',
      author: 'Author 2',
      rating: 4,
      price: '$14.99'
    },
    {
      id: 3,
      image: 'book3-cover.jpg',
      title: 'Book 3',
      author: 'Author 3',
      rating: 3,
      price: '$9.99'
    }
  ];

  return (
    <div>
      {books.map((book) => (
        <Course
          key={book.id}
          image={book.image}
          title={book.title}
          author={book.author}
          rating={book.rating}
          price={book.price}
        />
      ))}
    </div>
  );
};



export default Course;