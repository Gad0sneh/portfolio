var moons = document.getElementById("moons")  ;

moons.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        moons.src = "IMAGES/sun.jpeg";
    } else{
        moons.src = "IMAGES/moon-pic.jpeg"
    }
}

// window.onscroll = () => {
//     nav.classList.remove("active")
//     searchForm.classList.remove("active")
//     CartItem.classList.remove("active")
// }