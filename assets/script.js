function clearr(){
    document.getElementById("Scr1").value=" "
}
function clickk(val){
    document.getElementById("Scr1").value=document.getElementById("Scr1").value+val
}
function equals(){
    var t=document.getElementById("Scr1").value
    var result=eval(t)
    document.getElementById("Scr1").value=result
}