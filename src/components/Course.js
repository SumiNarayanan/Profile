import React, { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { courseData } from "./Course.data";
import instructorImage from "./image/instructor.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Course = () => {
  const [items, setItems] = useState(courseData);
  return (
    <div className="CourseData">
      <h2 >Courses(29)</h2>
      {items.map((item) => (
        <div key={item.id}>
          
          <div className="card">
            
            <div className="image">
              <img src={require(`./image/${item.image}`)} alt="BookCover" />
            </div>
            <div className="details">
              <h2>{item.title} </h2>
              <p>{item.author}</p>
<div className="details2">
              <div className="rating">
                <p>{item.stars}
                {Array.from({ length: item.rating }, (_, index) => (
                  <FontAwesomeIcon icon={faStar} key={index} />
                ))}
                </p>
                
              </div>
              <p>{item.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
// };


export default Course;
