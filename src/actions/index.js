export const increment = (num) => {
    return { type: 'INCREMENT' };
}
export const decrement = (num) => {
    return { type: 'DECREMENT' };
}

export const logIn = () => {
    return { type: 'SIGN_IN' };
}
export const logOut = () => {
    return { type: 'SIGN_OUT' };
}