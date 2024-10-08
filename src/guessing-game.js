class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.currentGuess = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if (this.min === null || this.max === null) {
            throw new Error('Range is not set.');
        }
        this.currentGuess = Math.floor((this.min + this.max) / 2); 
        return this.currentGuess;
    }

    lower() {
        if (this.currentGuess !== null) {
            this.max = this.currentGuess; 
        }
    }

    greater() {
        if (this.currentGuess !== null) {
            this.min = this.currentGuess + 1; 
        }
    }
}

module.exports = GuessingGame;
