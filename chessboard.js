const chessboard = () => {
    let board ="";
    let size = 8;
    for (let i = 0; i<=size; i++) {
        for (let index = 0; index<=size; index++){
            if ((i+index)%2=== 0) {
                board += '#';
            }
            else board += ' ';
            if( index === 8) {
                board += "\n"
            }
        }
    }
console.log(board);
}
