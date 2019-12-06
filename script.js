function updateName(event){
    var n = document.getElementById("name").value;
    var n1 = document.getElementById("name");
    var bu = document.getElementById("Click");
    var heading = document.getElementById("start");   
    if(n!="")
    {
        n1.remove();
        bu.remove();
        heading.remove();
        document.getElementById("NameSet").innerHTML = "Welcome "+n+"!" ;
    }
}

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}