# Beckn in a box

## What is BeckN in a box?

Beckn-In-a-Box (BIAB) is a modular integration framework that allows any network participant to become beckn-enabled quickly by building simple plug and play modules.

A traditional approach to developing beckn-enabled applications involves the participant to study and understand the specifications, define the scope and use cases based on business workflows, implement the protocol APIs and client APIs, and then register on a network. However, this is a process that is time and effort-intensive.

To ease the process of developing beckn-enabled applications, Beckn-in-a-box provides a set of modules which can be easily integrated with the participant's applications. The participants will be able to configure the modules they require based on network role, domain, use cases, etc. and receive an output in the form of open-source code, SDKs or a complete deployable application.


## Table of content:

- [BeckN in a box](#beckn-bpp-boilerplate-ui--backend-sdk)
  - [What is BeckN in a box?](#what-is-beckn-bpp-boilerplate-ui--beckend-sdk)
  - [Table of content:](#table-of-content)
    - [Demo](#demo)
    - [Pre-requisites](#pre-requisites)
    - [Project Setup](#project-setup)
      - [Using Docker](#using-docker)
      - [Local Setup](#local-setup)
    - [Folder Structure](#folder-structure)
    - [Project Architecture](#project-architecture)
      - [Tech Stack](#tech-stack)

### Demo

[Video Link](https://drive.google.com/drive/folders/1pjkO8VNlOzch8bzNbIiLzZ28a1ovkPuC?usp=sharing)

<a id="pre-requisites"></a>

### Pre-requisites

<table>
  <tr>
    <td>NodeJS</td>
    <td>>=16</td>
  </tr>
  <tr>
    <td>Redis</td>
    <td> <span/> </td>
  </tr>
  <tr>
    <td>MongoDB</td>
    <td> <span/> </td> 
  </tr>
</table>

<a id="project-setup"></a>

### Project Setup

- Clone the repository by.
  ```bash
  git clone <repo-link>
  git checkout -b dev
  git pull origin dev
  ```

#### Using Docker

**STEP 1: Run your docker containers**

- Simply run docker compose by running `docker-compose up`.


**STEP 2: Accessing the ports**

- For the **Beckn in a box Frontend**

```bash
http://localhost:3002/
```
- For the **Beckn in a box Backend**

```bash
http://localhost:3001/
```

#### Local Setup

1. **Clone the repo**

    ```bash
    git clone https://github.com/premsaivarmachekuri/beckn-in-a-box.git
    ```

2. **Go to the project directory**

    ```bash
    cd beckn_in_box
    ```

3. **Go to the Backend directory**

    ```bash
    cd backend
    ```

4. **Install the packages**

    ```bash
    npm i
    ```

5. **Configure the port number (Optional)**

    You can configure the port number by editing the `.env` file if necessary.

6. **Run the backend server first**

    ```bash
    nodemon app.js
    ```

Now you have successfully set up the backend. To set up the frontend, follow the instructions below:

### Frontend Setup

1. **Open another terminal**

2. **Navigate to the frontend directory**

    ```bash
    cd frontend
    ```

3. **Install the required packages**

    ```bash
    npm install
    ```

4. **Start the frontend development server**

    ```bash
    npm start
    ```

#### Accessing the ports

- Then connect to the beakn in a box by visiting `http://localhost:3002`.
- BIAB server is running at `http://localhost:3001`.

<a id="folder-structure"></a>

### Folder Structure

```bash
├── backend/
│   ├── authorization/ # Level 1 integration
│   ├── app/ # express API's
│   └── database/
    └── Dockerfile/ # dockerfilee
├── frontend/
│   ├── App/ #frontend app
│   └── Dockerfile/ # dockerfile
└── package.json
```

<a id="project-architecture"></a>

### Project Architecture

The workflow of the project goes as
![image](https://user-images.githubusercontent.com/110842297/262409623-fec609cc-5c7b-4aab-b360-84c8a95797ed.png)

## Tech Stack

![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
### Join the Community
<div align ="center">
<a  href="https://www.youtube.com/watch?v=gefmygtzZR8" target="_blank"><img alt="YouTube" src="https://img.shields.io/badge/Youtube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white" /></a>
<a  href="https://www.linkedin.com/company/becknprotocol/?originalSubdomain=in" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<!-- <a href="mailto:"><img  alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a> -->
<a  href="https://discord.com/invite/pbayfsrMR9?utm_source=website&utm_medium=BOCCTAButton&utm_campaign=BecknProtocol"><img alt=" Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"></a>
<a  href="https://www.instagram.com/becknprotocol/"><img alt="Instagram" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
</div>
