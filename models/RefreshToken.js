module.exports = (sequelize, DataTypes) => {

    const RefreshToken = sequelize.define('RefreshToken',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          token: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          },
          updatedAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          },
    }, {
        tableName: 'refresh_tokens',
        // timestamps: true, //auto generate craetedAt and updatedAt
    });

    return RefreshToken;
}