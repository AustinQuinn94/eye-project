const balls = document.getElementsByClassName('ball','ball2');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  balls[0].style.left = x;
  balls[0].style.top = y;
  balls[0].transform = 'translate(-' + x + ',-' + y + ')';
};
for (let i = 0; i > window.innerHeight; i++ ){
  //coming back to this one as i am sitll struggling
  
  
}
