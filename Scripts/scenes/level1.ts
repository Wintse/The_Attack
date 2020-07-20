module scenes {
    export class Level1Scene extends objects.Scene {
        // Variables
        private playLabel: objects.Label;
        
        private background: objects.Background;
        private player:objects.Player;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            console.log("Play scene start");
            // Inintialize our variables
            this.playLabel = new objects.Label( "Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
            
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);

            this.Main();
        }

        public Update():void {
            this.background.Update();
            this.player.Update();
        }

        public Main():void {
            this.addChild(this.background);
            this.background.scaleX = 650;
            this.background.scaleY = 900;

            this.addChild(this.playLabel);
            this.addChild(this.player);
       
            
        }

        private nextButtonClick():void {
            objects.Game.currentScene = config.Scene.GAMEOVER;
        }

        private backButtonClick():void {
            objects.Game.currentScene = config.Scene.START;
        }
    }
}