module scenes {
    export class Level2Scene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player:objects.Player;
        //private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemyNum:number;

        private scoreBoard:managers.Scoreboard; //scoreboard
        private backgroundMusic:createjs.AbstractSoundInstance; //music


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
            //this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++) {
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
            this.backgroundMusic.volume = 0.5;
            this.Main(); */
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
            //adding to the scene
            this.addChild(this.background);
            this.background.scaleX = 650;
            this.background.scaleY = 900;

            this.addChild(this.player);
       
            this.enemies.forEach(e => {
                this.addChild(e);
            })
        }

        
    }
}