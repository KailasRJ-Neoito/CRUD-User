module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
      User_Name: {
        type: Sequelize.STRING
      },
      User_Age: {
        type: Sequelize.STRING
      },
      User_Place: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Users;
  };