const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');

// Grid size and initial snake properties
const grid = 20;
let count = 0;

let snake = {
    x: 160,
    y: 160,

    // Snake velocity
    dx: grid,
    dy: 0,

    // Keep track of all snake cells
    cells: [],

    // Initial length of the snake
    maxCells: 4
};

let apple = {
    x: 320,
    y: 320
};

// Get a random number between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Game loop
function loop() {
    requestAnimationFrame(loop);

    // Slow the game loop to make it playable
    if (++count < 4) {
        return;
    }

    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Move the snake
    snake.x += snake.dx;
    snake.y += snake.dy;

    // Wrap the snake position horizontally on edge of screen
    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    } else if (snake.x >= canvas.width) {
        snake.x = 0;
    }

    // Wrap the snake position vertically on edge of screen
    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    } else if (snake.y >= canvas.height) {
        snake.y = 0;
    }

    // Keep track of where the snake has been. Front of the array is always the head
    snake.cells.unshift({ x: snake.x, y: snake.y });

    // Remove cells as we move away from them
    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }

    // Draw the apple
    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

    // Draw the snake
    context.fillStyle = 'green';
    snake.cells.forEach(function (cell, index) {

        // Draw the snake one cell at a time
        context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

        // If the snake eats the apple
        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;

            // Place the apple somewhere else randomly
            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
        }

        // Check collision with all cells after this one (modified snake collisions)
        for (let i = index + 1; i < snake.cells.length; i++) {

            // If the snake collides with itself, reset the game
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                snake.x = 160;
                snake.y = 160;
                snake.cells = [];
                snake.maxCells = 4;
                snake.dx = grid;
                snake.dy = 0;

                // Reposition the apple
                apple.x = getRandomInt(0, 25) * grid;
                apple.y = getRandomInt(0, 25) * grid;
            }
        }
    });
}

// Keyboard event listeners
document.addEventListener('keydown', function (e) {
    // Prevent the snake from reversing
    if (e.which === 37 && snake.dx === 0) { // Left arrow
        snake.dx = -grid;
        snake.dy = 0;
    } else if (e.which === 38 && snake.dy === 0) { // Up arrow
        snake.dy = -grid;
        snake.dx = 0;
    } else if (e.which === 39 && snake.dx === 0) { // Right arrow
        snake.dx = grid;
        snake.dy = 0;
    } else if (e.which === 40 && snake.dy === 0) { // Down arrow
        snake.dy = grid;
        snake.dx = 0;
    }
});

// Start the game
requestAnimationFrame(loop);
