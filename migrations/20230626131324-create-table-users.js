'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        profession: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        avatar: {
          type: Sequelize.STRING,
          allowNull: true,  
        },
        role: {
          type: Sequelize.ENUM,
          values: ['admin', 'student'],
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      }, {transaction});

      // cara 1
      // email: {
      //   type: Sequelize.STRING,
      //   unique: true,
      //   allowNull: false,
      // },

      // cara 2
      // await queryInterface.addConstraint('users', {
      //   type: 'unique',
      //   fields: ['email'],
      //   name: 'UNIQUE_USERS_EMAIL',
      //   transaction,
      // });

      // cara 2 lebih fleksibel tapi sedikit repot
      // await queryInterface.addConstraint('Books', {
      //   fields: ['title', 'author', 'publication_year'],
      //   type: 'unique',
      //   name: 'UNIQUE_BOOKS_TITLE_AUTHOR_YEAR',
      // });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('users', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
