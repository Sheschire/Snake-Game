import { SNAKE_SPEED, updateSpeed } from "./snake.js"

let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
        case 'Shift':
            updateSpeed(SNAKE_SPEED * 2)
            break
    }
})

window.addEventListener('keyup', e => {
    if (e.key === 'Shift')
        updateSpeed(SNAKE_SPEED / 2)
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}