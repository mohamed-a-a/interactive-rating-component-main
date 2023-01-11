const rateCon = document.querySelector(".container")
const thankcon = document.querySelector(".thankYouCon")
const ratenumb = document.querySelectorAll(".btnnumb")
const button = document.querySelector(".btn-submit")
const rating = document.getElementById("rating")

console.log(rating)

ratenumb.forEach((rate) => {

    console.log(rate)

    rate.addEventListener("click", () => {

        rating.innerHTML = rate.innerHTML

    })


}
)


button.addEventListener("click", () => {

    rateCon.style.display = "none"
    thankcon.style.display = "block"
})


