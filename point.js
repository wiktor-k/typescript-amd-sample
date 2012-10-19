define(["require", "exports"], function(require, exports) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    })();
    exports.Point = Point;    
})

