var book1 = {
    title : "The Stormlight Archive",
    author : "Brandon Sanderson",
    genre : "Fantasy",
    cover : "../images/interests/stormlight.jpg"
}

var book2 = {
    title : "The Lightbringer Series",
    author : "Brent Weeks",
    genre : "Fantasy",
    cover : "../images/interests/lightbringer.jpg"
}

var book3 = {
    title : "Mistborn Series",
    author : "Brandon Sanderson",
    genre : "Fantasy",
    cover : "../images/interests/mistborn.jpg"
}

var book4 = {
    title : "The Night Angel Trilogy",
    author : "Brent Weeks",
    genre : "Fantasy",
    cover : "../images/interests/nightangel.jpg"
}

var book5 = {
    title : "The Legend Trilogy",
    author : "Marie Lu",
    genre : "Dystopian",
    cover : "../images/interests/legend.jpg"
}

var book6 = {
    title : "The 5th Wave Trilogy",
    author : "Rick Yancey",
    genre : "Science Fiction",
    cover : "../images/interests/5thwave.jpg"
}

var book7 = {
    title : "The Maze Runner Series",
    author : "James Dashner",
    genre : "Dystopian",
    cover : "../images/interests/mazerunner.jpg"
}

var books = [book1, book2, book3, book4, book5, book6, book7]

function printBooks(book) {
    document.write('<div class="card"><center><img class="card-img-top" src="' + book.cover + '" style="height: 250px; width: 150px;"  alt="Series Cover"></>');
    document.write('<div class="card-body"><h4 class="card-title">' + book.title + ' </h4><p class="card-text"> Author: ' + book.author + ' <br> Genre: ' + book.genre);
    document.write(' </p></div></div>');
}

/*
                    <div class="card">
                        <center><img class="card-img-top" src="../images/interests/nightangel.jpg" style="height: 250px; width: 150px;"  alt="Series Cover"></>
                        <div class="card-body">
                          <h4 class="card-title"> The Night Angel Trilogy </h4>
                          <p class="card-text"> Author: Brent Weeks <br> Genre: Fantasy </p>
                        </div>
                    </div>
*/

var band1 = {
    image : "../images/interests/offspring.jpg",
    name : "The Offspring",
    genre : "Punk",
    origin : "Los Angeles, California"
}

var band2 = {
    image : "../images/interests/bvb.jpg",
    name : "Black Veil Brides",
    genre : "Metal",
    origin : "Cincinnati, Ohio"
} 

var band3 = {
    image : "../images/interests/miw.jpg",
    name : "Motionless in White",
    genre : "Alt-Metal",
    origin : "Scranton, Pennsylvania"
} 

var band4 = {
    image : "../images/interests/stand.jpg",
    name : "Stand Atlantic",
    genre : "Punk Pop",
    origin : "Sydney, Australia"
} 

var band5 = {
    image : "../images/interests/fir.jpg",
    name : "Falling In Reverse",
    genre : "Alt-Metal",
    origin : "Las Vegas, Nevada"
} 

var band6 = {
    image : "../images/interests/confidence.jpg",
    name : "With Confidence",
    genre : "Pop Punk",
    origin : "Sydney, Australia"
} 

var band7 = {
    image : "../images/interests/alexandria.jpg",
    name : "Asking Alexandria",
    genre : "Metalcore",
    origin : "Dubai, United Arab Emirates"
} 

var band8 = {
    image : "../images/interests/icenine.jpg",
    name : "Ice Nine Kills",
    genre : "Alt-Metal",
    origin : "Boston, Massachusetts"
} 

var band9 = {
    image : "../images/interests/yourstruly.jpg",
    name : "Yours Truly",
    genre : "Pop Punk",
    origin : "Sydney, Australia"
} 

var band10 = {
    image : "../images/interests/alltime.jpg",
    name : "All Time Low",
    genre : "Pop Punk",
    origin : "Towson, Maryland"
} 

var bands = [band1, band2, band3, band4, band5, band6, band7, band8, band9, band10];

function printBands(band){
    document.write('<div class="card"><center><img class="card-img-top" src="' + band.image + '" style="height: 250px; width: 250px;"  alt="Band Photo"></>');
    document.write('<div class="card-body"><h4 class="card-title">' + band.name + ' </h4><p class="card-text"> Genre: ' + band.genre + ' <br> Origin: ' + band.origin);
    document.write(' </p></div></div>');
}

var tv1 = {
    thumbnail : "../images/interests/friends.jpg",
    name : "Friends",
    genre: "Sitcom"
}
var tv2 = {
    thumbnail : "../images/interests/limitless.jpg",
    name : "Limitless",
    genre: "Book-Adaptation"
}
var tv3 = {
    thumbnail : "../images/interests/darkmatter.jpg",
    name : "Dark Matter",
    genre: "Book-Adaptation"
}
var tv4 = {
    thumbnail : "../images/interests/gameofthrones.jpg",
    name : "Game of Thrones",
    genre: "Book-Adaptation"
}

var tv5 = {
    thumbnail : "../images/interests/theboys.jpg",
    name : "The Boys",
    genre: "Book-Adaptation"
}

var tv6 = {
    thumbnail : "../images/interests/brooklyn99.jpg",
    name : "Brooklyn 99",
    genre: "Sitcom"
}

var tv7 = {
    thumbnail : "../images/interests/peakyblinders.jpg",
    name : "Peaky Blinders",
    genre: "Historical Fiction"
}

var tv8 = {
    thumbnail : "../images/interests/newgirl.jpg",
    name : "New Girl",
    genre: "Sitcom"
}

function printShows(show){
    document.write('<div class="card"><center><img class="card-img-top" src="' + show.thumbnail + '" style="height: 250px; width: 150px;"  alt="Show Thumbnail"></>');
    document.write('<div class="card-body"><h4 class="card-title">' + show.name + ' </h4><p class="card-text"> Genre: ' + show.genre);
    document.write(' </p></div></div>');
}

var shows = [tv1, tv2, tv3, tv4, tv5, tv6, tv7, tv8];


var playlists = [
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3tDMRQjy12exzD7B1588SS?utm_source=generator&theme=0" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1GQZOUyGGRMlDLXuz8liav?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6dwHhOezOGnQAyGsNVC8Ip?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3fKxXsUiPiq1WjQ3ZKz8ef?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4EYiYBn3GEydNleWeRTIrB?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0Z534hFdd73MWCogtzveHi?utm_source=generator&theme=0" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4Mibm9JqvMqHtcbGxJ7Avy?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2UQIEeYsTuja3wfimZYUQx?utm_source=generator&theme=0" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/23wKNtuvHy21jXsyyxDfDe?utm_source=generator&theme=0" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1jyqKj73OEu6UvmVhLLU9C?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/74yiwpKhkdRawsSTVfCpEv?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1yOh24gprNouiZBkXELN2G?utm_source=generator&theme=0" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5EWpdmWKRVdwcnGqJerJlW?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4bsw5xvhWuzjQClQHlpkYb?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5qRwAVkh2i5FGaESGL2gZM?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7xmY7nt46IJv68BqMY63L5?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2MTvijaRapGFUo2mkAZ6Ll?utm_source=generator&theme=0" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1kma6WyibdImcLmnwGdGmH?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3FxH6tWN0ryOr3g3eQqG3r?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4tgNqSW8YAje16JXSbWLKy?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6KhgfPZ92fhNoDcql1IQu6?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'   
];

function printPlaylists(){
    for (let i = 0; i<playlists.length; i++){
        document.write(playlists[i]);
    }
}