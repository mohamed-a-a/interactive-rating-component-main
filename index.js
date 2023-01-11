const rateCon = document.querySelector(".container")
const thankcon = document.querySelector(".thankYouCon")
const ratenumb = document.querySelectorAll(".btnnumb")
const button = document.querySelector(".btn-submit")
const rating = document.getElementById("rating")

console.log(rating)

ratenumb.forEach((Rate) => {

    console.log(Rate)

    Rate.addEventListener("click", () => {

        rating.innerHTML = Rate.innerHTML

    })


}
)


button.addEventListener("click", () => {

    rateCon.style.display = "none"
    thankcon.style.display = "block"
})


