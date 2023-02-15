# Url Shortener

This is an app server that generates a short URL when a long URL is given and provides a long URL based on the given short URL. This app was built with Express and Mongoose.

## Getting started

1. Clone the repository
```
git clone git@github.com:garizzutto/url-shortener.git
cd url-shortener
```
2. Configuration
    * Run ```npm i``` to install all dependencies
    * Duplicate the ```sample.env``` file and rename it to ```.env```
    * Add values to the variables in this file
      * ```CONNECTION_DB``` is the uri used to connect to your MongoDB cluster
      * ```EXPIRE_TIME``` time in milliseconds where the short url will no longer be usable (e.g., 24 hours = 86400000)
      * ```PORT``` port of the application
3. Run ```npm run start``` to start the server or ```npm run start-dev``` to use with nodemon

## Contributing
Found something strange or not working? Please submit a pull request with your changes!

## Author
Gabriel Rizzutto - [Linkedin](https://www.linkedin.com/in/gabriel-rizzutto/) - [Github](https://github.com/garizzutto/)
