const envvar = require('./envvarTemplate');
const fs = require('fs');

var buf = fs.readFileSync("config/keys.txt");

fs.writeFileSync("src/environments/keys.ts", envvar.expandEnvVars(buf.toString()));

console.log("src/environments/keys.ts has been created");
