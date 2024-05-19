var buttons = document.querySelectorAll('.btn-regular');

buttons.forEach(function(b) {
  b.addEventListener('click', createRipple);
});

function createRipple(e) {
  if (this.getElementsByClassName('ripple').length > 0) {
    this.removeChild(this.getElementsByClassName('ripple')[0]); // Удаляем существующий ripple
  }

  var circle = document.createElement('div');
  circle.classList.add('ripple');
  this.appendChild(circle);

  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + 'px';

  var rect = this.getBoundingClientRect();
  var x = e.clientX - rect.left - d / 2;
  var y = e.clientY - rect.top - d / 2;

  circle.style.left = x + 'px';
  circle.style.top = y + 'px';

  setTimeout(function() {
    circle.remove();
  }, 600); // Длительность анимации совпадает с CSS
}
