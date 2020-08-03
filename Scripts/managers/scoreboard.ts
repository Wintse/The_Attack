module managers {
    export class Scoreboard extends createjs.Container {
        // Variables
        public scoreLabel: objects.Label;
        public highScoreLabel: objects.Label;
        public healthLabel: objects.Label;

        private score: number;
        private highScore: number;
        private health: number;

        get Score():number {
            return this.score;
        }
        set Score(newScore:number) {
            this.score = newScore;
            this.scoreLabel.text = "Score: " + this.score;
        }
        

        //health
        get Health():number {
            return this.health;
        }
        set Heath(newHealth:number) {
            this.health = newHealth;
            this.healthLabel.text = "Health: " + this.health;
        }

        // Constructor
        constructor() {
            super();
            this.Init();
        }
        // Methods
        private Init():void {
            // Create our labels
            this.scoreLabel = new objects.Label("Score: 999999", "20px", "Consolas", "#FFFF00", 0, 0, false);
            this.healthLabel = new objects.Label("High score: 0", "20px", "Consolas", "#FFFF00", 460, 0, false);

            // Set a default score
            this.score = 0;
            this.health = 100;

            this.Main();
        }

        private Main():void {
            this.addChild(this.scoreLabel);
            this.addChild(this.healthLabel);
        }
    }
}