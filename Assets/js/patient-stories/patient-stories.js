export class patient_stories {
  constructor() {
    this.inline_border = document.querySelectorAll(
      ".patient-stories__inline-border"
    );
    this.images = document.querySelectorAll(".stories_img");
    this.filter_open = document.getElementById("filter_open");
    this.filter_close = document.getElementById("filter_close");
    this.filter = document.getElementById("patient-stories_filter");
    this.onload();
    console.log("working");
  }

  onload() {
    if(this.filter && this.filter_open){
    var that = this;
    this.filter_open.addEventListener("click", (this.showfilter = showfilter));
    this.filter_close.addEventListener(
      "click",
      (this.closeFilter = closeFilter)
    );
    console.log(this);

    this.inline_border.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        this.images[index].classList.remove("stories_img");
      });
      item.addEventListener("mouseleave", () => {
        this.images[index].classList.add("stories_img");
      });
      console.log("working images overlay");
    });

    function showfilter() {
      that.filter.classList.add("show");
      console.log(filter);
    }
    function closeFilter() {
      that.filter.classList.remove("show");
    }
  }
}
}

// /*
// const patient_stories = () =>{

// let inline_order = document.querySelectorAll('.patient-stories__inline-border');
// let images = document.querySelectorAll('.stories_img');
// let filter_open = document.getElementById('filter_open');
// let filter_close = document.getElementById('filter_close');
// let filter = document.getElementById('patient-stories_filter');
// for(let i=0; i<inline_order.length; i++){
//     inline_order[i].addEventListener('mouseover', function(){
//       images[i].classList.remove("stories_img");

//     });
//     inline_order[i].addEventListener('mouseleave', function(){
//         images[i].classList.add("stories_img");
//         console.log(images[i]);
//       });

// }
// /*
// filter_open.onclick = function(){
//   filter.style.display = "block";
//   console(filter);
// }
// filter_close.onclick = function(){
//   filter.style.display = "none";
// }*/
// /*
// // function showfilter(){

// //   filter.classList.add("show");

// //   console.log(filter);
// // }
// // function closeFilter(){

// //   filter.classList.remove("show");

// // }
// // filter_open.addEventListener("click",showfilter,false);
// // filter_close.addEventListener("click",closeFilter,false);

// // }
// // export default patient_stories;
