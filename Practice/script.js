var search = document.getElementById("search")
var container = document.querySelector(".container")
var h1list = container.querySelectorAll("h1")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count = 0; count < h1list.length; count = count+1) {
        if(h1list[count].textContent.toUpperCase().indexOf(enteredvalue) < 0) {
            h1list[count].style.display = "none"
        } else {
            h1list[count].style.display = "block"
        }
    }
})