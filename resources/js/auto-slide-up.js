
!function(){
    var specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }

    setTimeout(function () {
        findClosestSectionAndRemoveOffset()
    }, 500)

    window.onscroll = function () {
        if (window.scrollY > 0) {
            topNavBar.classList.add('sticky')
        } else {
            topNavBar.classList.remove('sticky')
        }
        findClosestSectionAndRemoveOffset()
    }

    function findClosestSectionAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]')
        let min = Math.abs(window.scrollY - specialTags[0].offsetTop)
        let minIndex = 0
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(window.scrollY - specialTags[i].offsetTop) < min) {
                min = Math.abs(window.scrollY - specialTags[i].offsetTop)
                minIndex = i
            }
        }

        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let siblings = li.parentNode.children
        for (i = 0; i < siblings.length; i++) {
            siblings[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }


    let liTags = document.getElementsByClassName('menuTrigger')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (e) {
            e.currentTarget.classList.add('active')
        }

        liTags[i].onmouseleave = function (e) {
            e.currentTarget.classList.remove('active')
        }
    }
}.call()

