import React from "react";
import PropTypes from "prop-types";

export default function UserProfileCard(props) {
  return (
    <div className="profileCard">
      <h2>{props.name}</h2>
      <p>{props.about}</p>
      <h4>{props.age}</h4>
    </div>
  );
}

UserProfileCard.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  age: PropTypes.number,
};

UserProfileCard.defaultProps = {
  name: "Your Name Here",
  about: "No information available",
  age: 0,
};
