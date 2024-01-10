module.exports = (sequelize, DataTypes) => {
    const alias = "Usuario";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
        },
        apellido: {
            type: DataTypes.INTEGER,
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
        },
        paisNacimiento: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        admin: {
            type: DataTypes.TINYINT,
        },
        img: {
            type: DataTypes.STRING,
        }
    }

    const config = {
        tableName : "usuarios",
        timestamps: false
    };

    const usuarios = sequelize.define(alias, cols, config);

    /* usuarios.associate = function(models){
        usuarios.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "id_productos"
        })
    } */

    return usuarios;
}