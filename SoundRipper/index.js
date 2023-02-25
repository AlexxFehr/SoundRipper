import "./style.css";
import http from "http";
import fs from "fs";
import { getYTVideoID } from "./getYTVideoID";

//Get form from web
const form = document.querySelector("form");

//On submit form
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  //TODO Check if the link is valid

  //Add the data from the form into the FormData datastructure
  const formData = new FormData(form);

  //Send post request and await reponse
  //TODO Save response with link and use to GET
  await fetch("http://localhost:8080/download", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      link: formData.get("link_input"),
      quality: formData.get("quality_input"),
    }),
  })

  //Download file
  location.href = "http://localhost:8080/download?id=" + getYTVideoID(formData.get("link_input"));
  

});
