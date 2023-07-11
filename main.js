function getSelectedValue() {
  var category = categories.value;
  return category;
}
function response() {
  document.querySelector(".loader").style.visibility = "visible";
  let category = getSelectedValue();
  fetch("https://api.api-ninjas.com/v1/quotes?category=" + category, {
    method: "GET",
    headers: { "X-Api-Key": "AwcbuoOyyV3J0kDVtQqSWg==BItpvlVGu2wuTrgd" },
    contentType: "application/json",
  })
    .then((res) => res.json())
    .then((data) => {
      let quotes = data[0];

      document.querySelector(".quotes").innerText = quotes.quote;
      document.querySelector(".author").innerText = quotes.author;
      document.querySelector(".loader").style.visibility = "hidden";
    });
}

document.querySelector("#btn").addEventListener("click", (e) => {
  response();
});

let categories = document.getElementById("categories");
categories.addEventListener("change", response);
