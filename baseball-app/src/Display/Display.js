import React from "react";

const Display = props => {
  return (
    <>
      <h2>Display- At Bat:</h2>
      <p>Balls: {props.balls}</p>
      <p>Strikes: {props.strikes}</p>
    </>
  );
};

export default Display;
//creates a mock function which might be an amalgamation of what i was used to already from enzume library
//create a mock function that you can count how many times it was called
//as opposed to just making sure the result has been clicked/corerct peice of data
//for instance- if u declare jest.fun with a name, then u pass in
//say onclick elementt hen u fire event on click, can then say
//expect name of jest.fn to have been called all camel case, then # of times its been called...
