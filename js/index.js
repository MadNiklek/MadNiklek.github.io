/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.8,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 130,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stat.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

//------------------------------------------------------//

//1111111111111111111111BEGUUUUN!11111111111111111111111//

//------------------------------------------------------//












function dice(){
  var a = document.getElementById("side1");
  var b = document.getElementById("side2");
  if(a.className == "side1"){
    a.className = "side11";
    b.className = "side22"
  }else{
    a.className = "side1";
    b.className = "side2";
  }
}

function roll1(){
    setTimeout(dice, 50);
  
}

function roll2(){
    setTimeout(dice, 20);
    setTimeout(dice, 960);
  
}

function roll3(){
    setTimeout(dice, 20);
    setTimeout(dice, 960);
    setTimeout(dice, 1900);
  
}

function roll4(){
    setTimeout(dice, 20);
    setTimeout(dice, 960);
    setTimeout(dice, 1900);
    setTimeout(dice, 2840);
  
}

function roll5(){
    setTimeout(dice, 20);
    setTimeout(dice, 960);
    setTimeout(dice, 1900);
    setTimeout(dice, 2840);
    setTimeout(dice, 3790);
}

//------------------------------------------------------//

//111111111111111111111111111111111111111111111111111111//

//------------------------------------------------------//




function dice2(){
  var c = document.getElementById("side3");
  var d = document.getElementById("side4");
  if(c.className == "side3"){
    c.className = "side33";
    d.className = "side44"
  }else{
    c.className = "side3";
    d.className = "side4";
  }
}

function roll11(){
    setTimeout(dice2, 50);
  
}

function roll22(){
    setTimeout(dice2, 20);
    setTimeout(dice2, 960);
  
}

function roll33(){
    setTimeout(dice2, 20);
    setTimeout(dice2, 960);
    setTimeout(dice2, 1900);
  
}

function roll44(){
    setTimeout(dice2, 20);
    setTimeout(dice2, 960);
    setTimeout(dice2, 1900);
    setTimeout(dice2, 2840);
  
}

function roll55(){
    setTimeout(dice2, 20);
    setTimeout(dice2, 960);
    setTimeout(dice2, 1900);
    setTimeout(dice2, 2840);
    setTimeout(dice2, 3790);
}


//------------------------------------------------------//

//22222222222222222222222222222222222222222222222222222.//

//------------------------------------------------------//


function dice3(){
  var e = document.getElementById("side5");
  var f = document.getElementById("side6");
  if(e.className == "side5"){
    e.className = "side55";
    f.className = "side66"
  }else{
    e.className = "side5";
    f.className = "side6";
  }
}



function roll222(){
    setTimeout(dice3, 20);
    setTimeout(dice3, 960);
  
}

function roll333(){
    setTimeout(dice3, 20);
    setTimeout(dice3, 960);
    setTimeout(dice3, 1900);
  
}

function roll444(){
    setTimeout(dice3, 20);
    setTimeout(dice3, 960);
    setTimeout(dice3, 1900);
    setTimeout(dice3, 2840);
  
}

function roll555(){
    setTimeout(dice3, 20);
    setTimeout(dice3, 960);
    setTimeout(dice3, 1900);
    setTimeout(dice3, 2840);
    setTimeout(dice3, 3790);
}


//------------------------------------------------------//

//*83333333333333333333333333333333333333333333333333338//

//------------------------------------------------------//


function rollwhat1(){
  var randa = Math.floor(Math.random() * (6 - 2)) + 2;;
  
  if(randa == 2){
    roll2();
  }
  if(randa == 3){
    roll3();
  }
  if(randa == 4){
    roll4();
  }
  if(randa == 5){
    roll5();
  }
  if(randa == 6){
    randa == 5;
    roll5();
  }
  return randa;

}


function rollwhat2(){
  var randaa = Math.floor(Math.random() * (6 - 2)) + 2;;
  
  if(randaa == 2){
    roll22();
  }
  if(randaa == 3){
    roll33();
  }
  if(randaa == 4){
    roll44();
  }
  if(randaa == 5){
    roll55();
  }
  if(randaa == 6){
    roll55();
  }
  
  return randaa;

  }

