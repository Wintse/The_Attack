(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    // Store current scene information
    var currentScene;
    var currentState;
    var keyboardManager;
    assetManifest = [
        { id: "startButton", src: "./Assets/StartButton.png" },
        { id: "background", src: "./Assets/background.png" },
        { id: "player", src: "./Assets/player.png" },
        { id: "enemy", src: "./Assets/enemy1.png" },
        { id: "explosion", src: "./Assets/Audio/explode.ogg" },
        { id: "start_music", src: "./Assets/Audio/Title_Screen.mp3" },
        { id: "level1_music", src: "./Assets/Audio/Level1.mp3" },
        { id: "level2_music", src: "./Assets/Audio/Level2.mp3" }
    ];
    function Init() {
        console.log("start inital");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        // Set up default game states -- State Machine
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager = keyboardManager;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != objects.Game.currentScene) {
            console.log("Changing scenes to " + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("Game Start");
        // Finite State Machine
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.LEVEL1:
                stage.removeAllChildren();
                currentScene = new scenes.Level1Scene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.LEVEL2:
                stage.removeAllChildren();
                currentScene = new scenes.Level2Scene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAMEOVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map