import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import instructorImage from "./image/instructor.jpeg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button, Container } from "react-bootstrap";

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
              <FontAwesomeIcon icon={faSquareInstagram} />
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

          <Container />
        </div>
        <div className="AboutContent">
          <h2>About Her</h2>
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
          <p>
            "Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus id quod maxime placeat facere possimus,
            omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
            autem quibusdam et aut officiis debitis aut rerum necessitatibus
            saepe eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
            aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat."
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
