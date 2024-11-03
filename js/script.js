$(document).ready(function() {
    $('#flipbook').turn({
        width: 800,
        height: 600,
        autoCenter: true,
	display: 'single', // Set to single page display
        when: {
            turning: function(event, page, view) {
                document.getElementById('page-turn-sound').play();
            }
        }
    });



// Left arrow click event
    $('.left-arrow').click(function() {
        $('#flipbook').turn('previous');
    });

    // Right arrow click event
    $('.right-arrow').click(function() {
        $('#flipbook').turn('next');
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ff0000" // Change to a more leaf-like color if needed
            },
            "shape": {
                "type": "image",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "image": {
                    "src": "./img/leaf.png", // Ensure you have a leaf image in your directory
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 30,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });



// Arrow click events to flip pages
    $('#left-arrow').click(function() {
        $('#flipbook').turn('previous');
    });

    $('#right-arrow').click(function() {
        $('#flipbook').turn('next');
    });







});



