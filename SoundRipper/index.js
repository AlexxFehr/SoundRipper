import "./style.css";

//Get form from web
const form = document.querySelector("form");

//On submit form
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  //TODO Check if the link is valid

  //Add the data from the form into the FormData datastructure
  const formData = new FormData(form);

  //Send post request and await reponse
  const response = await fetch("http://localhost:8080/download", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify({
      link: formData.get("link_input"),
      quality: formData.get("quality_input"),
    }),
  });

});
