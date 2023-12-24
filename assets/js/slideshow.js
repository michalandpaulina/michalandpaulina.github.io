const sleep = ms => new Promise(res => setTimeout(res, ms));
var init = false
const listOfImageUrls = [
    "assets/img/header/0001.jpg",
    "assets/img/header/0002.jpg",
    "assets/img/header/0003.jpg",
    "assets/img/header/0004.jpg",
    "assets/img/header/0005.jpg",
    "assets/img/header/0006.jpg",
    "assets/img/header/0007.jpg"
]

const slideShow = async () => {
    // if (init != true) {
    //     init = true
    //     document.getElementsByTagName('header')[0].setAttribute("style", `transition: all 1.2s linear;`)
    // }
    while (true) {
        let imageToShow = listOfImageUrls.shift();
        listOfImageUrls.push(imageToShow)
        document.getElementsByTagName('header')[0].setAttribute("style", `background-image: url(${imageToShow});`)
    //   console.log(document.getElementsByTagName('header')[0].style.getPropertyValue("background-image"))
    //   console.log(getComputedStyle(document.getElementsByTagName('header')[0]))
        await sleep(1 * 5000);
    }
  }
  
  slideShow();