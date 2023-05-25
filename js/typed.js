// Load library from the CDN
var script = document.createElement('script');
script.src = 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js';
document.head.appendChild(script);

// Wait for the library to load
script.onload = function () {
  // Setup and start animation!
  var typed = new Typed('#span-orange', {
    strings: [
      'Kukah Gilbert Elikplim',
      'a Web Developer',
      'a Graphic Designer',
      'a CyberSecurity Analyst',
      "Kukah. I'm a Web Developer <br> Graphic Designer and a <br> Junior CyberSecurity Analyst."
    ],
    typeSpeed: 80,
  });
};
