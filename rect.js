define(["require", "exports"], function(require, exports) {
    
    var Rect = (function () {
        function Rect(topLeft, bottomRight) {
            this.topLeft = topLeft;
            this.bottomRight = bottomRight;
        }
        Rect.prototype.area = function () {
            var x = this.topLeft.x - this.bottomRight.x;
            var y = this.topLeft.y - this.bottomRight.y;
            return Math.abs(x * y);
        };
        return Rect;
    })();
    exports.Rect = Rect;    
})

