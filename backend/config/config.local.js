const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '533d139145cf',
    database : 'combotag'
  }
});

knex.normalizeOutput = (inputArray) => {
    let replacedItems = Object.keys(inputArray).map(key => {
        return {[key.toLowerCase()]: inputArray[key] == null ? 0 : inputArray[key]};
    });

    return replacedItems.reduce((a, b) => Object.assign({}, a, b));
};

module.exports = knex;
