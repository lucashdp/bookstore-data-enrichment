# Books Resources

    GET v1/public/book/:bookId

## Description
Returns the book object, powered by googleapis.

## Request Parameters

- **bookId** _(required)_ — string

## Example
**Request URI**

    https://bookstore-data-enrichment.herokuapp.com/v1/public/book/4RChxt67lvwC

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
    }
]
```