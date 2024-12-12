#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const fs= require('fs');
const path = require("path");
const createProjectStructure = require("./setup.js");

program
  .command('init [directory]') // defining the 'init' command
  .option("-t,--type <type>", "Type of project to initialize")
  .action((directory = "rest-api", cmdObj) => {
    const projectDirectory = path.resolve(directory);
    if(!fs.existsSync(projectDirectory)) {
      console.log(
        `Directory ${projectDirectory} does not exist. Creating it...`
      );
      fs.mkdirSync(projectDirectory, { recursive: true });
    }

    console.log(`Setting up project in ${projectDirectory}`);
    console.log(`Project type: ${cmdObj.type}`);
    createProjectStructure(projectDirectory);
  });


program.parse(process.argv);

