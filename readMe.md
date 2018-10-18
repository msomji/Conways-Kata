# Conway's game of Life Kata [![Build Status](https://travis-ci.com/msomji/Conways-Kata.svg?branch=master)](https://travis-ci.com/msomji/Conways-Kata)

## The Rules: 
- Any live cell with **fewer than two live neighbors dies**, as if caused by under population.
- Any live cell with **more than three live neighbors dies**, as if by overcrowding.
- Any live cell with **two or three live neighbors lives** on to the next generation.
- Any dead cell with **exactly three live neighbors becomes a live cell**.
- A cell’s neighbors are those cells which are **horizontally, vertically or diagonally adjacent**. Most cells will have eight neighbors. Cells placed on the edge of the grid will have fewer.


## Input/Output

- The input will be a 2D Array object of . and 0 where they represent alive and dead respectively.

## Usage
 - This implementation will take a grid of any size and will be represented on the terminal once the code is run via the
   following command: ` node ./src/main.js `
 - Run the tests by just executing `jasmine` from the root directory (after running an npm install)
