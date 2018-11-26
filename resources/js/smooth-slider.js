
!function(){
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    
    let aTags = document.querySelectorAll('nav.menu > ul >li >a')
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (e) {
            e.preventDefault()
            let a = e.currentTarget
            let href = a.getAttribute('href')
            let element = document.querySelector(href)
            let top = element.offsetTop
            let targetTop = top - 80
            let currentTop = window.scrollY
            var coords = {
                y: currentTop
            } // Start at (0, 0)
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({
                    y: targetTop
                }, 500) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    // Move 'box' to the position described by 'coords' with a CSS translation.
                    window.scrollTo(0, coords.y)
                })
                .start()
        }
    }
}.call()

