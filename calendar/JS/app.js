function ShowSeason(Season) {
    
    document.getElementById("Spring").style.display = "none";
    document.getElementById("Summer").style.display = "none";
    document.getElementById("Fall").style.display = "none";
    document.getElementById("Winter").style.display = "none";

    const el= document.getElementById(Season);
    el.style.display="block";

}