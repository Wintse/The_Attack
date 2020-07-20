module scenes {
    export class Level1Scene extends objects.Scene {
        // Variables
        private playLabel: objects.Label;
        
        private background: objects.Background;
        private player:objects.Player;
        private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            console.log("Play scene start");
            // Inintialize our variables         
            
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }

            this.Main();
        }

        public Update():void {
            this.background.Update();
            this.player.Update();
            this.enemies.forEach(e => {
                e.Update();
                managers.Collision.Check(this.player, e);
            })
        }

        public Main():void {
            this.addChild(this.background);
            this.background.scaleX = 650;
            this.background.scaleY = 900;

            this.addChild(this.playLabel);
            this.addChild(this.player);
       
            this.enemies.forEach(e => {
                this.addChild(e);
            })
        }

        
    }
}