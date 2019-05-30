/**
 * Eric Moynihan's simple implementation of CaelumF's script
 *
 * @param {string} str
 * @returns {string}
 */
function expandEnvVars(str) {
  const reg = /\$\{(.+)\}/g;
  return str.replace(reg, (_, match) => {
    if (!!process.env[match]) {
      return process.env[match];
    }
    return "";
  });
}
module.exports = {expandEnvVars};
