let cur=0;
function changeColor() { 
	let color="";
    let dark="rgb(44, 44, 44)";
    let white="#ffffff";
	let eles=document.getElementsByTagName("*");
    if (cur%2==0){
        color=dark;
        letc=white;
        cur+=1;
    }
    else{
        color=white;
        letc=dark;
        cur+=1
    }
    for (const i=0;i<=eles.length;i++){
        eles[i].style.backgroundColor=color;
        eles[i].style.color=letc;
        document.getElementById('flip').style.backgroundColor=color;
    }

}
