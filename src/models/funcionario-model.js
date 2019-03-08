module.exports = (sequelize, DataTypes) => {
    const Funcionario = sequelize.define('Funcionario', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true         
        },
        Nome: {
            type: DataTypes.STRING, 
            validate: {
                len: {
                    args: [1, 200],
                    msg: "O nome do funcionário é obrigatório e deve conter no máximo 200 caracteres."
                }
            }
        },
        DepartamentoId: {
            type: DataTypes.INTEGER,            
            validate: {
                notEmpty: {
                    args: [true],
                    msg: "Selecione um departamento para continuar."
                }
            }
        }
    },
    {
        timestamps: false,        
        tableName: 'Funcionarios',
    });

    Funcionario.associate = function(models){
        Funcionario.belongsTo(models.Departamento);
    }

    return Funcionario;
}