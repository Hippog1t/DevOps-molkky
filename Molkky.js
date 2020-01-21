class Molkky{
	constructor(){
		this.score = 0;
		this.victory = false;
		this.eliminated = false;
		this.n_fails = 0
	}

	getScore(){
		return this.score;
	}

	oneDown(number){
		this.score += number;
		check()
	}

	nDown(n_down){
		this.score += n_down;
		check()
	}

	check(){
		if(this.score > 50){
			this.score = 25
		}
		else if(this.score == 50){
			this.victory = true;
		}

		if(this.n_fails >= 3){
			this.eliminated = true;
		}
	}
}

module.exports = {Molkky};
