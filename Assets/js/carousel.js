var carousel = require("bootstrap").Carousel;
var collapse = require("bootstrap").Collapse; 

const sliderCarousel = () => {
  if(document.querySelector("#carouselExampleControls")){
  var myCarousel = [].slice.call(document.querySelector("#carouselExampleControls"));
  var myCarouselList = myCarousel.map(function (collapseEl) {
    return new collapse(collapseEl)
  })}
  if(document.querySelectorAll('.accordian-collapse')){
  var collapseElementList = [].slice.call(document.querySelectorAll('.accordian-collapse'))
  var collapseList = collapseElementList.map(function (collapseEl) {
  return new collapse(collapseEl)
})}


  console.log("carousel and accordian working");
 
};

export default sliderCarousel;
