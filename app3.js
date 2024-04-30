const MainSection = document.getElementById('Section-Main');
const filmListSection = document.createElement('ul');
const addPreferBtn = document.getElementById('Add-btn');

class Film{
    constructor(title, image, desc, durata, anno, cate, urlfilm){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.durata = durata;
        this.anno = anno;
        this.categoria = cate;
        this.urlfilm = urlfilm;
        this.prefer = false;
    }

    render(){
        const mainEl = document.createElement('li');
        mainEl.innerHTML = `    
            
                <div class="dynamic-main-div">
                    <div class="background-image">
                        <img src="${this.imageUrl}" width="300px" height="400px">
                    </div>
                    <div class="content-card">
                        <h3>${this.title}</h3>
                        <div class="other-information">
                            <p>${this.durata}</p>
                            <p>${this.anno}</p>
                            <p>${this.categoria}</p>
                        </div>
                        <p class="desc">${this.description.substring(0, 100) + '....'}</p>
                        <div class="Tools">
                            <button class="AddPrefer" id="Add-btn">+ Add To List</button>
                            <button class="whatch"><a href="${this.urlfilm}">Watch Now -></a></button>
                    </div>
                </div>
        `;
        filmListSection.append(mainEl);
    }
};

class FilmPreferiti{
    constructor(...filmDetail){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.durata = durata;
        this.anno = anno;
        this.categoria = cate;
        this.urlfilm = urlfilm;
        this.prefer = true;
    }
}


