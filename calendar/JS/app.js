function ShowSeason(Season) {
    
    setDisplay(Season);

    const el= document.getElementById(Season);
    el.style.display="block";
  
}

function setDisplay(Season) {
    let element = document.getElementsByClassName("Season");
    
    for (i=0 ; i<element.length; i++) {
        element[i].style.display="none";
     }

}