const rippleButton = document.querySelector(".ripple-button")

rippleButton.addEventListener("click", (e) => {
    mousePositionToCustomProp(e, rippleButton)
    rippleButton.classList.add("pulse")
    rippleButton.addEventListener(
        "animationend",
        () => {
            rippleButton.classList.remove("pulse")
        },
        {
            once: true,
        }
    )
})

/**
 * Handling Click Event
 * @param {object} event
 * @param {HTMLButtonElement} element
 */
function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX
    let posY = event.offsetY

    element.style.setProperty("--x", posX + "px")
    element.style.setProperty("--y", posY + "px")
}
