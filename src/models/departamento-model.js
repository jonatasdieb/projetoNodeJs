
module.exports = (sequelize, DataTypes) => {
    const Departamento = sequelize.define('Departamento', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,            
        },
        Nome: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [1, 100],
                    msg: "O nome do departamento é obrigatório e deve conter no máximo 100 caracteres."
                }
            }
        }

    }, {
            timestamps: false,
            tableName: 'Departamentos',
        });

    Departamento.associate = function (models) {
        Departamento.hasMany(models.Funcionario);
    }
    return Departamento;
}

