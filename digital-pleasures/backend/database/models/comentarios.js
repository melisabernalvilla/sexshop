module.exports = (sequelize, DataTypes) => {
    const alias = "comentarios";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
            type: DataTypes.INTEGER,
        },
        id_productos: {
            type: DataTypes.INTEGER,
        },
        comentario: {
            type: DataTypes.TEXT,
        },
        calificacion: {
            type: DataTypes.INTEGER,
        },
        fechacomentario: {
            type: DataTypes.DATE,
        }
    }

    const config = {
        tableName : "comentarios",
        timestamps: false
    };

    const comentarios = sequelize.define(alias, cols, config);



    return comentarios;
}