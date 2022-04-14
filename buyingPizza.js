qty1=0;
qty2=0;
qty3=0;
qty4=0;
type1=80;
type2=75;
type3=100;
type4=120;
function qtyPizza(){
    qty1=document.getElementById('qty1').value;
    qty2=document.getElementById('qty2').value;
    qty3=document.getElementById('qty3').value;
    qty4=document.getElementById('qty4').value;
    // type1=document.getElementById('type1').value;
    // type2=document.getElementById('type2').value;
    // type3=document.getElementById('type3').value;
    // type4=document.getElementById('type4').value;
    prix1=type1*parseInt(qty1);
    prix2=type2*parseInt(qty2);
    prix3=type3*parseInt(qty3);
    prix4=type4*parseInt(qty4);
    totale=prix1+prix2+prix3+prix4;
    alert("le prix totale de votre commande est: "+totale+"DH")
}

function over(ovot){
    ovot.src="img/NicePng_banana-peel-png_1152366.png"
}
function out(ovot){
    ovot.src="img/8-2-pizza-png-hd.png"
}

str="pizza"
i=0;
direction="D";
function autotext(){
t=setTimeout("autotext()",70);
document.getElementById('h1').value=str.substring(0,i);
if(direction=="D"){
    if(i<str.length)
        i++;
else 
    direction="G";
}
if(direction=="G"){
    if(i>0)
        i--;
else 
    direction="D";
}


}