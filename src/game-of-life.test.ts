import {nextStateCell, initGridSpace} from './game-of-life';

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
    describe('grid can initial space', () => {
        const width: number = 100
        const height: number = 100
        const grid: boolean[][] = initGridSpace(width, height)

        it('gird size should be width * height ', function () {
            const gridSize: number = grid.reduce((size, rows) => rows.length, 0)

            expect(gridSize).toBe(width * height)
        })

        it('every cells on new grid is dead by default.', function () {
            const isAllDead: boolean = grid.reduce((isDead, rows) => rows.every(row => row == false), true)
            
            expect(isAllDead).toBeTruthy
        })
    })
})

