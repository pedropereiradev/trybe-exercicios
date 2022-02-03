let chestPiece = "KiNg";

switch (chestPiece.toLowerCase()) {
    case "pawn":
        console.log("Vertically one or two squares or diaggonally to capture.");
    break;
    case "bishop":
        console.log("Diagonally any number of squares");
    break;
    case "knight":
        console.log("In 'L' shape; two squares in a direction then one to another direction");
    break;
    case "rook":
        console.log("Horizontally or vertically any number of squares");
    break;
    case "queen":
        console.log("Any direction, any number of squares");
    break;
    case "king":
        console.log("Any direction, one square");
    break;

    default:
        console.log("Erro.")
    break;
}