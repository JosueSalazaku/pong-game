export default class Paddle {
    constructor(PaddleElem) {
        this.PaddleElem = PaddleElem;
    }

    get position() {
        return parseFloat(getComputedStyle(this.PaddleElem).getPropertyValue("--position"))
    }

    set position(value) {
        this.PaddleElem.style.setProperty("--position", value)
    }
}

