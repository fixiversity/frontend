const envvar = require('./getEnv');
const fs = require('fs');

var buf = fs.readFileSync(__dirname+"/../src/environments/keys.ts.template");

fs.writeFileSync(__dirname+"/../src/environments/keys.ts", envvar.expandEnvVars(buf.toString()));

console.log("src/environments/keys.ts has been created");
