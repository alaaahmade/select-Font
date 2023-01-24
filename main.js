let val = document.getElementById("box").value;
const body = document.getElementById("body")

body.style = "font-family : 'Courier New', Courier, monospace";
function get_Value (){
    
    val = document.getElementById("box").value;
    fonter()
}

function fonter(){
    if (val == "Courier"){
        body.style = "font-family : 'Courier New', Courier, monospace";
    }else if (val == "Franklin"){
        body.style = "font-family : 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    }else if (val == "Lucida"){
        body.style = "font-family : 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    }
}

// end ------------?