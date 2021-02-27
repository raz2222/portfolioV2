import React from "react";
import "../Mail/Mail.css";

function Mail(props) {
  return (
    <nav class="circle-menu">
      <button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/18vhN13Ei53G6CrMsS6LEP2LJJYAqBBxr/view?usp=sharing"
          )
        }
      >
        <box-icon name="spreadsheet" color="#ffffff" className="cvIcon">
          <a href="https://drive.google.com/file/d/18vhN13Ei53G6CrMsS6LEP2LJJYAqBBxr/view?usp=sharing"></a>
        </box-icon>{" "}
        <p className="cv">cv </p>
      </button>
    </nav>
  );
}

export default Mail;
