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
            this.playLabel = new objects.Label("Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.Main();
        };
        Level2Scene.prototype.Update = function () {
            this.background.Update();
            this.player.Update();
        };
        Level2Scene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.playLabel);
            this.addChild(this.player);
        };
        Level2Scene.prototype.nextButtonClick = function () {
            objects.Game.currentScene = config.Scene.GAMEOVER;
        };
        Level2Scene.prototype.backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        return Level2Scene;
    }(objects.Scene));
    scenes.Level2Scene = Level2Scene;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map