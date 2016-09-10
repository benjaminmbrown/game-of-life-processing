var GameOfLife = function(){
	this.w = 15
	this.columns = width/this.w;
	this.rows = height/this.w;

	this.board = new Array(this.columns);

	for (var i =0 ; i < this.columns; i++){
		this.board[i] = new Array(this.rows);
	}

	this.next = new Array(this.columns);

	for (var i =0 ; i < this.columns; i++){
		this.next[i] = new Array(this.rows);
	}

	this.init = function(){

		for(var i = 0; i<this.columns;i++){
			for(var j=0;j<this.rows;j++){
				//edges have zeros
				if(i===0 | j===0 | i===this.columns-1 || j===this.rows-1){
					this.board[i][j] = 0;
				}
				else{
					this.board[i][j] = Math.floor(random(2));
				}

					this.next[i][j] = 0


			}
		}

	}

	this.init();
	this.generate = function(){

		//Death:if cell is alive, it will die:
			//if cell has four or more alive neighbors
			//if cell has one or fewer alive neighbors

		//Birth: if a cell is dead, it will come alive if it has 3 alive neighbors

		//Stasis:
			//if the cell is alive and has 2 or three live neighbors, it stays alive
			//if cell is dead and has anything other than 3 alive neighbors, it stays dead


	}

	this.display = function(){
		for(var i = 0; i<this.columns;i++){
			for(var j=0;j<this.rows;j++){
				if((this.board[i][j]==1))fill(0);
					else fill(255);
				rect(i*this.w,j*this.w,this.w,this.w);
			}
		}

	}
}