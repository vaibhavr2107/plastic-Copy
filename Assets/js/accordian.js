const accord = () => {

  var accordian = document.querySelectorAll(".accordian_open");
  var toggle = document.querySelectorAll(".accordian_close");
  if(accordian != "" && toggle != ""){
  for (let i = 0; i < accordian.length; i++) {
    hidden(toggle[i]);
    accordian[i].addEventListener("click", function () {
      showhide(toggle[i]);
      for (let j = 0; j <= accordian.length; j++) {
        if (j != i) {
          hidden(toggle[j]);
        }
      }
    });
    console.log(toggle[i]);
  }

  function showhide(a) {
    if (a.style.height === "0px") {
      a.style.display = "block";
      a.style.height = "133px";
      a.style.padding = "10px 10px";
    } else {
      a.style.height = "0px";
      a.style.padding = "0px 10px";
    }
    console.log("working");
  }
  function hidden(b) {
    b.style.height = "0px";
    b.style.padding = "0px 10px";
    console.log("hide");
  }
};}

export default accord;
