document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByClassName("moving-object");
    var distance = 4; // Maximum distance to move (in pixels)
    var speed = 0.2; // Speed of the animation

    function startAnimation() {
        for (var i = 0; i < elements.length; i++) {
            animate(elements[i]);
        }
    }
    
    function animate(element) {
        var position = 0;
        var direction = 1;

        function move() {
            position += speed * direction;
            if (position > distance || position < -distance) {
                direction *= -1; // Reverse direction
            }

            element.style.transform = `translate(-50%, calc(-50% + ${position}px))`;

            requestAnimationFrame(move);
        }

        move();
    }

    function checkScreenWidth() {
        if (window.innerWidth >= 1200) {
            startAnimation();
        }
    }

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
});