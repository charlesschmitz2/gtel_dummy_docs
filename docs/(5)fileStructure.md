---
id: files
title: File Structure
sidebar_label: File Structure
---

This section looks at the file structure so we can have an idea of how the project is structured and goes through some of the important files.

## File Structure
```markdown
📦backend
 ┣ 📂node_modules
 ┣ 📂public
 ┃ ┣ 📂img
 ┃ ┃ ┗ 📜logo1.png
 ┃ ┣ 📂lib
 ┃ ┃ ┣ 📂locales
 ┃ ┃ ┣ 📜locales-all.js
 ┃ ┃ ┣ 📜locales-all.min.js
 ┃ ┃ ┣ 📜main.css
 ┃ ┃ ┣ 📜main.js
 ┃ ┃ ┣ 📜main.min.css
 ┃ ┃ ┗ 📜main.min.js
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜index.html
 ┃ ┣ 📜LICENSE.txt
 ┃ ┗ 📜package-lock.json
 ┣ 📜.dockerignore
 ┣ 📜.DS_Store
 ┣ 📜databasepg.js
 ┣ 📜docker-compose.yml
 ┣ 📜Dockerfile
 ┣ 📜package-lock.json
 ┗ 📜package.json
 ```

 ## node_modules

The `node_modules` folder is used to save all downloaded packeds from NPM to the project. It is always recommended to run `npm install` on the inital download of this project to ensure a fresh install of all necessary dependencies. NodeJS will need all these external modules in order to run properly. When pushing to Github this module folder is ignored becuase the package.json/package-lock.json will allow a new user install all the correct dependent modules from their original source. To avoid any unecessary duplications it is always best to reinstall the dependent modules rather than copying or transfering your own folder over. 

 ## public

 The `public` folder acts as our source for all frontend operations. In order for the project to operate properly this and this folder contents must remain where they are with the same naming scheme. 

 ## lib 

 The lib folder contains any important library files used by the system. It is more simply put shorthand for the common files, utility classes, and imported dependencies. The only important file for most our use case within this folder is the `main.css` file.

 ### main.css

 The main.css file contains all of the FullCalendar CSS. Much is already written in by defualt, however any and all parts can be overwritten to suit you needs. As this is a massive file, the one thing I can recommend is that the best method to address changes is to run the program in chrome. Next, inspect the elements to determine which class they fall within. From their, it is much easier to search the css file for the correct class. The majority of the additional css components added by the fall 2021 capping group are located at the bottom. 

 ## index.html

 The index file is where the majority of our functions for the calendar exist.

 * ```javascript 
   function draw(data){...}
   ```

    * `var calendar = new FullCalendar.Calendar(calendarEl, {...}}` is the function used to generate any thing extra such as `customButtons:` or search`search:`. These are supported by FullCalendar and are documented there for more specifics.

    * `headerToolbar:` this is where you customize the entire header toolbar. All available options are listed in FullCalendars documentation.

    * `eventClick: function(){...}` is the function that is used when an event is clicked on. By default it is a basic javascript alert, however we have adapte it to bring generate a popup that is filled with the database extended prop items for each event. There are also so icons used here which are described in the key. Not every popup contains icons due to the information in the database provided not containing this type of data for each past customer.

    * `eventcontent:` is the function that is used to dynamically set event content later on. We use it primarily here to load in custom styled events with differnt icons depending on the service provided. These correspond to the icons in the key.

    * `initialDate:` is the date you are take to upon each refresh or initial load of the application.

    * `events:` is given the data passed in, this is the function responsible for loading all events into the calendar upon launch.

    * `datesSet: function(){...}` is the function we used to dynamically set the dates for the checkbox that toggles weekends.

    * `calendar.render();` is the function that is called to render the entire calendar. Without it, the calendar will not show. The code behind this is not all that important for our use but refers to the `main.js` file in the `lib` folder if desired.


* ```javascript
    async function getData(){
        const res1 = await fetch('/api2');
        drillData = await res1.json();
        finalDrillDown = JSON.parse(drillData);
        iconPopUp = finalDrillDown.map(obj=>{
        return{
            orderNum: obj.order_num,
            agreeNum: obj.AgreementNumber,
            catalogID: obj.CatalogId,
            completeDate: obj.complete_by_date,
            agreeDesc: obj.agreement_desc
        }
        });
        //this code is for setting up the actual events to appear on the calendar
        const response = await fetch('/api');
        data = await response.json();

        finalData = JSON.parse(data);
        // below both maps and passes the event data into the calendar to be displayed
        // basically it takesa the JSON data returned from the query and assigns every row
        // to be a new event and the specific data it needs to make a minimum event is a title and start date
        // the data in the database is not specific enough to have both a start and end so we only do start for simplicity
        draw(finalData.map(obj=>{
            return{
            title: obj.service_address,
            start: obj.complete_by_date,
            id: obj.order_num,
            img: "",
            extendedProps: {
                installType: obj.agreement_desc,
                customerName: obj.customer_name,
                serviceDescription: obj.service_order_desc,
                agreement_desc: obj.agreement_desc
            }
        }
        }));

    }
  ```
  
  The getData() function is resposible for getting the data from the backend api and mapping it to the fullCalendar events. The events can take in many differnt types of categories so refer to there site documentation to learn more about the accepted fields. Here we are assigning the addresses as the event `title`, followed by the complete by date as the `start` for the event. The `id` event category is assigned the order number ID's. The `img` event category  is set here and filled in later dynamically during the `eventContent:` field from our `draw(data)` function. The `extendedProps` eventCategory allows us to set custom event categories which can then later on be manipulated. We used this field primarily for the popup information.

These are some of the important functions within the `index.hmtl` file, however it does not cover all of them. Comments within the code explain more. FullCalendar is a massive opensource project so there are many supported features. We only take advantage of a few of them here, using a relatively stripped down version in order to customize it better to the needs of Gtel.

 ## database.pg
 This file acts as the backend for the application. It acts as the api that grabs data from the postgreSQL database and communicates it to the frontend. The Quey code allows for connection to the postgresql database, using the np node package. This package allows for easy node integration with the database to both read and write to it. In this case we have only read from it. 

 ## Dockerfile / docker-compose / .dockerignore
 
 A `Dockerfile` is used as the instructions to automatically build a Docker image. It contains all the files that a user could call on the command line to assemble an image. 
 [additonal resources](https://docs.docker.com/engine/reference/builder/)

 A `docker-compose` is a used for defining and running multi-container Docker applications. This uses a YAML file to configure the applications services. This allows us to use a single command to generate all the services from out config.
 [additonal resources](https://docs.docker.com/compose/)

 A `.dockerignore` is the file that allows us to exclude files, similar to a `.gitignore`. It helps to make the build faster by exluding unecessary content that are not needed in the build. `docker build` builds Docker images from the DockerFile and a "context." By context we are refering to the set of files located in the specific path or URL. [additonal resources](https://docs.docker.com/engine/reference/commandline/build/)