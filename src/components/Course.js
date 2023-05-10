import React from 'react'
import { faStar } from "@fortawesome/free-solid-svg-icons";



const Course = (props) => {
    const { image, title, author, rating, price } = props;


 
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="BookCover" />
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
          }
// };

const App = () => {
  const courses = [
    {
      id: 1,
      image: 'Course 1',
      title: '',
      author: 'Author 1',
      rating: 5,
      price: '$19.99'
    },
    {
      id: 2,
      image: 'course 2',
      title: '',
      author: 'Author 2',
      rating: 4,
      price: '$14.99'
    },
    {
      id: 3,
      image: 'course 3',
      title: '',
      author: 'Author 3',
      rating: 3,
      price: '$9.99'
    }
  ];

  return (
    <div>
      {courses.map((course) => (
        <Course
          key={course.id}
          image={course.image}
          title={course.title}
          author={course.author}
          rating={course.rating}
          price={course.price}
        />
      ))}
    </div>
  );
};



export default Course;