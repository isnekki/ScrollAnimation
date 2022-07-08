const contentContainers = document.querySelectorAll('.contentContainer')

let isLeft = true

const observer = new IntersectionObserver(intersections => {
    intersections.forEach(({ target, isIntersecting }) => {
        target.classList.toggle('inView', isIntersecting)
    })
}, {
    threshold: 0
})

contentContainers.forEach(contentContainer => {
    observer.observe(contentContainer)
    isLeft = !isLeft
    if (isLeft) return contentContainer.classList.add('left')
    return contentContainer.classList.add('right')
})