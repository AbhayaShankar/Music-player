var myMusic = document.getElementById("music");
var icon = document.getElementById("icon");

icon.onclick = () => {
  if (myMusic.paused) {
    myMusic.play();
    icon.src = "media/pause.png";
  } else {
    myMusic.pause();
    icon.src = "media/play.png";
  }
};
