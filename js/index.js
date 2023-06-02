var spans = document.getElementsByClassName("title_char");

function titleAnimation(){
    for(var i = spans.length - 1; i >= 0; i--){
        if(spans[i].style.color === "orange"){
            spans[i].style.color = "black";
            spans[(i+1)%5].style.color = "orange";
            break;
        }
    }
    setTimeout(titleAnimation, "1000");
}