const rateCon = document.querySelector(".container")
const thankcon = document.querySelector(".thankYouCon")
const ratenumb = document.querySelectorAll(".numb")
const button = document.querySelector(".btn-submit")
const rating = document.getElementById("rating")

console.log(rating)

ratenumb.forEach((rate) => {

    rate.addEventListener("click", () => {

        rating.innerHTML = rate.innerHTML
        rate.style.backgroundColor = "hsl(217, 12%, 63%)"
        rate.style.color = "white"
    })


}
)


button.addEventListener("click", () => {

    rateCon.style.display = "none"
    thankcon.style.display = "block"
})


