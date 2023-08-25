// src/database/seeders/XXXXXXXXXXXXXX-seed-categories-table.js

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { name: 'EPI', position: 1, created_at: new Date(), updated_at: new Date() },
      { name: 'Solda', position: 2, created_at: new Date(), updated_at: new Date() },
      { name: 'Ferramentas', position: 3, created_at: new Date(), updated_at: new Date() },
      { name: 'Fixação', position: 4, created_at: new Date(), updated_at: new Date() },
      { name: 'Sinalização', position: 5, created_at: new Date(), updated_at: new Date() },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  }
};