module objects {
    export class Player extends objects.GameObject {
        // Variables
        private laserSpawn:math.Vec2;
        public Lasers:objects.Laser[];
        public laserNum:number = 0;

        public isDead:boolean;
        
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "player");
            this.Start();
        }

        public Start():void {
            this.x = 320;
            this.y = 700;
            this.isDead = false;
            this.Lasers = new Array<objects.Laser>();
            
            this.scaleX = 0.25;
            this.scaleY = 0.25;
        }
        public Update():void {
            this.Move();
            this.CheckBound();
            this.LaserFire();

            this.Lasers.forEach(laser => {
                laser.Update();
            })
        }

        public Reset():void {}

        public Move():void {
            // I need a reference to the "STAGE" createjs object to get mouse position
            //this.x = objects.Game.stage.mouseX;
            //this.y = objects.Game.stage.mouseY;
            // This will eventually be replaced with keyboard input
            if(managers.Game.keyboardManager.moveLeft)
            {
                this.x -= 12;
            }
            if(managers.Game.keyboardManager.moveRight)
            {
                this.x += 12;
            }
            if(managers.Game.keyboardManager.moveDown)
            {
                this.y += 12;
            }
            if(managers.Game.keyboardManager.moveUp)
            {
                this.y -= 12;
            }
            if(managers.Game.keyboardManager.shoot)
            {
                
            }

            
        }
        public CheckBound():void {
            
            // Left boundary
            if(this.y <= 300) {
                this.y = 300;
            }
            if(this.y >= 820) {
                this.y = 820;
            }
            if(this.x <= 70) {
                this.x = 70;
            }
            if(this.x >= 580) {
                this.x = 580;
            }
            
        }

       
        public LaserFire():void {
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
        }
       

    }
}