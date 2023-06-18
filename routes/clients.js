var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let clients = await req.db.any(`
        SELECT
            *
        FROM
            clients
    `)
    console.log(clients)
    res.render('clients/list', { title: 'Клиенты', clients: clients })

});

router.post('/create', async function(req, res, next) {

    let client = req.body

    await req.db.none('INSERT INTO clients(label, phone) VALUES( ${label}, ${phone})', client);

    res.send({msg: ''})

});

router.delete('/delete', async function(req, res, next) {

    let client = req.body
    await req.db.none('DELETE FROM clients WHERE id = ${id}', client);
    res.send({msg: ''})
});

router.put('/update', async function(req, res, next) {

    let client = req.body

    await req.db.none('UPDATE clients SET label = ${label}, phone = ${phone} WHERE id = ${id}', client);

    res.send({msg: ''})

});
module.exports = router;
