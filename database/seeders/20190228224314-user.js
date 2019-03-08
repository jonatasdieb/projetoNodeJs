const md5 = require('md5');

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      Example:
      return queryInterface.bulkInsert('Users', [{
        Username: 'admin',
        Password: md5('lanlink' + global.SECURE)
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {   
      
      return queryInterface.bulkDelete('Users', null, {});
   
  }
};
