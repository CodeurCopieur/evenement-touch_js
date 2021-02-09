const body = document.querySelector('body');

//touchstart touchmove touchend touchcancel

body.addEventListener('click', () => {
  console.log('body click');
})

body.addEventListener('touchstart', (e) => {
  console.log('touchstart', e);

  let nvCercle = document.createElement('div');
  nvCercle.style.width = '50px';
  nvCercle.style.height = '50px';
  nvCercle.style.background = 'blue';
  nvCercle.style.position = 'absolute';
  nvCercle.style.borderRadius = '50%';
  nvCercle.style.top = '0px';
  nvCercle.style.left = '0px';
  let posX = (e.touches[0].clientX - 25).toString();
  let posY = (e.touches[0].clientY - 25).toString();

  nvCercle.style.transform = `translate(${posX}px, ${posY}px)`;
  body.appendChild(nvCercle);
})

body.addEventListener('touchend', () => {
  console.log('end');
})

body.addEventListener('touchmove', () => {
  console.log('move');
})