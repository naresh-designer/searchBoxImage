const search = document.querySelector(".search input");
const images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", (event) => {
  if (event.type == "keyup") {
    let searchValue = search.value;
    let value = searchValue.toLowerCase();
    images.forEach((image) => {
      if (value === image.dataset.name) {
        return (image.style.display = "block");
      }
      image.style.display = "none";
    });
    console.log(value);
  }
});

search.addEventListener("keyup", () => {
  if (search.value != "") return;

  images.forEach((image) => {
    image.style.display = "block";
  });
});
