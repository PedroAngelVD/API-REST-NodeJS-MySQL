const express = require('express');
const router = express.Router();
const mysql = require('../db/db');

router.get('/products', (req, res) => {
    mysql.query('select * from tbl_products', (err, rows, field) => err ? console.log(err) : res.json(rows))
});

router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    mysql.query('select * from tbl_products where id_products = ?', [id], (err, rows, field) => err ? console.log(err) : res.json(rows))
});

router.post('/products', (req, res) => {
    const { name, coste } = req.body;
    mysql.query('insert into tbl_products(name, coste) values(?, ?)', [name, coste], (err, rows, field) => err ? console.log(err) : res.send('Product Added'))
});

router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, coste } = req.body;
    mysql.query('update tbl_products set name = ?, coste = ? where id_products = ?', [name, coste, id], (err, rows, field) => err ? console.log(err) : res.send('Product Updated'))
});

router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    mysql.query('delete from tbl_products where id_products = ?', [id], (err, rows, field) => err ? console.log(err) : res.send('Product Deleted'))
});

module.exports = router;