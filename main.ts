import nsr = module("rect");
import nsp = module("point");

var Rect = nsr.Rect;
var Point = nsp.Point;

export function run() {
    var rect = new Rect(new Point(1, 2), new Point(5, 7));

    document.body.textContent = "" + rect.area();
}
