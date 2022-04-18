function showCategory(cat) {
    
    document.getElementById("nature").style.display = "none";
    document.getElementById("flowers").style.display = "none";

    const el= document.getElementById(cat);
    el.style.display="block";


}