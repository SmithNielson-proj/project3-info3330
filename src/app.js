/* THIS IS NOW A TEST FILE & is not referenced in the index.html */

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
        darkModeLink.rel = "stylesheet";
        darkModeLink.href = 'css/dark.css';
        darkModeLink.id = "darkModeLink";
        document.head.appendChild(darkModeLink);
    }else{
        darkModeLink.remove();
    }
    mainCss = !mainCss;
});



let form=null;
let successMsg=null;
function initValidation(formId, successId) {

    form = document.getElementById(formId);
    successMsg = document.getElementById(successId);

    let inputs = document.querySelectorAll("input");
    for (input of inputs) {

        input.addEventListener("change", inputChanged );
    }
    form.addEventListener("submit", submitForm );

}
