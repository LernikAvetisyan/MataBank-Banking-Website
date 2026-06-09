// Example: migrations/20231010-add-suspended-column.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('users', 'suspended', {
        type: Sequelize.BOOLEAN,
       defaultValue: false,
        allowNull: false
     });
    },
    down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('users', 'suspended');
    }
  };
