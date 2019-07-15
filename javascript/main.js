(function() {
"use strict"

window.onload = init;

function init() {
    
    if (document.getElementById('entry-form') !== null){
        const entryForm = document.getElementById('entry-form');
        entryForm.addEventListener('submit', submitEntry);
    } else if (document.getElementById('entries')){
        const entries = JSON.parse(localStorage.getItem('entries'));
        if (entries !== null){
            displayEntries(entries);
        }
    }
}

function displayEntries(entries) {
    let entriesList = document.getElementById('entries');
    entriesList.innerHTML = '';
    
    entries.forEach( entry => {
        const date = entry.date;
        const object = entry.object;
        const description = entry.description;

        entriesList.innerHTML += `<div class="entry">
                                    <h3>${date}</h3>
                                    <h5>${object}</h5>
                                    <p>${description}</p>
                                  </div>`
    });
}

function submitEntry(e) {
    const formData = document.querySelectorAll('#entry-form input');
    let entry = {};
    if (formData.length > 0) {
        for(let i = 0; i < formData.length; i++) {
            entry[formData[i].name] = formData[i].value;
            console.log(formData[i]);
        }
    }
    let description = document.getElementById("#entry-form description");
    if (description !== null){
        entry[description.name] = description.value;
    }

    let entries = localStorage.getItem('entries');
    if (entries === null){
        entries = [];
    }
    entries.push(entry);
    localStorage.setItem('entries', JSON.stringify(entries));
    document.getElementById('entry-form').reset();
    e.preventDefault();
}

})();