// no class ,so we can mock
export const getNumber = () => {
    return `original number:156`;
}
export const getName = (name) => {
    return `original name:${name}`;
}
export const reBoot = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('original async value'), 2000)
})