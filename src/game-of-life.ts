export const nextLife = (neighbours: boolean[], isAlive: boolean = true,) => {
    const count = neighbours.filter((neighbourIsAlive) => neighbourIsAlive).length

    if (isAlive) {
        return count === 2 || count === 3
    } else {
        return count >= 3
    }
}
