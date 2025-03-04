

function openTab(pageName){
    let i;
    let x = document.getElementsByClassName("tab-pane");
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
}






