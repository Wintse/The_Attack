module managers {
    export class Game {
        // GLOBAL VARIABLES
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static currentSceneObject: objects.Scene;
        public static keyboardManager: managers.Keyboard;
    }
}