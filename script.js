// const card = document.querySelectorAll(".card")
// // cart.addEventListener("click",()=>{
// //     cart.children[0]
// // })

// // cart.forEach((card)=>{
// //     card.addEventListener("click",()=>{
// //         card.children[0].style.transform = "rotateY(`180deg`)";

// //     })
// // })


// card.forEach((card) => {
//     card.addEventListener("click"   ,() =>{
//         card.children[0].style.transform = "rotateY(180deg)"
//     })
// })

// const temp = [
//     "ada sharma.jpg",
//     "aishwarya rai.jpg",
//     "anne hathaway.jpg",
//     "Chris Evans.jpg",
//     "daniel radcliffe.webp",
//     "dwayne johnson.jpg",
// ];

// let photos = [...temp, ...temp]

// function getrandom() {
//     let random = Math.floor(Math.random() * photos.length )

//     console.log(random)

// }
// getrandom()



const cards = document.querySelectorAll(".card")
let timer = document.querySelector(".timer")

const temp = [
    "ada sharma.jpg",
    "aishwarya rai.jpg",
    "anne hathaway.jpg",
    "Chris Evans.jpg",
    "daniel radcliffe.webp",
    "dwayne johnson.jpg",
];

const actualPhotos = [...temp, ...temp]
const already = []
let count = ""
let openphotostore = []


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
        return randomValue
    }
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.children[0].style.transform = "rotateY(180deg)"


        openphotostore.push(card.children[0].children[0])
        count++

        

        // setTimeout(() => {

        //     if (count > 1) {
        //         if (openphotostore[0].src === openphotostore[1].src) {
        //             count = 0
        //             openphotostore.length = 0
        //             console.log("match")
        //         }
        //         else {
        //             count = 0
        //             openphotostore.forEach((openphoto) => {
        //                 openphoto.parentElement.parentElement.style.transform = "rotate(0)"
        //                 // openphoto.pa
        //             })
        //             console.log("no mach")
        //             openphotostore.length = 0
        //         }
        //     }
        // }, 500)
        // openphotostore.push(card.children[0].style.transform = "rotateY(180deg)")
        // count++
        // console.log(count)
        // if(count==2){
        //     card.children[0].style.transform = "rotateY(180deg)"
        // }
        // else{
        //     card.children[0].style.transform = "rotateY(180deg)"
        //     count++
        //     console.log(count)
        // }
    })

})