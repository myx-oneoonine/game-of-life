import {nextStateCell, initGridSpace, addAliveCells} from './game-of-life';

describe('Cells', () => {
    describe('Any live cell with fewer than two live neighbours dies, as if by underpopulation.', () => {
        it('Should be die(false) when neighbours is 1', function () {
            const neighbours: boolean[] = [true, false, false, false, false, false, false, false]
            const result: boolean = nextStateCell(neighbours)
            expect(result).toBeFalsy()
        })

        it('Should be die(false) when no neighbours', function () {
            const neighbours: boolean[] = [false, false, false, false, false, false, false, false]
            const result: boolean = nextStateCell(neighbours)
            expect(result).toBeFalsy()
        });
    })

    describe('Any live cell with two or three live neighbours lives on to the next generation.', () => {
        it('Should be alive(true) when neighbours is 2', () => {
            const neighbours: boolean[] = [true, true, false, false, false, false, false, false]
            const result: boolean = nextStateCell(neighbours)
            expect(result).toBeTruthy()
        })

        it('Should be alive(true) when neighbours is 3', () => {
            const neighbours: boolean[] = [true, true, false, false, false, false, false, true]
            const result: boolean = nextStateCell(neighbours)
            expect(result).toBeTruthy()
        })
    })

    describe('Any live cell with more than three live neighbours dies, as if by overpopulation', () => {
        it('Should be die(false) when neighbours over 3', () => {
            const neighbours: boolean[] = [true, true, true, false, false, false, false, true]
            const result: boolean = nextStateCell(neighbours)
            expect(result).toBeFalsy()
        })
    })

    describe('Any dead cell with three live neighbours becomes a live cell, as if by reproduction.', () => {
        it('Should be reborn when neighbours is 3', () => {
            const neighbours: boolean[] = [true, true, false, false, false, false, false, true]
            const result: boolean = nextStateCell(neighbours, false)
            expect(result).toBeTruthy()
        })

        it('Should be reborn when neighbours more than 3', () => {
            const neighbours: boolean[] = [true, true, true, false, false, false, false, true]
            const result: boolean = nextStateCell(neighbours, false)
            expect(result).toBeTruthy()
        })
    })
})

describe('The Grid', () => {
    const width: number = 10000
    const height: number = 10000
    const gridInit: boolean[][] = initGridSpace(width, height)
    const griSize = (grid: boolean[][]) => grid.reduce((size, row) => size + row.length, 0)

    describe('grid can initial the space', () => {
        it('gird size should be width * height ', function () {
            expect(griSize(gridInit)).toBe(width * height)
        })

        it('every cells on new grid is dead by default.', function () {
            const isAllDead: boolean = gridInit.reduce((isDead, rows) => rows.every(row => row == false), true)

            expect(isAllDead).toBeTruthy()
        })
    })

    describe('can create alive cells to the grid.', () => {
        it('grid should have alive cell equal aliveCells.length', function () {
            const aliveCells: any[] = [[0, 0], [0, 1]]
            const grid: boolean[][] = addAliveCells(gridInit, aliveCells)

            const aliveCellsCount: number = grid.reduce((count, row) => count + row.filter((cell) => cell).length, 0)
            expect(aliveCellsCount).toBe(aliveCells.length)
        })

        it('specific cell location should be alive', () => {
            const aliveCell: any[] = [[2, 3]]
            const grid: boolean[][] = addAliveCells(gridInit, aliveCell)

            expect(grid[2][3]).toBeTruthy()
        })
    })

    describe('grid can change state cell.', () => {
        const width: number = 100
        const height: number = 100
        const grid: boolean[][] = initGridSpace(width, height)
    })
})

