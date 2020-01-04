# Go Barber - WEB

<img src="/screenshots/dashboard.png" width="300"> <img src="/screenshots/profile.png" width="300">

## About

This project was developed over the [Rocketseat bootcamp course](https://rocketseat.com.br/bootcamp) and it's part of my portifolio. It's an application that helps customers schedule appointments with service providers.

## Integration

This web app is built with React and communicate with an [NodeJS API](https://github.com/CaioQuirinoMedeiros/go_barber_api). It's exclusively intended to the providers of the application. For customers, there's an [mobile App](https://github.com/CaioQuirinoMedeiros/go_barber_app) built with React Native.

## Try it now

I deployed it here on GitHub, try it out: [gobarber.com](https://caioquirinomedeiros.github.io/go_barber_web/)

- email: `caio2@gmail.com`
- password: `123123123`

## :arrow_down: Installing

**Cloning the repo**

```shell
git clone https://github.com/CaioQuirinoMedeiros/go_barber_web.git

cd go_barber_web
```

**Installing dependencies**

```shell
yarn install
```

## :satellite: Connecting with the server API

1. Follow the instructions on [the API project](https://github.com/CaioQuirinoMedeiros/go_barber_api) to have the server up and running
2. Create a _.env_ file and set a variable `REACT_APP_API_URL` with the value of your server url

- It should looks like this: `CREATE_APP_API_URL=http://127.0.0.1:3333`

## :runner: Running

run in development mode

```shell
yarn start
```
