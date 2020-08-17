var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "player") || this;
            _this.laserNum = 0;
            _this.Start();
            return _this;
        }
        Player.prototype.Start = function () {
            this.x = 320;
            this.y = 700;
            this.isDead = false;
            this.Lasers = new Array();
            this.scaleX = 0.25;
            this.scaleY = 0.25;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
            this.LaserFire();
            this.Lasers.forEach(function (laser) {
                laser.Update();
            });
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            // I need a reference to the "STAGE" createjs object to get mouse position
            //this.x = objects.Game.stage.mouseX;
            //this.y = objects.Game.stage.mouseY;
            // This will eventually be replaced with keyboard input
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 12;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 12;
            }
            if (managers.Game.keyboardManager.moveDown) {
                this.y += 12;
            }
            if (managers.Game.keyboardManager.moveUp) {
                this.y -= 12;
            }
            if (managers.Game.keyboardManager.shoot) {
            }
        };
        Player.prototype.CheckBound = function () {
            // Left boundary
            if (this.y <= 300) {
                this.y = 300;
            }
            if (this.y >= 820) {
                this.y = 820;
            }
            if (this.x <= 70) {
                this.x = 70;
            }
            if (this.x >= 580) {
                this.x = 580;
            }
        };
        Player.prototype.LaserFire = function () {
            /*    let ticker:number = createjs.Ticker.getTicks();
   
               if(!this.isDead && managers.Game.keyboardManager.shoot && (ticker % 10 == 0))
               {
                   this.laserSpawn = new math.Vec2(this.x, this.y - this.halfH);
                   let laser = new objects.Laser(this.assetManager);
                   laser.x = this.laserSpawn.x;
                   laser.y = this.laserSpawn.y;
                   this.Lasers[this.laserNum] = laser;
                   managers.Game.currentSceneObject.addChild(laser);
                   this.laserNum++;
               }
           */
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map