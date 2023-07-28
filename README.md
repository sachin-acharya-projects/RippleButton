# Ripple Button

---

A basic HTML Button with little bit of Ripple Effect showing when clicked.

## CDN

### For Cloud Delivery Network,

1. **Include [Stylesheet](./CDN/css/ripple-button.css)**

    ```html
    <link rel="stylesheet" href="./css/ripple-button.css" />
    ```

2. **Include [JavaScript](./CDN/js/ripple-button.js)**

    ```html
    <script src="./js/ripple-button.js" defer></script>
    ```

3. **In projects JavaScript,**

    ```js
    new RippleButton(selector, {
        color: String,
        opacity: Number,
    }).init()
    ```

    **Parameters**

    1. `selector`: This represent classes or id that represent the target button (e.g `.ripple-button` or `#ripple-button`)
    2. `options`: Options for Ripple Effect.
        1. `color`: Color for the ripple (in string), default is #fff or white
        2. `opacity`: Opacity for the ripple (between 0 to 1), default is 0.5
