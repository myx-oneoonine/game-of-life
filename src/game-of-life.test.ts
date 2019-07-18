import {nextLife} from './game-of-life';

describe('Cell ', () => {
    describe('Any live cell with fewer than two live neighbours dies, as if by underpopulation.', () => {
        it('Should be die(false) when neighbours less than 2', function () {
            const neighbours: boolean[] = [true, false, false, false, false, false, false, false]
            const result: boolean = nextLife(neighbours)
            expect(result).toBeFalsy()
        });
    })

    describe('Any live cell with two or three live neighbours lives on to the next generation.', () => {
        it('Should be alive(true) when neighbours is 2', () => {
            const neighbours: boolean[] = [true, true, false, false, false, false, false, false]
            const result: boolean = nextLife(neighbours)
            expect(result).toBeTruthy()
        })

        it('Should be alive(true) when neighbours is 3', () => {
            const neighbours: boolean[] = [true, true, false, false, false, false, false, true]
            const result: boolean = nextLife(neighbours)
            expect(result).toBeTruthy()
        })
    })

    describe('Any live cell with more than three live neighbours dies, as if by overpopulation', () => {
        it('Should be die(false) when neighbours over 3', () => {
            const neighbours: boolean[] = [true, true, true, false, false, false, false, true]
            const result: boolean = nextLife(neighbours)
            expect(result).toBeFalsy()
        })
    })

    describe('Any dead cell with three live neighbours becomes a live cell, as if by reproduction.', () => {
        it('Should be reborn when neighbours is 3', () => {
            const neighbours: boolean[] = [true, true, false, false, false, false, false, true]
            const result: boolean = nextLife(neighbours, false)
            expect(result).toBeTruthy()
        })

        it('Should be reborn when neighbours more than 3', () => {
            const neighbours: boolean[] = [true, true, true, false, false, false, false, true]
            const result: boolean = nextLife(neighbours, false)
            expect(result).toBeTruthy()
        })
    })
})

