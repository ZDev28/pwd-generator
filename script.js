let chars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
function chars12(){
  let random1 = Math.floor(Math.random() * 36);
  let c1 = chars[random1];
  let random2 = Math.floor(Math.random() * 36);
  let c2 = chars[random2];
  let random3 = Math.floor(Math.random() * 36);
  let c3 = chars[random3];
  let random4 = Math.floor(Math.random() * 36);
  let c4 = chars[random4];
  let random5 = Math.floor(Math.random() * 36);
  let c5 = chars[random5];
  let random6 = Math.floor(Math.random() * 36);
  let c6 = chars[random6];
  let random7 = Math.floor(Math.random() * 36);
  let c7 = chars[random7];
  let random8 = Math.floor(Math.random() * 36);
  let c8 = chars[random8];
  let random9 = Math.floor(Math.random() * 36);
  let c9 = chars[random9];
  let random10 = Math.floor(Math.random() * 36);
  let c10 = chars[random10];
  let random11 = Math.floor(Math.random() * 36);
  let c11 = chars[random11];
  let random12 = Math.floor(Math.random() * 36);
  let c12 = chars[random12];
  document.getElementById('pwd').value = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 +  c10 + c11 + c12;

}

function chars6(){
  let random1 = Math.floor(Math.random() * 36);
  let c1 = chars[random1];
  let random2 = Math.floor(Math.random() * 36);
  let c2 = chars[random2];
  let random3 = Math.floor(Math.random() * 36);
  let c3 = chars[random3];
  let random4 = Math.floor(Math.random() * 36);
  let c4 = chars[random4];
  let random5 = Math.floor(Math.random() * 36);
  let c5 = chars[random5];
  let random6 = Math.floor(Math.random() * 36);
  let c6 = chars[random6];
  document.getElementById('pwd').value = c1+c2+c3+c4+c5+c6
}
