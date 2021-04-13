import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Melissa"
      img="https://picsum.photos/200"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Michael"
      img="https://picsum.photos/300"
      tel="+98 765 4321"
      email="1@random.com"
    />
    <input id="fName" placeholder="Enter your first name." />
  </div>,
  document.getElementById("root")
);
