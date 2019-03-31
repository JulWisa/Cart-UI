const initialState = [
    {id: 0, name: "Яблоко", price: 86, count: 0},
    {id: 1, name: "Томат", price: 109, count: 4},
    {id: 2, name: "Морковь", price: 39, count: 7},
    {id: 3, name: "Апельсин", price: 73, count: 68},
    {id: 4, name: "Лимон", price: 52, count: 33}];

export const productsReducer = (state = initialState, action) => state;