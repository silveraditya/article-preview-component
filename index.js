const share_button = document.getElementById("shareButton");
const non_mobile_share_div = document.getElementById("share_desktop")
const mobile_share_div = document.getElementById("share_mobile")
const attribution_div = document.getElementById("attribution")


// share_button.addEventListener('mouseenter', (e) => {
//     non_mobile_share_div.style.display = "flex";
// })

// // share_button.addEventListener('mouseleave', (e) => {
// //     non_mobile_share_div.style.display = "none"
// // })

share_button.addEventListener('click', (e) => {
    if (window.innerWidth>600) {
        non_mobile_share_div.style.display = "flex";
    } else {
        mobile_share_div.style.display = "flex";
        attribution_div.style.display = "none";
    }
})



