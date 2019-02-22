const acc = document.getElementsByClassName("accordion");
const image = document.getElementsByClassName("image")
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var divStyle = this.nextElementSibling;
    if (divStyle.style.maxHeight) {
      divStyle.style.maxHeight = null;
    } else {
      divStyle.style.maxHeight = divStyle.scrollHeight + "px" ;
    }
    let currImage = this.childNodes;
    console.log(currImage);
    let imgSource = currImage[1].getAttribute("src");
    console.log(imgSource);
    if (imgSource === "images/add.svg" ){
        imgSource = "images/minimize.jpg";
    }
    else if (currImage[1].getAttribute("src") === "images/minimize.jpg" )  {
        console.log(currImage[1].getAttribute("src"));
        currImage[1].setAttribute('src', './images/add.svg')
    }
  });
}
