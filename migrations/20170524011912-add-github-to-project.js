'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn( 'Projects', 'github', Sequelize.STRING );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn( 'Projects', 'github' );
  }
};
