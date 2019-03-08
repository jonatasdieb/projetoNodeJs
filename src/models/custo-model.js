module.exports = (sequelize, DataTypes) =>{    
    const Custo = sequelize.define('Custo', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        Descricao: {
            type: DataTypes.STRING, 
            validate: {
                len: {
                    args: [1, 500],
                    msg: "O campo descrição é obrigatório e deve conter no máximo 500 caracteres."
                }
            }
        },
        
        Valor: {
            type: DataTypes.DECIMAL,
            validate: {
                notEmpty:{
                    msg: "O campo valor é obrigatório."
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
        },
        FuncionarioId: {
            type: DataTypes.INTEGER,            
            validate: {
                notEmpty: {
                    args: [true],
                    msg: "Selecione um funcionário para continuar."
                }
            }
        }

    },
    {
        timestamps: false,        
        tableName: 'Custos',
    }
    );
   
    Custo.associate = function(models){
        Custo.belongsTo(models.Funcionario);
        Custo.belongsTo(models.Departamento)
    }       
    return Custo;
}

