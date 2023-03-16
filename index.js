const mplay = () => {
    var audioElem = document.getElementById("audio");
    var element = document.getElementById("rotator");
    element.classList.toggle("rotator");
    if (audioElem.paused) audioElem.play();
    else audioElem.pause();
  };