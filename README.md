#Books Application

This is a sample application I designed to learn **nodejs**, **expressjs** and **mongodb** framework.

Also I have added docker configurations so that you dont need to setup all the things after cloning the project just run

```bash
docker build -t [tagname]
```

and then,

`docker run -name bookapp -p 5000:5000 [tagname]`

To stop the cotainer:

`docker stop bookapp`

**Note**
With few of my recent updates to the code the docker build is not working so you can start the application using

`npm start` or `npm serve` as a gulp task.

I will update the docker file to manage both the application and mongodb instance soon.