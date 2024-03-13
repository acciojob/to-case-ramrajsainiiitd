function toCase(text) {
  // write your code here
  if(text.length==0){
    return "-";
  }
  else{
    return `${text.toLowerCase()}-${text.toUpperCase()}`;
  }
  console.log("text.toLowerCase");
}

// DO not change the code belo

const text = prompt("Enter text:");
alert(toCase(text));
