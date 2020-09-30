module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
      First_Name: {
        type: Sequelize.STRING
      },
      Last_Name: {
        type: Sequelize.STRING
      },
      User_Adress: {
        type: Sequelize.STRING
      },
      Phone_Number: {
        type: Sequelize.STRING
      }
    });
  
    return Users;
  };