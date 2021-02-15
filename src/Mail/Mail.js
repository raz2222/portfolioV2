import React from "react";
import "../Mail/Mail.css";

function Mail(props) {
  return (
    <nav class="circle-menu">
      <label for="toggle" class="fa fa-share-alt" />
      <input type="checkbox" id="toggle" />

      <menu>
        <a href="https://www.facebook.com/profile.php?id=100016635768808">
          <li class="fa fa-facebook"></li>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100016635768808">
          <li class="fa fa-linkedin"></li>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100016635768808">
          <li class="fa fa-google-plus"></li>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100016635768808">
          <li class="fa fa-twitter"></li>
        </a>
      </menu>
    </nav>
  );
}

export default Mail;
