import React from "react";

const Styling = () => {
  const date = new Date(2022, 1, 1, 19);
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Goedenmorgen";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Goedemiddag";
    customStyle.color = "green";
  } else {
    greeting = "Goedenavond";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
};

export default Styling;
