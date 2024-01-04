/*********************************************************FILTER****************************************************************/

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

const values = coding.forEach( (item) => {
    // console.log(item);
    return item;
} )

console.log(values);

// Lets declare an array with some numbers
const myNums = [1,2,3,4,5,6,7,8,9,10]

// Filtering numbers greater than 4 using filter method
const newNums = myNums.filter( (num) => {
    return num > 4
} )

// Filtering numbers greater than 4 using forEach method
const filteredNums = []

myNums.forEach( (num) => {
    if(num > 4) {
        return filteredNums.push(num);
    }
} )

console.log(newNums);
console.log(filteredNums);


let books = [
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publish: 1951,
      edition: "First Edition",
    },
    {
      title: "1984",
      genre: "Dystopian",
      publish: 1949,
      edition: "Vintage Edition",
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Classics",
      publish: 1960,
      edition: "Special Anniversary Edition",
    },
    {
      title: "The Great Gatsby",
      genre: "Classics",
      publish: 1925,
      edition: "Centenary Edition",
    },
    {
      title: "Moby-Dick",
      genre: "Adventure",
      publish: 1851,
      edition: "Collector's Edition",
    },
    {
      title: "Pride and Prejudice",
      genre: "Romance",
      publish: 1813,
      edition: "Revised Edition",
    },
    {
      title: "Brave New World",
      genre: "Dystopian",
      publish: 1932,
      edition: "Modern Classic Edition",
    },
    {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      publish: 1954,
      edition: "Deluxe Edition",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      genre: "Fantasy",
      publish: 1997,
      edition: "20th Anniversary Edition",
    },
    {
      title: "Crime and Punishment",
      genre: "Classics",
      publish: 1866,
      edition: "Critical Edition",
    }
];
  

const userBooks = books.filter( (book) => {
    return book.genre === 'Fantasy' && book.publish >= 1950
} )

const filteredBooks = books.filter( (book) => book.genre === 'Classics' && book.publish >= 1950 )

console.log(userBooks);
console.log(filteredBooks);


/*****************************************************MAP**********************************************************************/


const nums = [1,2,3,4,5,6,7,8,9,10]

const modifiedNums = nums.map( (num) => num + 10 );

const nums2 = nums
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )       
// console.log(modifiedNums);
// console.log(nums2);



/*****************************************************REDUCE*******************************************************************/

const array1 = [1,2,3]

const sumWithInitial = array1.reduce( function (acc, curr) {
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr
}, 0)

console.log(sumWithInitial);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 3999
    },
    {
        itemName: "C# and .NET",
        price: 4999
    },
    {
        itemName: "Angular Course",
        price: 1800
    },
    {
        itemName: "React Course",
        price: 2400
    },
    {
        itemName: "DSA",
        price: 9999
    },
    {
        itemName: "System Design",
        price: 12999
    }
]

const bill = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0 )

console.log(`bill: ${bill}`);



















/***********************NOTES********************************************************
    *   While using filter method, you should take care of the return nature.
        If you are using it in a single line without the use of scope (curly braces),
        then in this case implicit return occurs. 
        But if you're using scope, then you should explicitly use return keyword
    *   In Line no 114, You can see multiple map methods and a filter method being 
        used at once. This is known as Chaining. You can use as many methods as you want.
    *   One real life scenario to use reduce method is, suppose you have many items in 
        your shopping cart and you need to add the prices and calculate the sum. 
        refer to line no 134 for code.
*************************************************************************************/
  