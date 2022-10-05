import { EXPANSION_RATE } from './food.js'
import { updateSpeed } from './snake.js'

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

function updateBtnInnerText(newInnerText) {
    const btn = document.getElementById('level');
    btn.innerText = newInnerText;
}


const difficulty = document.getElementsByClassName('difficulty')

const EASY_SPEED = 5
const MEDIUM_SPEED = 10
const HARD_SPEED = 20
const IMPOSSIBLE_SPEED = 50


document.addEventListener('click', e => {
    const dropdown = e.target.closest('[data-dropdown]')
    switch (e.target.innerText) {
        case 'Easy':
            updateBtnInnerText('Easy ▾')
            updateSpeed(EASY_SPEED)
            dropdown.classList.remove('active')
            break
        case 'Medium':
            updateBtnInnerText("Medium ▾")
            updateSpeed(MEDIUM_SPEED)
            dropdown.classList.remove('active')
            break
        case 'Hard':
            updateBtnInnerText('Hard ▾')
            updateSpeed(HARD_SPEED)
            dropdown.classList.remove('active')
            break
        case 'Impossible':
            updateBtnInnerText('Impossible ▾')
            updateSpeed(IMPOSSIBLE_SPEED)
            dropdown.classList.remove('active')
            break
    }
})

let scorePointer = document.getElementById('number')
let score = 0

export function updateScore() {
    score += EXPANSION_RATE
    scorePointer.innerHTML = score
}