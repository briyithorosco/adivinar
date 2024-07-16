var na= Math.ceil(Math.random()*50);
var intentos=1;
function adivina(){
var nd=document.getElementById('cajita').value*1;
if(nd>na){
    alert('es menor');
    intentos=intentos+1;
}else if(nd<na){
    alert('es mayor');
    intentos=intentos+1;
}else{
    alert('adivinaste el número en:'+intentos+' intentos')
}
}
