# Search Instagram posts by hashtags - Using Node.js, instatouch & Express
search Instagram posts through hashtags using the Graph API

## start
$ yarn install
$ yarn start


## Endpoint
http://localhost:[PORT]/posts/:hashtag

## NOTE
In the index.js you can change the number of posts. In this code it returns 10 posts (videos and images), but you can set only images.

``const options = { count: 10/*, mediaType: 'image'*/ };``
----------

## Tutorial & Examples
https://github.com/drawrowfly/instagram-scraper#demo