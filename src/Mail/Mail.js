import React from "react";
import "../Mail/Mail.css";

function Mail(props) {
  return (
    <nav class="circle-menu">
      <label for="toggle" class="fa fa-share-alt" />
      <input type="checkbox" id="toggle" />
    </nav>
  );
}

export default Mail;
