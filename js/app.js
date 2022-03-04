// get search response
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

// display search result
const displaySearchResult = (infos) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    infos.forEach(info => {
        // console.log(info);
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card h-100 rounded-3 shadow">
                <img src="${info.image}" class="card-img-top w-auto p-5" alt="...">
                <div class="card-body">
                    <h2 class="card-title">${info.phone_name}</h2>
                    <p class="card-text text-secondary fw-bold">${info.brand}</p>
                    <button onclick="showPhoneDetails('${info.slug}')" class="btn btn-primary d-grid col-12" type="button">See More Details</button>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}

// get details button response
const showPhoneDetails = (phoneSlug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}

// display phone details
const displayPhoneDetails = (details) => {
    console.log(details);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    phoneDetails.textContent = '';
    div.innerHTML = `
    <img src="${details.image}" class="card-img-top w-50 p-4 text-center mx-auto" alt="...">
        <hr class="ms-2 me-2">
        <div class="card-body">
            <h5 class="card-title">${details.name}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"></p>
        </div>
    `;
    phoneDetails.appendChild(div);
}