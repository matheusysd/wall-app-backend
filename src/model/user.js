const user = (sequelize, DataTypes) => {
  const User = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.STRING,
    },
  });

  return User;
};

module.exports = user;
