

var Shuffle = require('shufflejs');
var element = document.querySelector('.projects__grid');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});

// Project Grid
var nav1 = document.querySelector('.nav--1');
var nav2 = document.querySelector('.nav--2');

document.getElementById('nav--1')
    .addEventListener('click', filterProjects.bind(shuffleInstance, 'all'));

    document.getElementById('nav--2')
    .addEventListener('click', filterProjects.bind(shuffleInstance, 'react'));

// nav1.onclick = filterProjects
//     .bind(shuffleInstance, 'all');

// nav2.onclick = filterProjects
//     .bind(shuffleInstance, 'react');

function filterProjects(filter, e) {
    // iterate over other links and remove active
    var navLinks = document.getElementsByClassName('projects__nav__item');
    console.log(navLinks)
    navLinks.forEach(function(el) {
        el.className = el.className.replace(' active', '');
    });

    // apply css to active link and 
    e.currentTarget.className += ' active';
    

    // pass filter to filter
    if (filter === 'all') {
        filter = Shuffle.ALL_ITEMS;
    }

    shuffleInstance.filter(filter);
}
