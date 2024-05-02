const SectionMain = document.getElementById('Section-Main');
const ulSectionMain = document.querySelector('ul');
const saveBtn = document.getElementById('add-film');

const title = document.getElementById('title');
const autore = document.getElementById('autore');
const description = document.getElementById('description');
const durata = document.getElementById('durata');
const tags = document.getElementById('tags');
const imageUrl = document.getElementById('image-url');
const filmUrl = document.getElementById('film-url');


class FilmItem{
    constructor(
        Id, tittle, autore,
        imageurl, description, url,
        durata, tags
    ){
            this.id = Id;
            this.tittle = tittle;
            this.autore = autore;
            this.imageurl = imageurl;
            this.description = description;
            this.durata = durata;
            this.url = url;
            this.tags = tags;
        }   

    renderFilm(){
        const mainEl = document.createElement('li');
        mainEl.innerHTML = `   
                <div class="dynamic-main-div" id="dynamic-main-div">
                    <div class="background-image">
                        <img src="${this.imageurl}" width="300px" height="400px">
                    </div>
                    <div class="content-card">
                        <h3>${this.tittle}</h3>
                        <div class="other-information">
                            <p>${this.durata}</p>
                            <p class="author">${this.autore}</p>
                            <p>${this.tags}</p>
                        </div>
                        <p class="desc">${this.description.substring(0, 100) + '....'}</p>
                        <div class="Tools">
                            <button class="AddPrefer" id="Add-btn">+ Add To List</button>
                            <button class="whatch"><a href="${this.url}">Watch Now -></a></button>
                        </div>
                    </div>
                </div>`
        ulSectionMain.append(mainEl);
    }
};
const RetriveFunctionItem = function(){
    const dbRequest = indexedDB.open('FilmList', 1);

    dbRequest.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(['films'], 'readonly');
        const objectStore = transaction.objectStore('films');
        const request = objectStore.openCursor();

        request.onsuccess = function(event) {
            var ListItemFilm = []
            const cursor = event.target.result;

            if (cursor) {
                const filmData = cursor.value;
                cursor.continue();
                ListItemFilm.push(filmData)
            }

            for (const item of ListItemFilm){
                const newItem = new FilmItem(
                    item.id,
                    item.title,
                    item.autore,
                    item.imageurl,
                    item.description,
                    item.url,
                    item.durata,
                    item.tags,
                );
                newItem.renderFilm()
            }
           
        };
        request.onerror = function(event) {
            console.error('Error fetching films', event.target.error);
        }; 
    };

    dbRequest.onerror = function(event) {
        console.error('Something Went Wrong', event.target.error);
    };
};
const AddDataToDatabase = function(
    titleInput, autoreInput, imageurlInput,
    descriptionInput, durataInput, urlInput, tagsInput
) {
    const dbRequest = indexedDB.open('FilmList', 1);

    dbRequest.onerror = function(event) {
        console.error("Error opening database:", event.target.error);
    };
    dbRequest.onsuccess = function(event) {
        const db = event.target.result;

        db.onerror = function(event) {
            console.error("Database error:", event.target.error);
        };

        const transaction = db.transaction(['films'], 'readwrite');
        const objectStore = transaction.objectStore('films');
        const countRequest = objectStore.count();

        countRequest.onsuccess = function(event) {
            const numberOfElements = event.target.result;
            const film = {
                id: numberOfElements + 1,
                title: titleInput,
                autore: autoreInput,
                imageurl: imageurlInput,
                description: descriptionInput,
                durata: durataInput,
                url: urlInput,
                tags: tagsInput,
            };

            const request = objectStore.add(film);

            request.onerror = function(event) {
                console.error("Error adding film:", event.target.error);
            };

            request.onsuccess = function(event) {
                console.log("Film added successfully!");
            };
        };

        countRequest.onerror = function(event) {
            console.error("Error counting elements:", event.target.error);
        };
    };
    dbRequest.onupgradeneeded = function(event) {
        const db = event.target.result;
        const objectStore = db.createObjectStore('films', { keyPath: 'id' });
    };

    location.reload();
};


RetriveFunctionItem();

saveBtn.addEventListener('click', () =>{

    AddDataToDatabase(
        titleInput = title.value,
        autoreInput = autore.value,
        imageurlInput = imageUrl.value,
        descriptionInput = description.value,
        durataInput = durata.value,
        urlInput = filmUrl.value,
        tagsInput = tags.value
    );

})  






