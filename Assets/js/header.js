export class header{

   constructor(){

     this.services = document.querySelector(".navbar_3_services");
     this.services_list = document.querySelector(".navbar_3_services_list");
     this.nav4_menu = document.querySelector(".navbar_4_menu_ul_li")
     this.menu = document.getElementById("menu");
     this.onload();
     console.log("working");

   }

   onload(){
   var that = this;
   this.services.addEventListener("mouseover", this.display= display);
   this.services_list.addEventListener("mouseleave", this.hide= hide);
   this.menu.addEventListener("click",this.toggle= toggle);
   console.log(this.services);
   

   function display(){
    this.style.background = "black";
    that.services_list.style.display = "flex";
   
    }

    function hide(){
      
      setTimeout( () => {
          that.services.style.background = "transparent";
          this.style.display = "none";
        }, 100);  
      
    }
    function toggle() {
      console.log("working");
      if (that.nav4_menu.style.display === "none") {
        that.nav4_menu.style.display = "flex";
      } else {
        that.nav4_menu.style.display = "none";
      }
    }
   }
   
}
























/*
var services = document.querySelector(".navbar_3_services")
var services_list = document.querySelector(".navbar_3_services_list");

const services_show_hide = () =>{
services.addEventListener("mouseover", display);
services_list.addEventListener("mouseleave", hide);
document.getElementById("menu").addEventListener("click",toggle);


function display(){
    this.style.background = "black";
    document.querySelector(".navbar_3_services_list").style.display = "flex";
    
}

function hide(){
    setTimeout(function() {
        services.style.background = "transparent";
        document.querySelector(".navbar_3_services_list").style.display = "none";
      }, 100);  
    
}


function toggle() {
    var x = document.querySelector(".navbar_4_menu_ul_li");
    console.log("working");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}



export default services_show_hide;
*/