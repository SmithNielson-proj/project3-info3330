
// function that takes page tab name as an input
//iterates through all pages with class name 'tab-pane' & sets display to none
//after the for loop - it finds page tab that was sent on click & sets display to block
// scrolls to top of page
function openTab(pageName){
    let i;
    let x = document.getElementsByClassName("tab-pane");
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
    window.scrollTo(0, 0);
}


const darkModeToggle = document.getElementById("darkModeToggle");
let mainCss = true;
let darkModeLink = null;

darkModeToggle.addEventListener("click", function(){

    // if darkmode is toggled and the head DOES NOT contain dark mode css file
    if (darkModeToggle && document.head.contains(darkModeLink) !== true) {
        darkModeLink = document.createElement("link");
        darkModeLink .rel = "stylesheet";
        darkModeLink.href = 'css/dark.css';
        darkModeLink.id = "darkModeLink";
        document.head.appendChild(darkModeLink);
    }else{
        darkModeLink.remove();
    }
    mainCss = !mainCss;
});




