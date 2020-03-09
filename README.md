# Bootcamp Twitter Bot

This repo is used by the Bits of Good Bootcamp to build a Twitter bot that demonstrates important concepts related to Node.js, APIs, and database technologies used by Bits of Good project teams.

Learn more about Bits of Good and our Bootcamp at [bitsofgood.org](https://bitsofgood.org)!

## Challenges

For each challenge listed below, there is a corresponding branch that will have the solution to that challenge. Each step builds on the one before it, so make sure that you go one challenge at a time! When you think you have it, go ahead and compare your repository/code to the solution branch and see how you did.

### Workshop 1

1. Initialize this repository as an NPM package

2. Install each of the following packages:
    * `express`
    * `twitter`
    * `body-parser`
    * `dotenv`

3. Get an Express server up and running with an endpoint for `POST` requests to the `/tweets` path

4. Read about [Express middleware](https://expressjs.com/en/guide/using-middleware.html)

5. Using the `express.static` middleware, get Express to use the `public/` folder in this repository so that you can visit the `tweet/index.html` page from your browser by visiting `http://localhost:3000/tweet`
    * *Hint: If a folder has `index.html` inside of it, you can access that file from your browser by the folder name!*

6. Using the `body-parser` NPM documentation as a reference, pick a middleware from the `body-parser` package that will allow you to easily access form data in your handler functions
     * *Hint: Form data is URL-encoded!*

7. Ask Max for the API keys you need to use the Twitter API. Put what he gives you in a new `.env` file in this repository.

8. Read [this Medium article](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa) on what environment variables are and why we use them.

9. Use the `dotenv` NPM docs to figure out how to load in environment variables from the `.env` file in your repo.

10. Use the `twitter` NPM docs to create an `auth` object that contains all the API keys you stored in your environment variables.

11. Write `sendTweet` function. Have it send a tweet using the Twitter API [statuses/update](https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-update) endpoint!

12. Fill in your Express handler for POST requests to `/tweet` so that it...
    * gets the tweet text from the `public/tweets/index.html` form (*Hint: the variable name of the form tweet text is `tweet`*)
    * posts a Tweet with that text
    * only sends the Tweet and returns 200 OK if the tweet is at least 3 characters long

You're done! You've built the Twitter bot.
