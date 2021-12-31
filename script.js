'use strict';
const home = document.querySelector('.home');
const about = document.querySelector('.navabout');
const services = document.querySelector('.navservices');
const skills = document.querySelector('.navskills');
const contact = document.querySelector('.navcontact');

home.addEventListener('click', function () {
  home.style.backgroundColor = '#ffffffaf';
  about.style.backgroundColor = 'transparent';
  services.style.backgroundColor = 'transparent';
  skills.style.backgroundColor = 'transparent';
  contact.style.backgroundColor = 'transparent';
});
about.addEventListener('click', function () {
  home.style.backgroundColor = 'transparent';
  about.style.backgroundColor = '#ffffffaf';
  services.style.backgroundColor = 'transparent';
  skills.style.backgroundColor = 'transparent';
  contact.style.backgroundColor = 'transparent';
});
services.addEventListener('click', function () {
  about.style.backgroundColor = 'transparent';
  home.style.backgroundColor = 'transparent';
  services.style.backgroundColor = '#ffffffaf';
  skills.style.backgroundColor = 'transparent';
  contact.style.backgroundColor = 'transparent';
});
skills.addEventListener('click', function () {
  about.style.backgroundColor = 'transparent';
  home.style.backgroundColor = 'transparent';
  services.style.backgroundColor = 'transparent';
  skills.style.backgroundColor = '#ffffffaf';
  contact.style.backgroundColor = 'transparent';
});
contact.addEventListener('click', function () {
  about.style.backgroundColor = 'transparent';
  home.style.backgroundColor = 'transparent';
  services.style.backgroundColor = 'transparent';
  skills.style.backgroundColor = 'transparent';
  contact.style.backgroundColor = '#ffffffaf';
});

const box = document.querySelector('.box');
const overlay = document.querySelector('.overlay');
const closeWindow = function () {
  box.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.querySelector('.menu-bar').addEventListener('click', function () {
  box.classList.remove('hidden');
  overlay.classList.remove('hidden');

  document.querySelector('.close-btn').addEventListener('click', closeWindow);

  overlay.addEventListener('click', closeWindow);

  document.querySelector('a').addEventListener('click', closeWindow);
});

// document.querySelector('input').addEventListener('click', function () {
//   document.querySelector('input').style.border = '2px solid red';
// });

// document.querySelector('.menu-bar').addEventListener('click', function () {
//   document.querySelector('ul').style.display = 'block';
//   document.querySelector('.profile').style.filter = 'blur(2rem)';
//   document.querySelector('nav').style.filter = 'blur(0px)';

//   document.querySelector('.profile').addEventListener('click', function () {
//     document.querySelector('ul').style.display = 'none';
//     document.querySelector('.main-blur').style.filter = 'blur(0rem)';
//     document.querySelector('nav').filter - 'blur(0px)';
//   });
// });
