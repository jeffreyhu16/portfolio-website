export const config = {
    "background": {
        "color": {
            "value": "#000"
        },
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    },
    "fullScreen": {
        "zIndex": 1
    },
    "interactivity": {
        "events": {
            "onClick": {
                "enable": true,
                "mode": "repulse"
            },
            "onHover": {
                "enable": true,
                "mode": "bubble"
            }
        },
        "modes": {
            "bubble": {
                "distance": 400,
                "duration": 0.3,
                "opacity": 1,
                "size": 4,
                "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "selectors": []
                }
            },
            "grab": {
                "distance": 400,
                "links": {
                    "opacity": 0.5
                }
            },
            "repulse": {
                "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "selectors": []
                }
            }
        }
    },
    "particles": {
        "links": {
            "color": {
                "value": "#ffffff"
            },
            "distance": 500,
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "attract": {
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "direction": "bottom",
            "enable": true,
            "path": {},
            "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
            },
            "spin": {}
        },
        "number": {
            "density": {
                "enable": true,
                "area": 1200,
                "factor": 1800
            },
            "value": 400
        },
        "opacity": {
            "random": {
                "enable": true
            },
            "value": {
                "min": 0.1,
                "max": 0.5
            },
            "animation": {
                "speed": 1,
                "minimumValue": 0.1
            }
        },
        "size": {
            "random": {
                "enable": true
            },
            "value": {
                "min": 1,
                "max": 5
            },
            "animation": {
                "speed": 40,
                "minimumValue": 0.1
            }
        }
    }
}