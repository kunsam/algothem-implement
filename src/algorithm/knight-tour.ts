

/*
  Define the next move of the knight
  knight movement 规则，可以移动的有八个方向
*/
const X = [2, 1, -1, -2, -2, -1, 1, 2];
const Y = [1, 2, 2, 1, -1, -2, -2, -1];

// tags: back tracking
export default class KnightTour {

  public board: number[][];

  constructor(board: number[][]) {
    this.board = board;
    if (!this.checkBoard(this.board)) {
      throw new Error('error')
    }
  }

  public checkBoard(board: number[][]): boolean {
    for (let i = 0; i < board.length; i++) {
      for (let index = 0; index < board[i].length; index++) {
        if (board[i].length !== board.length) {
          return false
        }
      }
    }
    return true;
  }

  public getKnightTour(x: number, y: number, moveNum: number) {
    const board = this.board;
    const N = this.board.length;
    if (moveNum === N * N) {
      return true;
    }
  
    for (let i = 0; i < 8; i++) {
      const nextX = x + X[i];
      const nextY = y + Y[i];

      /*
      Check if knight is still in the board
      Check that knight does not visit an already visited square
      */
      if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < N && board[nextX][nextY] === -1) {
        board[nextX][nextY] = moveNum;
        const nextMoveNum = moveNum + 1;
        if (this.getKnightTour(nextX, nextY, nextMoveNum)) {
          return true;
        }
        board[nextX][nextY] = -1; // backtrack
      } else {
        console.log(`${nextX},${nextY} is not a valid move`)
      }
    }
    return false;
  }
}


export function testKnightTour() {
  /*
  For N>3 the time taken by this algorithm is sufficiently high
  Also it is not possible to visualise for N>6 due to stack overflow
  caused by large number of recursive calls
  */
  const N = 3;
  const board = new Array(N);
  for (let i = board.length - 1; i >= 0; i--) {
    board[i] = new Array(N);
  }

  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = board[i].length - 1; j >= 0; j--) {
      board[i][j] = -1;
    }
  }

  const pos = new Array(2);
  pos[0] = pos[1] = -1;

  board[0][0] = 0; // start from this position
  pos[0] = 0;
  pos[1] = 0;

  const kighttour = new KnightTour(board);
  if (kighttour.getKnightTour(0, 0, 1) === false) {
    console.log('slution does not exist')
  } else {
    console.log('Solution found');
    console.log(kighttour.board, 'kighttour.board');
  }

}

testKnightTour();