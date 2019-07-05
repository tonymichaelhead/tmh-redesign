(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// PROJECT NAV // TODO: Add back in once projects section is up
// var Shuffle = require('shufflejs');
// var element = document.querySelector('.projects__container__grid');
// var sizer = element.querySelector('.my-sizer-element');

// var shuffleInstance = new Shuffle(element, {
//   itemSelector: '.picture-item',
//   sizer: sizer // could also be a selector: '.my-sizer-element'
// });

// document.getElementById('nav--1')
//     .addEventListener('click', filterProjects.bind(shuffleInstance, 'all'));

// document.getElementById('nav--2')
//     .addEventListener('click', filterProjects.bind(shuffleInstance, 'javascript'));

// document.getElementById('nav--3')
//     .addEventListener('click', filterProjects.bind(shuffleInstance, 'react'));

// document.getElementById('nav--4')
//     .addEventListener('click', filterProjects.bind(shuffleInstance, 'games'));


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


// PROJECT MODAL CAROUSEL
var slideIndex = [1, 1, 1, 1, 1, 1];
var slideId = ['slides1', 'slides2', 'slides3', 'slides4', 'slides5', 'slides6']

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

// Next/prev controls
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    
    // Returns the three indicator dots associated with given carousel
    var indicators = $(x).closest('.project-modal__carousel').find('.indicator');
    

    if (n > x.length) { slideIndex[no] = 1; }
    if (n < 1) { slideIndex[no] = x.length; }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(' active-slide', '');
    }

    x[slideIndex[no]-1].style.display = 'block';
    
    // Some carousels will only have one image, and no indicator dots
    if (indicators[slideIndex[no]-1]) {
        indicators[slideIndex[no]-1].className += ' active-slide';
    }
}



$(document).ready(function(){

    // PROJECT MODALS
    var closeBtn = $('.close');

    // Loop through all buttons and match modals by data attribute
    $('.modal-button').each(function(btn) {
        $(this).on('click', function() {
            var number = $(this).data('modalNumber');
            var modal = $(document).find(".project-modal[data-modal-number='" + number + "']");

            modal.show();
        });
    });

    closeBtn.on('click', function() {
        // hide all modals
        $('.project-modal').hide();
    });
    
    $(document).on('click', function(event) {
        // hide all modals
        if (event.target.classList.contains('project-modal')) {
            $('.project-modal').hide();
        }
    });


    // CAROUSEL NAV
    $('.prev').on('click', function() {
        var no = $(this).closest('.project-modal__carousel').data('slideNumber');
        
        plusSlides(-1, no);
    });

    $('.next').on('click', function() {
        var no = $(this).closest('.project-modal__carousel').data('slideNumber');

        plusSlides(1, no);
    });
    
    $('.indicator').on('click', function() {
        var no = $(this).closest('.project-modal__carousel').data('slideNumber');

        currentSlide($(this).data('number'), no);
    });



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





},{}]},{},[1]);
