function showCategory(cat) {

    setActive(cat);
    
    if (cat == "*") {
        setDisplay("block");
    }
    else {
        setDisplay("none");
    }
    
    const el= document.getElementById(cat);
    el.style.display="block";
}

function setDisplay(display){
    let elements = document.getElementsByClassName('Category')
    for (i=0; i < elements.length; i++){
        elements[i].style.display = display;
    }
}

function setActive(cat){
    let elements = document.getElementsByClassName("active");
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove("active");
    }

    let element = document.getElementById("link-" + cat);
    element.classList.add("active");
}