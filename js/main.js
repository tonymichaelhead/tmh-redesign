
var Shuffle = require('shufflejs');
var element = document.querySelector('.projects__container__grid');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});

// Project nav
document.getElementById('nav--1')
    .addEventListener('click', filterProjects.bind(shuffleInstance, 'all'));

document.getElementById('nav--2')
    .addEventListener('click', filterProjects.bind(shuffleInstance, 'react'));

document.getElementById('nav--3')
    .addEventListener('click', filterProjects.bind(shuffleInstance, ''));

document.getElementById('nav--4')
    .addEventListener('click', filterProjects.bind(shuffleInstance, ''));

// METHODS
function filterProjects(filter, e) {
    var navLinks = document.getElementsByClassName('projects__container__nav__item');
    
    for(var i = 0; i < navLinks.length; i++) {
        navLinks[i].className = navLinks[i].className.replace(' active', '');
    }
    
    e.currentTarget.className += ' active';
    
    if (filter === 'all') {
        filter = Shuffle.ALL_ITEMS;
    }
    
    shuffleInstance.filter(filter);
}