const FilmList = [
    new Film(
        'SCARY MOVIE I',
        "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "Una bellissima studentessa delle superiori viene uccisa. Un gruppo di adolescenti deve scoprire se tra loro si nasconde un omicida..fonte trama Scary Movie streaming",
        "88 minuti",
        "2000",
        "Commedia",
        "https://mariovideo.one/p/scary-movie-senza-paura-senza-vergogna-senza-cervello"
    ), 
    new Film(
        'SCARY MOVIE II',
        "https://m.media-amazon.com/images/I/71ZeFpv3dLL._AC_UF1000,1000_QL80_.jpg",
        "È passato un anno dalle orribili morti che sono avvenute nella città dove vive Cindy. Ma l'assassino è ancora in libertà. Un giorno, un professore folle obbliga Cindy e i suoi compagni ad andare a visitare una casa posseduta dai fantasmi. I ragazzi sono sedotti dall'idea di trascorrere una settimana piena di brividi lontano dall'università. Ma una volta entrati nella dimora si rendono conto che esistono cose più terrificanti rispetto a quelle che sono stati abituati a vedere nei vecchi film dell'orrore...",
        "83 minuti",
        "2001",
        "Commedia",
        "https://mariovideo.one/p/scary-movie-2"
    ),
    new Film(
        'SCARY MOVIE III',
        "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_FMjpg_UX1000_.jpg",
        "L'ambiziosa inviata Cindy Campbell è in cerca di un nuovo scoop televisivo, e così incappa in un'assurda serie di episodi che minacciano il pianeta: un'invasione aliena, videocassette che uccidono, inquietanti cerchi nel grano, profezie, bambini con doni soprannaturali, ambiziosi rapper bianchi e persino... Michael Jackson..fonte trama Scary Movie 3 streaming",
        "90 minuti",
        "2003",
        "Commedia",
        "https://mariovideo.one/p/scary-movie-3-una-risata-vi-seppellira"
    ),
    new Film(
        'SCARY MOVIE IV',
        "https://upload.wikimedia.org/wikipedia/en/1/11/Scary_movie_four_ver4.jpg",
        "Cindy Campbell deve prendersi cura di una vecchia signora nella sinistra 'Grudge House'. La ragazza scopre che la casa è infestata dal fantasma di un bambino. Intanto si innamora ricambiata di Tom Ryan, il suo vicino, che da solo si prende cura dei suoi figli. Ma il mondo viene attaccato da Tr-iPods, giganti che distruggono tutto ciò che incontrano. Tom fugge con i suoi bambini e finisce in un misterioso villaggio dove il tempo sembra essersi fermato a cento anni fa..",
        "83 minuti",
        "2006",
        "Commedia",
        "https://mariovideo.one/p/scary-movie-4"
    ),
    new Film(
        'SCARY MOVIE V',
        "https://m.media-amazon.com/images/I/91RzpxQktRL._AC_UF1000,1000_QL80_.jpg",
        "Dan (Simon Rex) e Jody (Ashley Tidale) sono una giovane coppia di sposi felici che, dopo aver portato a casa dall'ospedale il loro bambino appena nato, cominciano ad osservare il verificarsi di strane e misteriose attività. Quando poi il caos prende il sopravvento sul lavoro di lei come ballerina e su quello di lui come ricercatore, Jody e Dan si rendono conto di essere di fronte a un malvagio demone. Con la consulenza di qualificati esperti e il supporto di telecamere nascoste ovunque, dovranno capire come liberarsi dal male prima che sia troppo tardi.... ...",
        "83 minuti",
        "2001",
        "Commedia",
        "https://mariovideo.one/p/scary-movie-5"
    ),
    new Film(
        'SCARY MOVIE V',
        "https://m.media-amazon.com/images/I/91RzpxQktRL._AC_UF1000,1000_QL80_.jpg",
        "Dan (Simon Rex) e Jody (Ashley Tidale) sono una giovane coppia di sposi felici che, dopo aver portato a casa dall'ospedale il loro bambino appena nato, cominciano ad osservare il verificarsi di strane e misteriose attività. Quando poi il caos prende il sopravvento sul lavoro di lei come ballerina e su quello di lui come ricercatore, Jody e Dan si rendono conto di essere di fronte a un malvagio demone. Con la consulenza di qualificati esperti e il supporto di telecamere nascoste ovunque, dovranno capire come liberarsi dal male prima che sia troppo tardi.... ...",
        "83 minuti",
        "2001",
        "Commedia",
    ),
    new Film(
        'SCARY MOVIE V',
        "https://m.media-amazon.com/images/I/91RzpxQktRL._AC_UF1000,1000_QL80_.jpg",
        "Dan (Simon Rex) e Jody (Ashley Tidale) sono una giovane coppia di sposi felici che, dopo aver portato a casa dall'ospedale il loro bambino appena nato, cominciano ad osservare il verificarsi di strane e misteriose attività. Quando poi il caos prende il sopravvento sul lavoro di lei come ballerina e su quello di lui come ricercatore, Jody e Dan si rendono conto di essere di fronte a un malvagio demone. Con la consulenza di qualificati esperti e il supporto di telecamere nascoste ovunque, dovranno capire come liberarsi dal male prima che sia troppo tardi.... ...",
        "83 minuti",
        "2001",
        "Commedia",
    ),
    new Film(
        'SCARY MOVIE V',
        "https://m.media-amazon.com/images/I/91RzpxQktRL._AC_UF1000,1000_QL80_.jpg",
        "Dan (Simon Rex) e Jody (Ashley Tidale) sono una giovane coppia di sposi felici che, dopo aver portato a casa dall'ospedale il loro bambino appena nato, cominciano ad osservare il verificarsi di strane e misteriose attività. Quando poi il caos prende il sopravvento sul lavoro di lei come ballerina e su quello di lui come ricercatore, Jody e Dan si rendono conto di essere di fronte a un malvagio demone. Con la consulenza di qualificati esperti e il supporto di telecamere nascoste ovunque, dovranno capire come liberarsi dal male prima che sia troppo tardi.... ...",
        "83 minuti",
        "2001",
        "Commedia",
    ),
    new Film(
        'SCARY MOVIE V',
        "https://m.media-amazon.com/images/I/91RzpxQktRL._AC_UF1000,1000_QL80_.jpg",
        "Dan (Simon Rex) e Jody (Ashley Tidale) sono una giovane coppia di sposi felici che, dopo aver portato a casa dall'ospedale il loro bambino appena nato, cominciano ad osservare il verificarsi di strane e misteriose attività. Quando poi il caos prende il sopravvento sul lavoro di lei come ballerina e su quello di lui come ricercatore, Jody e Dan si rendono conto di essere di fronte a un malvagio demone. Con la consulenza di qualificati esperti e il supporto di telecamere nascoste ovunque, dovranno capire come liberarsi dal male prima che sia troppo tardi.... ...",
        "83 minuti",
        "2001",
        "Commedia",
    ),
    new Film(
        'SCARY MOVIE V',
        "https://m.media-amazon.com/images/I/91RzpxQktRL._AC_UF1000,1000_QL80_.jpg",
        "Dan (Simon Rex) e Jody (Ashley Tidale) sono una giovane coppia di sposi felici che, dopo aver portato a casa dall'ospedale il loro bambino appena nato, cominciano ad osservare il verificarsi di strane e misteriose attività. Quando poi il caos prende il sopravvento sul lavoro di lei come ballerina e su quello di lui come ricercatore, Jody e Dan si rendono conto di essere di fronte a un malvagio demone. Con la consulenza di qualificati esperti e il supporto di telecamere nascoste ovunque, dovranno capire come liberarsi dal male prima che sia troppo tardi.... ...",
        "83 minuti",
        "2001",
        "Commedia",
    ),
];

const CreateFilmList = (FilmList) => {

    for (const films of FilmList){
        films.render();
    }
    MainSection.append(filmListSection);
}


CreateFilmList(FilmList);

