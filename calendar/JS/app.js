function ShowSeason(Season) {
    
    DisplaySeason(Season);

    const el= document.getElementById(Season);
    el.style.display="block";
  
}

function DisplaySeason(Season) {
    let element = document.getElementsByClassName("Season");
    
    for (i=0 ; i<element.length; i++) {
        element[i].style.display="none";
     }

}