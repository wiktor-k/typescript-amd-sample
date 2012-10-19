import ns = module("point");

export class Rect {
    constructor (public topLeft: ns.Point, public bottomRight: ns.Point) {
    }
    area() {
        var x = this.topLeft.x - this.bottomRight.x;
        var y = this.topLeft.y - this.bottomRight.y;
        return Math.abs(x * y);
    }
}

