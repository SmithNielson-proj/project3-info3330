

function openTab(pageName){
    let i;
    let x = document.getElementsByClassName("tab-pane");
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
}


function switchImage(imageName){
    let i;
    let x = document.getElementsByClassName("images");
    for (i = 0; i < x.length; i++){
        x[i].style.display = "block";
    }
    document.getElementById(imageName).style.display = "none";
}






