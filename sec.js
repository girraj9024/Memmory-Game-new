const cards = document.querySelectorAll(".card")
let timerDiv = document.querySelector(".timer")
let bodyman = document.querySelector("body")
let timer = ""
const temp = [
  "ada sharma.jpg",
  "aishwarya rai.jpg",
  "anne hathaway.jpg",
  "Chris Evans.jpg",
  "daniel radcliffe.webp",
  "dwayne johnson.jpg",
];
let Match = ""


const actualPhotos = [...temp, ...temp]
const already = []
let count = ""
const openPhoto = []

for (let i = 0; i < actualPhotos.length; i++) {
  const img = document.createElement("img")
  img.src = 'assets/' + actualPhotos[getARandomValue()];
  cards[i].children[0].children[1].append(img)
}


function getARandomValue() {
  let randomValue = Math.floor(Math.random() * actualPhotos.length);
  if (already.includes(randomValue)) return getARandomValue();
  else {
    already.push(randomValue)
  }
  return randomValue
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.children[0].style.transform = "rotateY(180deg)"



    //store the photo
    openPhoto.push(card.children[0].children[1].children[0]);


    //Increment open photo counter
    count++;

    //if 2 photos are open, start matching
    setTimeout(() => {

      if (count > 1) {
        if (openPhoto[0].src === openPhoto[1].src) {
          console.log("Match");
          console.log(Match);
          Match++

          //reset open photo counter, empty store

          count = 0;
          openPhoto.length = 0;
        } else {
          console.log("Not Match")

          //reset photo,
          //empty store

          count = 0;
          openPhoto.forEach((openPhotos) => {
            openPhotos.parentElement.parentElement.style.transform = "rotate(0)"
          })
          openPhoto.length = 0;
        }
      }
    }, 500)
  })

})
function countdown(seconds) {
  for (let i = seconds; i >= 0; i--) {
    setTimeout(function () {
      timerDiv.innerHTML = i
      if (i === 0) {
        bodyman.style.display = "none"
        alert("time is over")
      }
      if (Match == 6) {
        bodyman.style.display = "none"
        // alert("girads")
      }
    }, (seconds - i) * 1000);
  }
}
countdown(45);