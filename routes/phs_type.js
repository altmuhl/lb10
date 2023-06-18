var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let phs_type = await req.db.any(`
        SELECT
            *
        FROM
            phs_type
    `)
    console.log(phs_type)
    res.render('phs_type/list', { title: 'Типы фотосессии', phs_type: phs_type })

});

router.post('/create', async function(req, res, next) {

    let phs_type = req.body

    await req.db.none('INSERT INTO phs_type(label, price) VALUES( ${label}, ${price})', phs_type);

    res.send({msg: ''})

});

router.delete('/delete', async function(req, res, next) {

    let phs_type = req.body
    await req.db.none('DELETE FROM phs_type WHERE id = ${id}', phs_type);
    res.send({msg: ''})
});

router.put('/update', async function(req, res, next) {

    let phs_type = req.body
    await req.db.none('UPDATE phs_type SET label = ${label}, price = ${price} WHERE id = ${id}', phs_type);
    res.send({msg: ''})

});

module.exports = router;
