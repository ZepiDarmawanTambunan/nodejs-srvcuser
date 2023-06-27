'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'users',
        [
          {
            name: 'zepidarmawan',
            profession: 'Admin Micro',
            role: 'admin',
            email: 'zefidarmawan@gmail.com',
            password: await bcrypt.hash('jambi1234', 10),
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'adit',
            profession: 'Student Micro',
            role: 'student',
            email: 'adit@gmail.com',
            password: await bcrypt.hash('jambi1234', 10),
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkDelete('users', null, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
