let nowField=document.getElementById("tenkey__output");

function Keypush(e){
    nowField.innerText=nowField.innerText+e.value;
}
function Keydelete(){
    nowField.innerText=nowField.innerText.slice(0,-1);
}
function Keydone(){
    document.getElementById("").value=nowField.innerText;
}
