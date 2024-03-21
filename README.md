>[!NOTE]
>For this interview, you will need to complete the AlbumDetail.js file completely, and the return rendering of the App.js file.


# Front End Web Development Interview 2

We have a site to display albums from our jsonplaceholder website.
For this challenge, we're going to display the images from albums using the JSONPlaceholder API. You should be familiar with this API from past exercises.


## Success Criteria

Functionality:

- Albums load from https://jsonplaceholder.typicode.com/albums and are displayed on the page.
- The page displays the title property from the album
- When an album's title is clicked, the album's photos are fetched from https://jsonplaceholder.typicode.com/albums/${albumId}/photos.
- The page displays the title, and the thumbnails of up to 10 of the photos for an album on the page after the album is clicked


## Specific Instructions and helpful tips

- The albums have already been fetched in App.js. Write the code to display the albums in App.js and the album details go in AlbumDetail.js.
- Albums have this structure:
```
{
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  },
```
- The album should display the title
- Each album should display the photo titles
- A photo has the following structure:
```
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  }
  ```
- Each album should display up to 10 photos but not more
- An album's photos should only show after the album's title is clicked.
- The alt attribute for each photo's <img> tag should be set to the photo's title.
- All information can be displayed on the same page