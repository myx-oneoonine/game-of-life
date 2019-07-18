export const initGridSpace = (width: number, height: number) => {
    let grid: boolean[][] = []
    let row: boolean[] = []

    for (let w = 0; w < width; w++) {
        for (let h = 0; h < height; h++) {
            row.push(false)
        }
        grid.push(row)
    }

    return grid
}


export const nextStateCell = (neighbours: boolean[], isAlive: boolean = true,) => {
    const count = neighbours.filter((neighbourIsAlive) => neighbourIsAlive).length

    if (isAlive) {
        return count === 2 || count === 3
    } else {
        return count >= 3
    }
}
