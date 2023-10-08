// Создаем редюсер
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// Создаем хранилище Redux
const store = Redux.createStore(counter);

const count = document.querySelector('#count');
const inBtn = document.querySelector('#increment');
const deBtn = document.querySelector('#decrement');

function render() {
    count.innerHTML = store.getState();
}

store.subscribe(render);
render();

inBtn.addEventListener('click', function () {
    store.dispatch({ type: 'INCREMENT' });
});

deBtn.addEventListener('click', function () {
    store.dispatch({ type: 'DECREMENT' });
});