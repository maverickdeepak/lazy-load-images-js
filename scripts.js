const images = document.querySelectorAll("img");
let imagesOptions = {};

const observer = new IntersectionObserver((enteries, observer) => {
  enteries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    image.src = image.src.replace("&w=10", "&w=800");
    observer.unobserve(image);
  });
}, imagesOptions);

images.forEach((image) => {
  observer.observe(image);
});
