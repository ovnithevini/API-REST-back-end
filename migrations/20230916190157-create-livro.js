'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up(queryInterface, Sequelize) {
await queryInterface.createTable('Livros', {
id: {
allowNull: false,
autoIncrement: true,
primaryKey: true,
type: Sequelize.INTEGER
},
fk_editora: {
type: Sequelize.INTEGER,
allowNull: false,
references: { model: 'editoras', key: 'id'},
onDelete: 'CASCADE'
},
fk_categoria: {
type: Sequelize.INTEGER,
allowNull: false,
references: { model: 'categoria', key: 'id'},
onDelete: 'CASCADE'
},
fk_autor: {
type: Sequelize.INTEGER,
allowNull: false,
references: { model: 'autors', key: 'id'},
onDelete: 'CASCADE'
},
titulo: {
type: Sequelize.STRING
},
createdAt: {
allowNull: false,
type: Sequelize.DATE
},
updatedAt: {
allowNull: false,
type: Sequelize.DATE
}
});
},
async down(queryInterface, Sequelize) {
await queryInterface.dropTable('Livros');
}
};