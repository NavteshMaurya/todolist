# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  In this web app a user can see his todos which he has created.
  user can edit and update his title,description and status also.
  I have used a local server in which I have the tododata.json file which contains the data of todos.(id,title,description).
  In this file, I have a component folder which includes Add Task,Edit task,Task item,Task list components.
  Another folder of pages which container three pages ( Home page, AddTaskPage,EditTaskPage).
  I have used the functionality of react router dom to move to different pages without reloading.
  I have used the concept of Context api for solving problem of prop drilling,In this web app, a separate folder of contexts which contain the logic of updating,adding and deleting the toods from the context.
  I also used the MUI components for building the UI of the app.It is fully responsive app for all the devices.
  
