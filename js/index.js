let navbar = document.querySelector('.fixed-top');

    window.onscroll = function () {
      let B = document.body; //IE 'quirks'
      let D = document.documentElement; //IE with doctype
      D = (D.clientHeight)? D: B;

      if (D.scrollTop > 200) {
        navbar.classList.add('nav-fixed');
      } 
      else if(D.scrollTop == 0) {
        navbar.classList.remove('nav-fixed');
      }
};