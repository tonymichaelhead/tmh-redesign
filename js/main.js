// PROJECT NAV
var Shuffle = require('shufflejs');
var element = document.querySelector('.projects__container__grid');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});

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


// HAMBURGER MENU CLOSE ON LINK CLICK
var menu = document.getElementById('menu');
var toggle = document.getElementById('toggle');

menu.addEventListener('click', handleMenuClick);

function handleMenuClick(event) {
    if (event.target instanceof HTMLAnchorElement) {
        toggle.checked = false;
    }
}


$(document).ready(function(){
    // SMOOTH SCROLL
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });

    
    // SUBMIT CONTACT FORM
    var form = document.getElementById("contact-form");
    var formMessage = document.getElementById("form-message");
    var loader = document.getElementById("loader-icon");
    var submitButton = document.getElementById("submit-button");
    
    form.onsubmit = function(event) {
        event.preventDefault();

        submitButton.disabled = true;
        loader.style.display = "inline-block";
        
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        
        xhr.open("POST", form.action, true);
        
        xhr.onload = function(e) {
            console.log(xhr);
            var response = JSON.parse(xhr.response);
            if (xhr.status === 200) {
                formMessage.innerHTML = "Email successfully delivered! Thanks for reaching out :)";
                formMessage.className += 'success';
                form.reset();
            } else {
                formMessage.innerHTML = "An error occured sending your email: " + response.error;
                formMessage.className += 'error';
            }
            submitButton.disabled = false;
            loader.style.display = "none";
        };

        xhr.send(formData);
    };

});




