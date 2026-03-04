/* RPGFuture Landing Page — scroll animations, smooth nav, active section highlight */

(function () {
    'use strict';

    // --- Fade-in on scroll ---
    var fadeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(function (el) {
        fadeObserver.observe(el);
    });

    // --- Smooth scroll for nav links ---
    document.querySelectorAll('.nav-links a, .nav-brand').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // --- Active nav highlight ---
    var navLinks = document.querySelectorAll('.nav-links a');
    var sections = document.querySelectorAll('section[id]');

    var sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var id = entry.target.getAttribute('id');
                navLinks.forEach(function (link) {
                    link.classList.toggle(
                        'active',
                        link.getAttribute('href') === '#' + id
                    );
                });
            }
        });
    }, {
        rootMargin: '-20% 0px -75% 0px',
        threshold: 0
    });

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });
})();
