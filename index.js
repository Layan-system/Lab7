document.querySelector("#colorForm").onsubmit = function(event) {

    event.preventDefault();

    let color = document.querySelector("#color").value;

    document.querySelector("#hello").style.color = color;

};