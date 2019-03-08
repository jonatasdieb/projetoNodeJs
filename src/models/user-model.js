
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,  
    },
    Username:  {
      type:  DataTypes.STRING,     
      validate: {
        is:  {
          args: /^[a-z0-9]{3,16}$/,
          msg: "O nome de usuário deve conter apenas letras e números, e possuir entre 3 e 16 caracteres."
        }                
      }    
        
    },  

    Password: {
      type: DataTypes.STRING,
      validate: {
        len: {
            args: [6, 100],
            msg: "A senha é obrigatória e deve conter no mínimo 6 caracteres."
        }
    }
    }
  },  {
    timestamps: false,        
    tableName: 'Users',
});

  return User;
};