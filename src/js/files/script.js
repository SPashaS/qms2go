// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose, bodyUnlock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";





window.onload = function() {
  const connect = document.querySelector('.connect');
  const canvItem = document.querySelector('.canvas__item');
  const canvas = document.getElementById('background');

  let connectY =  window.pageYOffset + connect.getBoundingClientRect().y;
  let canvHeight = canvas.getBoundingClientRect().height;


  // console.log(canvHeight);
  // console.log(connectY);


  // anim
  const wrapper = document.querySelector('.wrapper');
  let wrapperH = wrapper.getBoundingClientRect().height;

  // console.log(wrapperH);
  // console.log(window.pageYOffset);
  
  var totalImages = 297; // Wow, so many images for such a short clip
  var images = [];
  for(var i = 3; i < totalImages + 3; i++) {
    var filename = '000';
    if(i < 10) {
      filename += '00';
    } else if (i < 100) { 
      filename += '0';
    }
    filename += i + '.jpg';
    var img = new Image;
    img.src = './img/canvas/' + filename;
    images.push(img);
  }

  let canv = document.getElementById('background');
  let context = canv.getContext('2d');

  let currentLocation = 0;

  let setImage = function (newLocation) {
    context.drawImage(images[newLocation], 0, 0, 960, 960); // DRAW
    // console.log('draw');
  }

  // let wheelDistance = function(evt){
  //   if (!evt) evt = event;
  //   let w=evt.wheelDelta, d=evt.detail;
  //   if (d){
  //     if (w) return w/d/40*d>0?1:-1; // Opera
  //     else return -d/3;              // Firefox;         TODO: do not /3 for OS X
  //   } else return w/120;             // IE/Safari/Chrome TODO: /3 for Chrome OS X
  // };
  // let wheelDirection = function(evt){
  //   if (!evt) evt = event;
  //   return (evt.detail<0) ? 1 : (evt.wheelDelta>0) ? 1 : -1;
  // };

  // let MouseWheelHandler = function (e) {
  //   // e.preventDefault(); // No scroll

  //   // The following equation will return either a 1 for scroll down
  //   // or -1 for a scroll up
  //   var distance = wheelDistance(e);
  //   var direction = wheelDirection(e);

  //   // This code mostly keeps us from going too far in either direction
  //   currentLocation -= Math.round(distance*1);
  //   if(currentLocation < 0) currentLocation = 0;
  //   if(currentLocation >= images.length)
  //     currentLocation = images.length - 1;

  //   // See below for the details of this function
  //   console.log("currentLocation", currentLocation, distance);
  //   setImage(currentLocation);
  // };
  // let canvasFillWin = function(e) {
  //   let h = 720;
  //   let w = 1280;
  //   let ratio = h/w;
  //   var winW = window.width();
  //   var winH = window.height();
  //   var winRatio = winH / winW;
    
  //   if(winRatio > ratio) {
  //     (canv)
  //       .width(winH / ratio)
  //       .height(winH)
  //       .css({
  //       	marginLeft: - winH / ratio / 2 + "px",
  //       	left: "50%",
  //       	top: "0",
  //       	marginTop: "0"
  //       });
  //   } else {
  //     (canv)
  //       .width(winW)
  //       .height(winW * ratio)
  //       .css({
  //       	marginLeft: "0",
  //       	left: "0",
  //       	top: "50%",
  //       	marginTop: - winW * ratio / 2 + "px"
  //       });
  //   }
    
  // }


  // IE9, Chrome, Safari, Opera
  // window.addEventListener("mousewheel", MouseWheelHandler, false);
  // Firefox
  // window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
  // window.addEventListener("resize", canvasFillWin, false);

  // canvasFillWin();

  setTimeout( () => {
    setImage(3);
  }
  , 1000)


  window.addEventListener('scroll', (e) => {
    // console.log(e);
    // console.log(window.pageYOffset);

    let moveBottom = window.pageYOffset + canvHeight;
    // console.log(connectY);

    if ( moveBottom < connectY) {
      // canv.style.top = `${window.pageYOffset}px`;
      canvItem.style.position = 'fixed';
      canvItem.style.top = '65px';
    } else if (moveBottom > connectY) {
      canvItem.style.position = 'absolute';
      canvItem.style.top = `${connectY - canvHeight + 20}px`;
    }

    // anim
    let moveAll = window.pageYOffset + document.documentElement.clientHeight;
    // console.log(moveAll);
    let bit = moveAll / 300;

    let currentImage =  Math.round(window.pageYOffset / bit);


    setImage(currentImage);


  })
}





const header = document.querySelector('.header');

header.addEventListener('click', function (e) {
  let target = e.target;

  let menuItem = target.classList.contains('menu-item__item-title');
  let menuItemOpen = target.closest('.submenu-open');
  if (menuItem && !menuItemOpen) {
    closeOpenSubMenu();
    target.closest('.menu-item').classList.add('submenu-open');
  } else if (menuItem && menuItemOpen) {
    target.closest('.menu-item').classList.remove('submenu-open');
  }
})
export function closeOpenSubMenu() {
  let submenuOpen = document.querySelector('.submenu-open');
  if (submenuOpen) {
    submenuOpen.classList.remove('submenu-open');
  }
}



