const search = document.getElementById('search');
const matchList = document.getElementById('match-list');


// Search states.json and filter it
const searchStates = searchText => {
    const res = await fetch('../data/states.json');
    const states = await res.json();

    console.log(states);
}

search.addEventListener('intput', () => searchStates(search.value));