function rollwhat3(){
  var randaaa = Math.floor(Math.random() * (6 - 2)) + 2;;

  if(randaaa == 2){
    roll222();
  }
  if(randaaa == 3){
    roll333();
  }
  if(randaaa == 4){
    roll444();
  }
  if(randaaa == 5){
    roll555();
  }
  if(randaaa == 6){
    roll555();
  }

  return randaaa;

}
//?????????????????????????????????????????????///
//?????????????????????????????????????????????///
//?????????????????????????????????????????????///

//Присвоить значение балансу:
function make_balance(a){
   document.getElementById("amount").value = a;
}

//Опредилитель суммы ставки:
function get_amount_bet(){
   var a = document.getElementById("betka").value;
   return a;
}

//Опредилитель цвета ставки:
function wcolor(a){
   var redbet = 0;
   var blackbet = 0;
   if(a == 1){
      redbet = get_amount_bet();
   }else{
      blackbet = get_amount_bet();
   }
}

//Опредилитель цвета результата:
// function get_color_win(){
   
// }

//?????????????????????????????????????????????///
//?????????????????????????????????????????????///
//?????????????????????????????????????????????///

                //1/////////
 
function get_last1(){
  var a = document.getElementById("side1");
  var b = document.getElementById("side2");
  var c;
  if(a.className == "side1"){
    c = 1;
  }else{
    c = 0;
  }
  return c;
}

function get_last2(){
  var a = document.getElementById("side3");
  var b = document.getElementById("side4");
  var c;
  if(a.className == "side3"){
    c = 1;
  }else{
    c = 0;
  }
  return c;
}

function get_last3(){
  var a = document.getElementById("side5");
  var b = document.getElementById("side6");
  var c;
  if(a.className == "side5"){
    c = 1;
  }else{
    c = 0;
  }
  return c;
}
///////////////////////////////////////////////////////////
///////////////////////others//////////////////////////////
/////////////////?/////////////////////////////////////////



function get_amount_bet(){
  var a = document.getElementById("betka").value;
  return a;
}

function minasanut(){
 document.getElementById("amount").value = document.getElementById("amount").value - document.getElementById("betka").value;
}


function get_amount_valuex2(n){
  var amounta = get_amount_bet();
  var amounta = amounta*n;
  var a = document.getElementById("amount").value;
  a = +a +amounta;   
  return a;
}
function set_amount_valuex21(){
  var a = get_amount_valuex2(1);
  document.getElementById("amount").value = a;
}
function set_amount_valuex22(){
  var a = get_amount_valuex2(2);
  document.getElementById("amount").value = a;
}
function set_amount_valuex23(){
  var a = get_amount_valuex2(3);
  document.getElementById("amount").value = a;
}
// function set_amount_valuex3(){
//   var a = document.getElementById("betka").value;
//  var -=b;
//   return a;
// }


///////////////////////////////////////////////////////////
///////////////////////final///////////////////////////////
/////////////////xD////////////////////////////////////////

