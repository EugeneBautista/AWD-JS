const squares = document.querySelectorAll(".square");

squares.forEach((square, index) => {
    square.style.animationDelay = `${index * 0.2}s`;
});
