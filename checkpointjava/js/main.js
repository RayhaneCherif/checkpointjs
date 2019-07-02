var a=document.getElementById("textar");
function bold(){
    if(a.style.fontWeight=="bold")
    {
        a.style.fontWeight="normal";
    }    
    else
        a.style.fontWeight="bold";
}

function italique(){
    if(a.style.fontStyle=="italic"){
       a.style.fontStyle="normal";
    }
    else{
        
        a.style.fontStyle="italic";
    }
}

function underline(){
    if(a.style.textDecoration=="underline" ){
        a.style.textDecoration="none";
    }
    else{
        a.style.textDecoration="underline";
    }
}


function textsize(){
    x=document.f.D1.selectedIndex;
    y=document.f.D1.options[x].value+"px";
    a.style.fontSize=y;
}

function textpl(){
    x=document.f.D2.selectedIndex;
    y=document.f.D2.options[x].value;
    a.style.fontFamily=y;
}