let library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (let i = 0; i < library.length; i++){
    let book = "'" + library[i].title + "'" +  ' by ' + library[i].author;
    library[i].readingStatus?
        console.log('Alredy read ' + book)
        :console.log("You still nedd to read " + book);

}





