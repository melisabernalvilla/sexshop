
module.exports = (sequelize, DataTypes) => {
    const alias = "Carrito";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
            type: DataTypes.INTEGER
        },
        id_productos: {
            type: DataTypes.INTEGER
        },
        cantidadProductos: {
            type: DataTypes.INTEGER,
        },
        precioTotalArticulo: {
            type: DataTypes.INTEGER,
        },
        precioTotal: {
            type: DataTypes.INTEGER,
        }
    };

    const config = {
        tableName : "carrito",
        timestamps: false
    };

    const carrito = sequelize.define(alias, cols, config);

    /* carrito.associate = function(models){
        carrito.belongsTo(models.Producto,{
            as: "productos",
            foreignKey: "id_productos"
        })
    } */

    return carrito;
}