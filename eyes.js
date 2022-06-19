const balls = document.getElementsByClassName('ball');
console.log(balls);
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  // balls[0].style.left = x;
  // balls[0].style.top = y;
  // balls[0].transform = 'translate(-' + x + ',-' + y + ')';
  
for (let i=0; i<balls.length; i++){
  balls[i].style.left = x;
  balls[i].style.top = y;
  balls[i].transform = 'translate(-' + x + ',-' + y + ')';
}
};
