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

function ShowMonth(Month) {
    
    DisplayMonth(Month);

    const el= document.getElementById(Month);
    el.style.display="block";
        
  
}

function DisplayMonth(Month) {
    let element = document.getElementsByClassName("Month");
    
    for (i=0 ; i<element.length; i++) {
        element[i].style.display="none";
    }

}