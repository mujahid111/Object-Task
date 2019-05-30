// Task 1
var recipes = { title: "Panir Tika", serves: "3", intgrediants: ["panir", "Butter", "Ginger", "Cumin", "Cocoa"] };

console.log(recipes.title, recipes.serves, recipes.intgrediants);




//Task 2

var Books = new Array();
Books[0] = { title: "The Hobbit", author: "J.R.R. Tolkien", alredyRead: true };
Books[1] = { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alredyRead: false };

console.log(Books[0].title, 'by', Books[0].author);
console.log(Books[1].title, 'by', Books[1].author);

for (var i = 0; i < Books.length; i++) {
    if (Books[i].alredyRead === true) {
        console.log('\nYou alredy Read ', '"',Books[i].title ,'"' , ' by', Books[i].author);
    }
    else {
        console.log('You still need to Read ', '"',Books[i].title ,'"' , ' by', Books[i].author);
    }
}


// Task 3

var students = {name:"name", class:"sclass", rollNo : "rollno"};

console.log('\n',Object.keys(students));