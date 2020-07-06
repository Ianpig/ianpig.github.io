document.querySelector('.btn-menu').addEventListener('click',function(e){
  document.querySelector('body').classList.toggle('show');
});

var navHeight = document.querySelector('#nav-menu').offsetHeight;
var navTop = document.querySelector('#nav-menu').offsetTop;

var toggle_checkbox = document.getElementById('toggle_checkbox');

toggle_checkbox.addEventListener('change', function(e){
    if(!document.body.classList.contains("active-effect")){
        document.body.classList.add("active-effect");
    }
    if(e.target.checked){
        localStorage.setItem('theme', 'night');
    } else {
        localStorage.setItem('theme', 'light');
    }
    chooseTheme();
});

document.addEventListener('scroll',function(e){
    if(window.pageYOffset > navHeight+navTop){
      document.querySelector('.btn-menu').classList.add('active');
    }else {
      document.querySelector('.btn-menu').classList.remove('active');  
    }
    if(document.querySelector('#toc')){
        if(window.pageYOffset > navHeight+navTop + 100){
        document.querySelector('#toc').classList.add('active');
        } else {
        document.querySelector('#toc').classList.remove('active');  
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      window.scroll({
        top: document.querySelector(this.getAttribute('href')).offsetTop,
        behavior: 'smooth'
      });
  });
});