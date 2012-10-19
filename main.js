define(["require", "exports", "rect", "point"], function(require, exports, __nsr__, __nsp__) {
    var nsr = __nsr__;

    var nsp = __nsp__;

    var Rect = nsr.Rect;
    var Point = nsp.Point;
    function run() {
        var rect = new Rect(new Point(1, 2), new Point(5, 7));
        document.body.textContent = ("" + rect.area());
    }
    exports.run = run;
})

