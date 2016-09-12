var GameOfLife = function() {
    this.w = 15
    this.columns = width / this.w;
    this.rows = height / this.w;

    console.log(this.rows);
    this.board = new Array(Math.floor(this.columns));

    for (var i = 0; i < this.columns; i++) {
        this.board[i] = new Array(Math.floor(this.rows));
    }

    this.next = new Array(this.columns);

    for (var i = 0; i < this.columns; i++) {
        this.next[i] = new Array(Math.floor(this.rows));
    }

    this.init = function() {

        for (var i = 0; i < this.columns; i++) {
            for (var j = 0; j < this.rows; j++) {
                //edges have zeros
                if (i === 0 | j === 0 | i === this.columns - 1 || j === this.rows - 1) {
                    this.board[i][j] = 0;
                } else {
                    this.board[i][j] = Math.floor(random(2));
                }

                this.next[i][j] = 0


            }
        }

    }

    this.init();
    this.generate = function() {

        for (var x = 1; x < this.columns - 1; x++) {
            for (var y = 1; y < this.rows - 1; y++) {

            	var neighbors = 0;
            	//neighbors in grid
            	for(var i = -1; i<=1; i++){
            		for(var j = -1; i<=1;i++){
            			neighbors += this.board[x+i][y+j];
            		}
            	}
            	//no neighbors/toomany/reproduce/stay same
            	if((this.board[x][y] == 1) && (neighbors <2)) this.next[x][y]=0;
            	else if((this.board[x][y] == 1) && (neighbors <3)) this.next[x][y]=0;
            	else if((this.board[x][y] == 0) && (neighbors <3)) this.next[x][y]=1;
            	else this.next[x][y] = this.board[x][y]; 

            }
        }

        var temp = this.board;
        this.board = this.next;
        this.next = temp;

        //Death:if cell is alive, it will die:
        //if cell has four or more alive neighbors
        //if cell has one or fewer alive neighbors

        //Birth: if a cell is dead, it will come alive if it has 3 alive neighbors

        //Stasis:
        //if the cell is alive and has 2 or three live neighbors, it stays alive
        //if cell is dead and has anything other than 3 alive neighbors, it stays dead


    }

    this.display = function() {
        for (var i = 0; i < this.columns; i++) {
            for (var j = 0; j < this.rows; j++) {
                if ((this.board[i][j] == 1)) fill(0);
                else fill(255);
                rect(i * this.w, j * this.w, this.w, this.w);
            }
        }

    }
}
