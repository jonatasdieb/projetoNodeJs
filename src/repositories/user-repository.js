var models = require('../models')
const user = models.User;

exports.login = async(data) => {    
    const res = await user.findOne({
        where: {
            Username: data.Username,
            Password: data.Password
        }
    });
  
    return res;
}

exports.getByUsername = (data) => {
    return user.findOne({
        where:{
            Username: data
        }
    });   
}

exports.create = (data) => {    
    return user.create(data)
}