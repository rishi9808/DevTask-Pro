# TASKIFY

Our project involves the development of a web-based platform that incorporates a dynamic work allocation algorithm to facilitate efficient task assignment within our software development team. The primary objective is to enhance team productivity by ensuring a balanced and fair distribution of tasks, considering individual team members' skills, availability, and existing workload.

## Team Name
  VR Devs

## Team members
1. Rishikesh k v     https://github.com/rishi9808
2. Vyshnav M K       https://github.com/VyshnavMK
3. Vismaya B         https://github.com/VismayaBalan
4. Razeen Mahroof    https://github.com/razeenmahroof
   

## Technologies used
Mongodb <br />
Nodejs <br />
React <br />
Express

## How it works
  **For Admin:**

1.Admin asks every employee to register with their skills. <br />
2.Admin creates tasks with required skills and time for each task. <br />
3.The high-efficiency algorithm automatically finds the employee with the required skill who has completed the least number of tasks and is available.<br />
4.If no such employee is available, the task is marked as pending and will be assigned to someone when they become available.<br />
5.Admin has access to view:<br />
    Finished tasks<br />
    Working tasks<br />
    Pending tasks<br />
    Employees' current tasks

  username: admin@123
  password: admin
    
  **For Employee Users:<br />**

1.Employees can log in to their accounts.<br />
2.Upon logging in, they can view their assigned tasks, including details such as the task name, required skills, and time constraints.<br />
3.Employees can mark tasks as complete when the work is done.<br />
4.They have the ability to update the task status, which may automatically trigger task reassignment based on availability.<br />

username: vis@123
password: 123

## Deployed Link

https://taskify-vrdev.netlify.app/

## How to configure
1. Clone this repo <br /> 
2. Open terminal on the repo folder and install the dependencies  <br /> 
`npm install`

## How to Run
1. Open terminal on the repo folder and type
`npm run start` <br />
or <br />
`npm run dev` <br />
2. open a browser and go to http://localhost:5000
<br />