function rollwhatRed(){
  minasanut();
  var a = rollwhat1();
  uber_podsv();
  uber_podsv2();
  uber_podsv3();
  var aresult;
  var acont = get_last1();
  var ao = a % 2;
  if(ao == 0 && acont == 1){
    aresult = "kras";
  }
  if(ao == 0 && acont == 0){
    aresult = "black";
  }
  if(ao == 1 && acont == 1){
    aresult = "black";
  }
  if(ao == 1 && acont == 0){
    aresult = "kras";
  }

  var b = rollwhat2();
  
  var bresult;
  var bcont = get_last2();
  var bo = b % 2;
  if(bo == 0 && bcont == 1){
    bresult = "kras";
  }
  if(bo == 0 && bcont == 0){
    bresult = "black";
  }
  if(bo == 1 && bcont == 1){
    bresult = "black";
  }
  if(bo == 1 && bcont == 0){
    bresult = "kras";
  }


var c = rollwhat3();
  
  var cresult;
  var ccont = get_last3();
  var co = c % 2;
  if(co == 0 && ccont == 1){
    cresult = "kras";
  }
  if(co == 0 && ccont == 0){
    cresult = "black";
  }
  if(co == 1 && ccont == 1){
    cresult = "black";
  }
  if(co == 1 && ccont == 0){
    cresult = "kras";
  }


  if(aresult == "kras"){
    setTimeout(dop_podsv, 4000);
  }
  if(bresult == "kras"){
    setTimeout(dop_podsv2, 4000);
  }
  if(cresult == "kras"){
    setTimeout(dop_podsv3, 4000);
  }

  if(aresult == "kras" && bresult == "kras" && cresult == "kras"){
     setTimeout(set_amount_valuex23,3000);
  }else{
  if(aresult == "kras" && bresult == "kras"){
    setTimeout(set_amount_valuex22,3000);
  }

  if(bresult == "kras" && cresult == "kras"){
    setTimeout(set_amount_valuex22,3000);
  }

  if(aresult == "kras" && cresult == "kras"){
    setTimeout(set_amount_valuex22,3000);
  }
}


///////////////////?//???//??/////////////??//?///?//
}
//1
function uber_podsv(){
  var a = document.getElementById("result1");
  a.className = "";
}

function dop_podsv(){
  var a = document.getElementById("result1");
  a.className = "shad";
}

//2
function uber_podsv2(){
  var a = document.getElementById("result2");
  a.className = "";
}

function dop_podsv2(){
  var a = document.getElementById("result2");
  a.className = "shad";
}

//3
function uber_podsv3(){
  var a = document.getElementById("result3");
  a.className = "";
}

function dop_podsv3(){
  var a = document.getElementById("result3");
  a.className = "shad";
}




                //2/////////////


function rollwhatBlack(){
  minasanut();
  var a = rollwhat1();
  uber_podsv();
  uber_podsv2();
  uber_podsv3();
  var aresult;
  var acont = get_last1();
  var ao = a % 2;
  if(ao == 0 && acont == 1){
    aresult = "kras";
  }
  if(ao == 0 && acont == 0){
    aresult = "black";
  }
  if(ao == 1 && acont == 1){
    aresult = "black";
  }
  if(ao == 1 && acont == 0){
    aresult = "kras";
  }

  //------------------------//
  var b = rollwhat2();
  
  var bresult;
  var bcont = get_last2();
  var bo = b % 2;
  if(bo == 0 && bcont == 1){
    bresult = "kras";
  }
  if(bo == 0 && bcont == 0){
    bresult = "black";
  }
  if(bo == 1 && bcont == 1){
    bresult = "black";
  }
  if(bo == 1 && bcont == 0){
    bresult = "kras";
  }


var c = rollwhat3();
  
  var cresult;
  var ccont = get_last3();
  var co = c % 2;
  if(co == 0 && ccont == 1){
    cresult = "kras";
  }
  if(co == 0 && ccont == 0){
    cresult = "black";
  }
  if(co == 1 && ccont == 1){
    cresult = "black";
  }
  if(co == 1 && ccont == 0){
    cresult = "kras";
  }

  if(aresult == "black"){
    setTimeout(dop_podsv, 4000);
  }
  if(bresult == "black"){
    setTimeout(dop_podsv2, 4000);
  }
  if(cresult == "black"){
    setTimeout(dop_podsv3, 4000);
  }


/////////>>?//>?/??///??/./>?/.//////>?/./.<?.,?//????///////
/////////>>?//>?/??///??/./>?/.//////>?/./.<?.,?//????///////
/////////>>?//>?/??///??/./>?/.//////>?/./.<?.,?//????///////
  if(aresult == "black" && bresult == "black" && cresult == "black"){
     setTimeout(set_amount_valuex23,3000);
  }else{
  if(aresult == "black" && bresult == "black"){
    setTimeout(set_amount_valuex22,3000);
  }

  if(bresult == "black" && cresult == "black"){
    setTimeout(set_amount_valuex22,3000);
  }

  if(aresult == "black" && cresult == "black"){
    setTimeout(set_amount_valuex22,3000);
  }
}
}


function change_poc(){
  document.write(" -no rules!");
}















































































