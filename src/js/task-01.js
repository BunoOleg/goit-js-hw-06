const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const categoeiesTitle = [];
categories.forEach((el) => {
  categoeiesTitle.push(
    el.querySelector("h2").textContent,
    el.querySelectorAll("ul>li").length
  );
});
console.log(...categoeiesTitle);
