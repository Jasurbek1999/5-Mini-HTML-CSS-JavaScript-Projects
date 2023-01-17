const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', showBoxes)

showBoxes()

function showBoxes() {
    const checkBottom = window.innerHeight

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < checkBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}