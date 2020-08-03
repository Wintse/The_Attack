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
    var Level2Scene = /** @class */ (function (_super) {
        __extends(Level2Scene, _super);
        // Constructor
        function Level2Scene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        Level2Scene.prototype.Start = function () {
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
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("level1_music");
            this.backgroundMusic.loop = -1; // Loop infinitely
            this.backgroundMusic.volume = 0.5;
            this.Main();
        };
        Level2Scene.prototype.Update = function () {
            var _this = this;
            this.background.Update();
            this.player.Update();
            this.enemies.forEach(function (e) {
                e.Update();
                managers.Collision.Check(_this.player, e);
            });
        };
        Level2Scene.prototype.Main = function () {
            var _this = this;
            //adding to the scene
            this.addChild(this.background);
            this.background.scaleX = 650;
            this.background.scaleY = 900;
            this.addChild(this.player);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
        };
        return Level2Scene;
    }(objects.Scene));
    scenes.Level2Scene = Level2Scene;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map