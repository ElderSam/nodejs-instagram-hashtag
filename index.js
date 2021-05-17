const express = require('express')
const app = express()
const port = 3333

const instaTouch = require('instatouch');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posts/:hashtag', async(req, res) => {
    console.log(req.params)
    const hashtag = req.params.hashtag;
    console.log(hashtag)
    const result = await getPostsByHashtag(hashtag);

    res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

async function getPostsByHashtag(hashtag) {
    
    // Scrape 100 video posts from the hashtag feed
    try {
        const options = { count: 10/*, mediaType: 'image'*/ };
        const result = await instaTouch.hashtag(hashtag, options);
        console.log(result);
        return result;
        // the result object has a 'collector' property (array), that contains the posts
    } catch (error) {
        console.log(error);
    }

}