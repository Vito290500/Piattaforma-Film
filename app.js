const SectionMain = document.getElementById('Section-Main');
const ulSectionMain = document.querySelector('ul');

class FilmItem{
    constructor(
        Id, tittle, autore, imageurl, description, url, durata, tags){
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
                            <p>${this.autore}</p>
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
                    item.tittle,
                    item.autore,
                    item.imageurl,
                    item.description,
                    item.durata,
                    item.url,
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

RetriveFunctionItem();

const AddDataToDatabase = function() {
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

        const film = { 
            id: '7',
            tittle: 'La città Incantata',
            autore: 'Studio Ghibli',
            imageurl: 'https://pad.mymovies.it/filmclub/2003/04/021/locandina.jpg',
            description: "La città incantata streaming altadefinizione La piccola Chihiro non sopporta l'idea di traslocare e di perdere i propri amici, ma non può far niente per impedirlo. Proprio quando la famiglia è in viaggio verso la nuova casa, il padre imbocca una strada sterrata che termina davanti a un tunnel misterioso.",
            durata: '120',
            url: 'none',
            tags: 'fantasy',
        };

        const request = objectStore.add(film);

        request.onerror = function(event) {
            console.error("Error adding film:", event.target.error);
        };

        request.onsuccess = function(event) {
            console.log("Film added successfully!");
        };
    };

    dbRequest.onupgradeneeded = function(event) {
        const db = event.target.result;
        const objectStore = db.createObjectStore('films', { keyPath: 'id' });
    };
};

AddDataToDatabase();



