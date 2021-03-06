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
var scenes;
(function (scenes) {
    var Level1Scene = /** @class */ (function (_super) {
        __extends(Level1Scene, _super);
        // Constructor
        function Level1Scene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        Level1Scene.prototype.Start = function () {
            console.log("Play scene start");
            // Inintialize our variables         
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            //this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array();
            this.enemyNum = 5;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }
            //scoreboard
            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 20;
            this.scoreBoard.y = 20;
            //music
            /* createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("level1_music");
            this.backgroundMusic.loop = -1; // Loop infinitely
            this.backgroundMusic.volume = 0.5; */
            this.Main();
        };
        Level1Scene.prototype.Update = function () {
            var _this = this;
            //this.background.Update();
            this.player.Update();
            this.enemies.forEach(function (e) {
                e.Update();
                managers.Collision.Check(_this.player, e);
            });
            this.scoreBoard;
        };
        Level1Scene.prototype.Main = function () {
            var _this = this;
            //adding to the scene
            this.addChild(this.background);
            this.background.scaleX = 1.3;
            this.background.scaleY = 1.1;
            this.addChild(this.player);
            this.player.scaleX = 1;
            this.player.scaleY = 1;
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.addChild(this.scoreBoard);
        };
        return Level1Scene;
    }(objects.Scene));
    scenes.Level1Scene = Level1Scene;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map