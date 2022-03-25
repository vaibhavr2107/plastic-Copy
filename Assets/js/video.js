const videoPlay = () => {
   const play = document.getElementById("play");
   const close = document.getElementById("close");

   if (play) {
      play.addEventListener("click", () => {
         document
            .getElementById("videoplay")
            .setAttribute("src", "../../videos/doc-video.mp4");
      });
   }
   if (close) {
      close.addEventListener("click", () => {
         document.getElementById("videoplay").setAttribute("src", "");
      });
   }
};

export default videoPlay;
