let body = document.querySelector('body');
let button = document.querySelector('#testowy');

onload = () => {
   background();
   change();
}

let colorGlobal;
function background() {
   
   let tab = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
   let color = '#';
   for(let i=0; i<6; i++)
      color+=tab[(Math.round(Math.random()*15))];
   // console.log(color);
   colorGlobal = color;
   body.style.background = color;

   button.innerHTML = 'STOP <p>'+colorGlobal+'</p>';
}

var a;

function change() {
   a = setInterval(background, 2300)
}

button.onclick = () => {
   if( a > 0 ) { clearInterval(a); 
      button.innerHTML = 'START <p>'+colorGlobal+'</p>';
      a = 0;
   }
   else {
      a = 1;
      change();
      button.innerHTML = 'STOP<p>'+colorGlobal+'</p>';
   }
}

// function () 
//  ===
// () => 