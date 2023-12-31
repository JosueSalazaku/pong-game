const INITIAL_VELOCITY = 0.025;
const VELOCITY_INCREAS = 0.000001

export default class Ball {
    constructor(ballElm) {
        this.ballElm = ballElm;
        this.reset();
    }

    get x() {
       return parseFloat(getComputedStyle(this.ballElm).getPropertyValue("--x"));
    }

    set x(value) {
        this.ballElm.style.setProperty("--x", value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElm).getPropertyValue("--y"))
     }

     set y(value) {
        this.ballElm.style.setProperty("--y", value)
    }


    rect() {
        return this.ballElm.getBoundingClientRect();
    }

    reset() {
        this.x = 50;
        this.y = 50;
        this.direction = { x: 0}
        while(Math.abs(this.direction.x) <= .2 || Math.abs(this.direction.x) >= .9) {
            const heading = randomNumberBetween(0, 2 * Math.PI) 
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }
        this.velocity = INITIAL_VELOCITY
    }

    update(delta) {
       this.x += this.direction.x * this.velocity * delta;
       this.y += this.direction.y * this.velocity * delta;
       this.velocity += VELOCITY_INCREAS * delta;
       const rect = this.rect()

       if( rect.bottom >= window.innerHeight || rect.top <= 0) {
        this.direction.y *= -1;
       }
       
       //if( rect.right >= window.innerWidth || rect.left <= 0) {
        //this.direction.x *= -1;
       //} 
    }
}

function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
}