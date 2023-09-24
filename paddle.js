const SPEED = .02

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

    update(delta, ballHeight) {
        this.position += SPEED * delta * (ballHeight - this.position);
    }
}

