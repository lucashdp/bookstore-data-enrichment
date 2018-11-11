# Books Resources

    GET v1/public/books

## Description
Returns a listing of books objects, powered by googleapis.

## Request Parameters

- **search** _(opitional)_ — string

## Example
**Request URI**

    https://bookstore-data-enrichment.herokuapp.com/v1/public/books?search=javascript

**Return**
``` json
[
    {
        "title": "JavaScript",
        "subtitle": "The Definitive Guide",
        "authors": [
            "David Flanagan"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2011-04-25",
        "description": "A revised and updated edition offers comprehensive coverage of ECMAScript 5 (the new JavaScript language standard) and also the new APIs introduced in HTML5, with chapters on functions and classes completely rewritten and updated to match current best practices and a new chapter on language extensions and subsets. Original.",
        "industryIdentifiers": [
            {
                "type": "ISBN_13",
                "identifier": "9780596805524"
            },
            {
                "type": "ISBN_10",
                "identifier": "0596805527"
            }
        ],
        "pageCount": 1078,
        "printType": "BOOK",
        "categories": [
            "Computers"
        ],
        "averageRating": 4.5,
        "ratingsCount": 4,
        "maturityRating": "NOT_MATURE",
        "language": "en",
        "id": "4RChxt67lvwC",
        "link": "https://books.google.com/books/about/JavaScript.html?hl=&id=4RChxt67lvwC",
        "thumbnail": "http://books.google.com/books/content?id=4RChxt67lvwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "images": {}
    },
    {
        "title": "JavaScript: The Good Parts",
        "subtitle": "The Good Parts",
        "authors": [
            "Douglas Crockford"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2008-05-08",
        "description": "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
        "industryIdentifiers": [
            {
                "type": "ISBN_13",
                "identifier": "9780596554873"
            },
            {
                "type": "ISBN_10",
                "identifier": "0596554877"
            }
        ],
        "pageCount": 172,
        "printType": "BOOK",
        "categories": [
            "Computers"
        ],
        "averageRating": 4.5,
        "ratingsCount": 44,
        "maturityRating": "NOT_MATURE",
        "language": "en",
        "id": "PXa2bby0oQ0C",
        "link": "https://market.android.com/details?id=book-PXa2bby0oQ0C",
        "thumbnail": "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "images": {}
    }
]
```