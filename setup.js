const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

// Function to create the project structure
function createProjectStructure(directory) {
  const filesToCreate = [
    {
      name: "server.js",
      content: fs.readFileSync(path.join(__dirname, "server.js"), "utf8"),
    },
    {
      name: "utils/dbConnect.js",
      content: fs.readFileSync(
        path.join(__dirname, "utils/dbConnect.js"),
        "utf8"
      ),
    },
    {
      name: "models/user.model.js",
      content: fs.readFileSync(
        path.join(__dirname, "models/user.model.js"),
        "utf8"
      ),
    },
    {
      name: "controllers/user.controller.js",
      content: fs.readFileSync(
        path.join(__dirname, "controllers/user.controller.js"),
        "utf8"
      ),
    },
    {
      name: "routes/user.route.js",
      content: fs.readFileSync(
        path.join(__dirname, "routes/user.route.js"),
        "utf8"
      ),
    },
    {
      name: ".env",
      content: `MONGO_URI=mongodb://localhost:27017/crudDB\nPORT=3000`,
    },
  ];

  // Create the necessary files and directories in the target directory
  filesToCreate.forEach((file) => {
    const filePath = path.join(directory, file.name);
    const dirPath = path.dirname(filePath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, file.content);
    console.log(`Created ${file.name} in ${directory}`);
  });

  // creating package.json if it doesn't exist
  const packageJsonPath = path.join(directory, "package.json");
  if (!fs.existsSync(packageJsonPath)) {
    const packageJson = {
      name: "crudAPI-project",
      version: "1.0.0",
      description: "A basic CRUD setup with MongoDB and Express",
      main: "server.js",
      scripts: {
        start: "node server.js",
      },
      dependencies: {
        express: "^4.17.1",
        mongoose: "^5.10.9",
        dotenv: "^8.2.0",
      },
    };
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log("Created package.json");
  }

  // run npm install to install dependencies
  exec("npm install", { cwd: directory }, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error during installation: ${stderr}`);
    } else {
      console.log(stdout);
    }
  });
}

module.exports = createProjectStructure;
