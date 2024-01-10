module.exports = (sequelize, DataTypes) => {
    const alias = "Producto";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo:{
            type: DataTypes.STRING
        },        
        descripcion: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.INTEGER
        },
        stock: {
            type: DataTypes.INTEGER
        },        
        categorias: {
            type: DataTypes.TEXT
        },        
        oferta: {
            type: DataTypes.TINYINT
        },
        img: {
            type: DataTypes.STRING
        },
        fecha: {
            type: DataTypes.DATE
        } 
    };
    
    const config = {
        tableName : "productos",
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config);

    

    return Producto;
}