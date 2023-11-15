class Warrior {
    constructor(name) {
        this.name = name;
        this.lev = 1;
        this.exp = 100;
        this.ranking = "Pushover"
        this.awards = [];
    }
    level() {
        this.lev = Math.floor(this.exp / 100)
        if(this.lev > 100) {
            this.lev = 100
        }
        if (this.lev === 100) {
            this.exp = 10000;
        }

        return this.lev
    }
    experience() {


        if(this.exp > 10000) { this.exp = 10000}
        this.rank()
        return this.exp
    }
    rank() {
        this.level()
        const ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
        this.ranking = ranks[Math.floor(this.lev / 10)]
        return this.ranking
    }
    battle(enemy_level) {
        let points = 0
        this.level()
        let rank_difference = Math.floor(enemy_level / 10) - Math.floor(this.lev / 10);
        if (enemy_level < 1 || enemy_level > 100) return "Invalid level"
        else if(enemy_level === this.lev) this.exp += 10
        else if(this.lev - 1 === enemy_level && enemy_level !== 0) this.exp += 5

        else if(enemy_level < this.lev - 1) this.exp  += 0
        let diff = enemy_level - this.lev
        if(enemy_level > this.lev && !((rank_difference >= 1 && diff >= 5))) {
            this.exp += (20 * diff * diff)
        }



        if (rankDifference >= 1 && diff >= 5) {
            return "You've been defeated";
        }
        else if(diff <= -2) return "Easy fight"
        else if (diff === -1 || diff === 0) return "A good fight"
        else if(diff > 0) return "An intense fight"

    }

    training(event) {
        this.level()
        if(this.lev >= event[2]) { this.exp += (event[1])
            this.achievements(event[0])
            return event[0]
        }
        else {
            return "Not strong enough"
        }
    }
    achievements(award) {
        if (award) {
            this.awards.push(award);
        }
        return this.awards;
    }

}