# ![Logo](https://github.com/rmiyazaki6499/little-foot-trails/blob/master/src/images/LogoComp.png "Little Foot Trails") 

Welcome to Little Foot Trails an app to help parents and caregivers get outside more with their kids. Because parenting is an adventure.

## Table of Contents

- [Motivations](#motivations)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Running the development server](#running-the-development-server)
- [Setup Manually](#setup-manually)
- [Features](#features)
- [Contact](#contact)

## Motivations

As a group with two mothers who enjoy being active with their families we wanted to create something that would help kids and families be more active.

- Each member learning learning an Framework of interest
  - React
    - Functional Components
    - Hooks
    - Context API
  - Django
    - Django Rest Framework

## Screenshots

<p align="center">Home Page</p>

![Home Page](https://github.com/rmiyazaki6499/little-foot-trails/blob/master/src/images/homepage.png "Home Page")

<p align="center">Results Page</p>

![Results Page](https://github.com/rmiyazaki6499/little-foot-trails/blob/master/src/images/results.png "results")

<p align="center">Detail Page</p>

![Detail Page](https://github.com/rmiyazaki6499/little-foot-trails/blob/master/src/images/details_feature.png "Details Feature")

<p align="center">Map</p>

![Detail Page](https://github.com/rmiyazaki6499/little-foot-trails/blob/master/src/images/map_feature.png "Map")

## Technologies

### Architecture

![Architecture](https://github.com/rmiyazaki6499/little-foot-trails/blob/master/src/images/architecture.png "Architecture")

### Tech Stack
![Tech Stack](https://github.com/rmiyazaki6499/little-foot-trails/blob/master/src/images/tech_stack.png "Tech Stack")

### Models 
![Models](https://github.com/rmiyazaki6499/little-foot-trails/blob/master/src/images/models.png "Models")

## Running the development server

For those that are interested in running the development server, we have containerized the project with Docker for convenience.

### Install Docker

To make this as easy as possible, we will be using *Docker Compose* to creat our container.

- If you do not have Docker yet, start by downloading it if you are on a Mac or Windows:
https://www.docker.com/products/docker-desktop

- Or if you are on a Linux Distribution follow the directions here:
https://docs.docker.com/compose/install/

- To confirm you have Docker Compose, open up your terminal and run the command below:

```
$ docker-compose --version
docker-compose version 1.26.2, build eefe0d31
```

### Build and Run the Container

- Clone the repo to your local machine:

```
$ git clone https://github.com/rmiyazaki6499/little-foot-trails.git
```

- Go into the project directory to build and run the container with:

```
$ cd little-foot-trails/
$ docker-compose up -d --build
```

Navigate to http://localhost:8000 to view the site on the local server.


- You can access your container with the command:

```
$ docker exec -it little-foot-trails_little-foot-trails_1 bash
```

This will take you into the bash session within the container.

### Cleaning up the Container and Image

To stop the container from running, use `<Ctrl-C>` twice.
To close down the container use the command:

```
$ docker-compose down
```
Then to clean up the container and image which we are no longer using use the command:

```
$ docker system prune -fa
```

Confirm that the container and image is no longer there with:

```
$ docker system df -v
```

## Setup Manually

Running the Django Server
```
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
python3 manage.py runserver
```

Running the React Server
```
npm install
npm start
```

### Building

Build script will create a `build` directory with a compiled JavaScript code which will be compatible with most modern browsers. We are using `create-react-app` as a starting point in our app.

```
npm run build
```


## Code Examples

All components are functional and written in Javascript:
We used Context API to 'fetch' global variables 

```javascript
export const Results = () => {
  const [trails, setTrails] = useState([]);
  const {
    tags: [trailTags]
  } = useContext(Context);

  function makeQuery(array, param) {
    let jsonObject = Object.assign({}, array);
    var queryString = Object.keys(jsonObject)
      .map(key => param + "=" + jsonObject[key])
      .join("&");
    return queryString;
  }

  useEffect(() => {
    async function fetchTrails() {
      let query = makeQuery(trailTags, "tags");
      const results = await fetch("http://localhost:8000/api/trails/?" + query);
      const trails = await results.json();
      setTrails(trails);
    }
    fetchTrails();
  }, [trailTags]);
```

## Features

- Our Search bar allows you to filter Trails by Family friendly Amenities 
- Users are authenticated using JWT Tokens 
- Authenticated users are able to leave a Review on a Trail 
- Detailed Trail data persists throughout browser sessions using localStorage
- Each Trail has a interactive Map provided by Google Maps API

Development
- Implementation of Swagger API for clean API documentation

Considerations for improvement: 

- Have authenticated users be able to edit and delete their own Reviews 
- Update styling for the Search bar 
- Creating a User profile 

## Landing Page and Deployment

Landing page: [here](https://little-foot-trails.herokuapp.com/#features)

Project is deployed on Heroku!

[Little Foot Trails](https://little-foot-trails.herokuapp.com)


## Contact

Created by:

- [Banu Sapakova](https://github.com/banuaksom)
- [Jessica Bathel](https://github.com/jbathel)
- [Ryuichi Miyazaki](https://github.com/rmiyazaki6499)
