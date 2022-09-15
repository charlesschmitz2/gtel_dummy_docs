---
id: deployment
title: How to Deploy
sidebar_label: Deploy / Install 
---

# DashOps Deployment!

**If Just installing for Deployment**
1. Make sure to follow the NodeJS, Postgres and Docker Steps below

2. Install the Docker image of the latest version of DashOps and run it!

**Server Deployment Instructions**
- These steps are are based around deploying to a server instance running in the Marist ECRL.
In this case the OS DashOps is being deployed to is a server running Ubuntu server 20.04LTS,
this deployment will be using NodeJS, npm, express, Postgres, and Docker.
1. Install NodeJS

> ``` sudo apt install node ```

2. Install npm

> ``` sudo apt install npm ```

**Install Postgres**
1. Run this command to install postgres

> ``` sudo apt install postgres ```

2. If this is your first time installing postgres on a ubuntu follow Ubuntu [Here](https://ubuntu.com/server/docs/databases-postgresql) and Postgres' [Here](https://www.postgresql.org/download/linux/ubuntu/) documentation on installing postgres on the server

*tip if doing this install remotely over SSH and need to install a database backup use scp to transfer your backup file*

3. Follow these commands to setup a new database from the backup


**Docker Install**
1. Setup Docker repos and install docker engine and CLI [Click Here](https://docs.docker.com/engine/install/ubuntu/)

*Once that is complete, for other useful information about docker usage follow the post-install instructions for docker[Click Here](https://docs.docker.com/engine/install/linux-postinstall/)*



# Installing and Running DashOps(Development Purposes)

**Git Setup**
1. If git is not already installed run the following command:

> ``` sudo apt install git ```


2. Setup git credentials using your prefered method

**Code Base**

1. Download or clone a copy of DashOps From ``` https://github.com/SeamusDoyle/DashOps.git  ```

2. Install the DashOps folder into the main directory of the user account where postgres is installed

**Running with docker**

Running DashOps in DOcker on the ECRL requires a few edits to be made in the postgres configuration.

1. Change the *pg_hba.conf* to accept connections from 172.17.0.0/16

> ``` sudo vim /etc/postgresql/*versionsOfPostgres*/main/pg_hba.conf ```

> ``` host      all     all        172.17.0.0/16           md5 ```

The above allows for connections from the Docker ip address range

2. In the postgresql.conf make sure to allow connections from all hosts

> ``` listen_addresses = '*' ```

3. Assuming you did not install an existing image, it is time to build a docker image and run it

4. To build an image navigate to the project folder where the Dockerfile is visible

> ``` /DashOps/backend/ ```

5. Run the following command to build the container

> ``` docker build -t dashops:*versionsNumber* . ```

6. Once the image builds run it with

> ``` docker run --add-host=host.docker.internal:host-gateway -p 5000:3000 dashops:*versionNum* ```

*Depending on the permissions setup on your local matching the above commands may need ``` sudo ``` prefix
