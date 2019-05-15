

var Shuffle = require('shufflejs');
var element = document.querySelector('.projects__grid');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});

// Project Grid
var btnAll = document.querySelector('.btn--all');
var btnReact = document.querySelector('.btn--react');

btnAll.onclick = shuffleInstance.filter
    .bind(shuffleInstance, Shuffle.ALL_ITEMS);

btnReact.onclick = shuffleInstance.filter
    .bind(shuffleInstance, 'react');

