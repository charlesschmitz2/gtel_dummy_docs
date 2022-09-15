---
id: development
title: Development Evironment
sidebar_label: Setup Development Environment
---

## Background
This application is developed with...

*91%* Javascript

*6%* CSS

*3%* HTML

In the following sections I will go through what the stack for this project looked like. This project aims to create a dashboard of the daily operations of Gtel. Each event title represents a client address accompanied with an icon representing the service provided. We have a database of client information proivded by Gtel which we can then grab and store on the backend. The frontend can then take this data and manipulate it as necessary. Each event is interactable and can show you more information about the event. Our orignal list of requirements were as follows:

* Requirements:
  * Consider collapsing Saturday/Sunday for week only view.
  * Adjust key area and/or make sidebar collapsible to show more calendar.
  * Work on getting task status implemented - star icon should now indicate install completion status.
  * Pop up needs work -
    * Can't close by clicking outside of box.
    * Change out services list for icons (globe, phone, tv, wifi, etc.).
    * Icons can have descriptive elements for speed and other services.
    * Change out drop status for install complete.
  * Add search ability to find and highlight on calendar if found.
  * Add ONT provisioning process here (Check if possible with available data and API).
    * ONT FSAN/Serial field
    * TV type (if applicable)
  * Integrate as Docker container for ease of deployment and updates. 


### FullCalendar

FullCalendar is a javascript library that is modular and lightweight. It is fully open source and easy to configure for our many project needs. There is lots of documentation available on the sites linked below as well as many stack overflow discussions over common issues. This is optimized for React, Vue, Angular, and Typescipt; However, we chose to work with vanilla javascript as our needs were basic. The goal in using this was to avoid the challenges faced by the previous group of implementing the entire calendar manually. FullCalendar acts as our frontend here for the base calendar, all other features are built out of it. Additionally, there are many features that are not used but exist within the library. This is one of the most if not the most popular open source javascript calendars. The following file structure section will go over some points about this library but the best place to learn about the various funtinalities is through the documentation sites below:

https://fullcalendar.io/docs/getting-started

https://fullcalendar.io/docs 

### Download Node.js
Download the latest version of Node.js at:

* [nodejs download](https://nodejs.org/en/download/)

To check that it was sucessfully downloaded and view the current version use:

* ```node -v```

* ```npm -v```

### Download PostgreSQL
Download the latest version of PostgreSQL at:

* [postgreSQL download](https://www.postgresql.org/download/)

You use the pgAdmin for the GUI and SQL Shell (psql) for the CLI. A common issue is when trying to restore a backup of a database if needed is to fix the binary path. A good explanation can be found [here](https://dba.stackexchange.com/questions/149169/binary-path-in-the-pgadmin-preferences). An example of this would be changing the binary path in settings of the pgAdmin to ``` PostgreSQL Binary Path: "C:\Program Files\PostgreSQL\(versionNumber)\bin```

### Download Docker
Download the latest version of Docker at:

* [docker download](https://docs.docker.com/get-docker/) 

* [alternative docker desktop download](https://www.docker.com/products/docker-desktop)

### Clone Repository
In a terminal clone the repository using the command:

```git clone https://github.com/SeamusDoyle/DashOps.git```

### Running Locally Without Docker on NodeJS (Local Running)
1. Once the files are downloaded, navigate to the backend folder,
	once inside that folder run "npm init -y"

2. Then run "npm install express" & "npm install pg"

3. Open databasepg.js in vscode and update the databse information to connnect. The code is located on line 6-12:

    ```javascript
        const client = new Client({
        host: 'host.docker.internal',
        user: 'postgres',
        port: 5432, //default for postgreSQL is 5432
        password: 'database server password',
        database: 'database name'
    })
    ```

4. Once those are installed run "npm start" - it should return listening on port 3000. This can be changed with the code on line 72:

    ```javascript
    const port = process.env.PORT || 3000;
    ```

5. Then open your browser and in the address bar go to "localhost:3000" it shoud open up

### Using Docker (Local Running)
This is the prefered method for running the program and how everything is set up by **default**

1. Install docker for your platform

2. Run the following commands from the *backend* folder

```

docker build -t dashops:(versionNumber) .

```

```
docker run -p 5000:3000 dashops:(versionNumber)

```

***If signed into docker***
```

 docker build -t *username*/dashops:(versionNumber) .

```

```
 
 docker run -p 5000:3000 *username*/dashops:(versionNumber)

```

## Whats Next?

The develoment envronment should be working properly. The following sections will go over the file structure and deploying the product on the server.
