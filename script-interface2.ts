interface playerInterface {
    run(): void;
    addLives(n:number): void;
    score(): number;
}

function createPlayer(): playerInterface {
    return {
        run: function() {},
        addLives: function(n:number) {},
        score: function() { return -1 }
    }
}

var player1 = createPlayer();