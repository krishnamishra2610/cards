// const goto = document.querySelector(".container")

// goto.addEventListener("click", (e) => {
//     if (e.target.matches("button")) {
//         window.location = "/img/" + e.target.id + ".jpg"
//     }
// })

const container = document.querySelector(".container")
const gridItem = document.querySelector(".grid-item")
const search = document.querySelector("#search")

function createCards(name) {
    let div = document.createElement("div");
    div.setAttribute("class", "grid-item")
    let card = container.appendChild(div)
    card.innerHTML = gridItem.innerHTML
        //card image
    let cardImg = card.querySelector(".card").querySelector(".card-img")
    cardImg.setAttribute("src", "img/" + name + ".jpg")
        //card content
    let cardHeader = card.querySelector(".card").querySelector(".card-content").querySelector(".card-header")
    cardHeader.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
    let cardText = card.querySelector(".card").querySelector(".card-content").querySelector(".card-text")
    cardText.innerHTML = city[name.toLocaleLowerCase()]

}
var cityNames = ["delhi", "kolkata", "mumbai", "kochi", "kutch", "jaipur", "goa", "hyderabad", "bengaluru"];

var city = {
    kolkata: "Kolkata (spelled Calcutta before 1 January 2001) is the capital city of the Indian state of West Bengal. It is the second largest city in India after Mumbai.",
    mumbai: "Mumbai is the capital city of the Indian state of Maharashtra. According to the United Nations, as of 2018, Mumbai is the second-most populous city in the country",
    goa: "Goa is a state on the southwestern coast of India within the region known as the Konkan, and geographically separated from the Deccan highlands",
    kutch: "Kutch district is a district of Gujarat state in western India, with its headquarters (capital) at Bhuj. Covering an area of 45,074 km², it is the 2nd largest district",
    kochi: "Kochi also known as Cochin is a major port city on the south-west coast of India bordering the Laccadive Sea a part of the Arabian Sea. ",
    hyderabad: "Hyderabad is the capital and largest city of the Indian state of Telangana and the de jure capital of Andhra Pradesh. It occupies 625 square kilometres ",
    jaipur: "Jaipur is the capital and the largest city of the Indian state of Rajasthan. As of 2011, the city had a population of 3.1 million, making it the tenth most populous city",
    delhi: "Delhi officially known as the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.",
    bengaluru: "Bangalore /bæŋɡəˈlɔːr/, officially known as Bengaluru is the capital of the Indian state of Karnataka. It has a population of more than 8 million"
}

function fun() {
    if (cityNames.includes(search.value.toLocaleLowerCase())) {
        createCards(search.value)
    }
}

function debounce(fn, delay) {
    let timer;
    return function() {
        let context = this;
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, arguments)
        }, delay);
    }
}

search.addEventListener("keyup", debounce(fun, 300))