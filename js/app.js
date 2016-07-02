(function() {
  var closeBtn = document.getElementsByClassName('main-nav__item--close')[0];
  var toogleBtn = document.getElementsByClassName('main-nav__toggle')[0];
  var navItems = document.getElementsByClassName('main-nav__items')[0];
  closeBtn.onclick = function () {
    navItems.style.display = 'none';
  };
  toogleBtn.onclick = function () {
    navItems.style.display = 'flex';
  }
}())
