const instaTouch = require('instatouch');

// Scrape 100 video posts from the hashtag feed
(async () => {
    try {
        const options = { count: 2, mediaType: 'image' };
        const hashtag = await instaTouch.hashtag('cocacola', options);
        console.log(hashtag);

        // the hashtag object has a 'collector' property (array), that contains the posts
    } catch (error) {
        console.log(error);
    }
})();