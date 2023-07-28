class RippleButton {
    /**
     * Initialize RippleEffect for the Button
     * @param {string} classname - Class of the button for Ripple Effect
     * @param {object} options - Some configuration for RippleEffect
     * @param {string} options.color - Color for Ripple, Default: #FFFFFF
     * @param {Number} options.opacity - Opacity level for Ripple Effect (0 - 1), Default: 0.5
     */
    constructor(selector, options) {
        this.rippleButton = document.querySelector(selector)

        const rippleColor = options.color || "#FFF"
        const rippleOpacity = options.opacity || 0.5

        this.rippleButton.style.setProperty("--ripple-color", rippleColor)
        this.rippleButton.style.setProperty("--ripple-opacity", rippleOpacity)

        this.rippleButton.classList.add("ripple-button-cdn-classname")
    }

    init() {
        this.rippleButton.addEventListener("click", (e) => {
            this._mousePositionToCustomProp(e, this.rippleButton)
            this.rippleButton.classList.add("pulse")
            this.rippleButton.addEventListener(
                "animationend",
                () => {
                    this.rippleButton.classList.remove("pulse")
                },
                {
                    once: true,
                }
            )
        })
    }

    /**
     * Handling Click Event
     * @param {object} event
     * @param {HTMLButtonElement} element
     */
    _mousePositionToCustomProp(event, element) {
        let posX = event.offsetX
        let posY = event.offsetY

        element.style.setProperty("--x", posX + "px")
        element.style.setProperty("--y", posY + "px")
    }
}
