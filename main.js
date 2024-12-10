const name = prompt("ismingizni kirting:")
const letter = prompt("bita harf kirting:");
if( name ||letter === null){
 alert("harif krit san chort")
}else if(name.toLowerCase().includes(letter.toLowerCase())) {
  alert(`"${name}" isimda "${letter}" harifi bor.`);
} else {
  alert(`"${name}" isimda "${letter}" harifi yoq.`);
}