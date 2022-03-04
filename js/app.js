const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(infos => displaySearchResult(infos.data))
}

const displaySearchResult = (infos) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    infos.forEach(info => {
        console.log(info);
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card h-100 rounded-3 shadow">
                <img src="${info.image}" class="card-img-top w-auto" alt="...">
                <div class="card-body">
                    <h2 class="card-title">${info.phone_name}</h2>
                    <p class="card-text text-primary">${info.brand}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}
