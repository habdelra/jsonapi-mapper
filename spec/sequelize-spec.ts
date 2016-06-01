'use strict';

const Sequelize = require('sequelize');

const config = {
  "dialect": "sqlite",
  "storage": "./db.development.sqlite"
};
let sequelize = new Sequelize(config.database, config.username, config.password, config);

describe('Sequelize Adapter', () => {
  it('liiiiiiiiiiiiiiives', () => {
      
  });
});
