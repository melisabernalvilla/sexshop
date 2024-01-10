const path = require('path');
const db = require('../../database/models');
const model = require('../models/productModel');

const controller = {
    index: async (req, res) => {
        let isAdmin = false;
        if (req.session.user) {
            isAdmin = req.session.user.admin != 0;
        }
        try {
            const products = await db.Producto.findAll();
            res.render('index', { products, isAdmin });
        } catch (error) {
            console.log(error);
        }
    },

    search: async (req, res) => {
        const searchTerm = req.query.q;
    
        try {
            const results = await db.Producto.findAll({
                where: {
                    titulo: {
                        [db.Sequelize.Op.like]: `%${searchTerm}%`
                    }
                }
            });
    
            res.render('partials/searchResults', { results, searchTerm });
        } catch (error) {
            console.error(error);
            res.status(404).send('error404');
        }
    }
};

module.exports = controller;
