function hide(what){
what=document.getElementById(what);
what.style.display='none';
}
function show(what){
what=document.getElementById(what);
what.style.display='block';
}
function showHide(what){
what=document.getElementById(what);
if(what.style.display=='block'){
what.style.display='none';
}else{
what.style.display='block';
}
}

function apply(where,what1, what2){
where=document.getElementById(where);


if (where.src==what1){
alert("|"+what2+"|");
where.src=what2;
}else{
where.src=what1;
}

}

function goTo(where){
frame=document.getElementById('contentFrame');
frame.src=where;

}

function closeWindow(){
window.close();
}