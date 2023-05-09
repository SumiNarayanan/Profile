import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import instructorImage from "./image/instructor.jpeg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button, Container } from "react-bootstrap";
import About from "./About";
import Course from "./Course";

const Profile = ({ data }) => {
  const { rating, subscribers, views, yearsOfExperience, expertIn } = data;

  const starCount = 5;
  const stars = Array.from({ length: starCount }).map((_, index) => (
    <FontAwesomeIcon icon={faStar} key={index} />
  ));
  return (
    <div>
      <Container>
        <div className="mainContainer">
          <div className="icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="profile">
            <div className="profileImage">
              <img src={instructorImage} alt="Profile" />
            </div>
            <div className="profileText">
              <h1>Instructor Name</h1>
              <div className="profileText1">
                <h4 className="star">{stars}</h4>
                <h5>Subscribers: {subscribers}</h5>
                <h5>Views: {views}</h5>
              </div>
              <div className="profileText2">
                <p>Years of Experience: {yearsOfExperience}</p>
              </div>
              <div className="profileText3">
                <h5>Expert in</h5>
                {expertIn.map((topic, index) => (
                  <Button key={index}>{topic}</Button>
                ))}
              </div>
            </div>
          </div>
          {/* <About /> */}
          <Container/>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
