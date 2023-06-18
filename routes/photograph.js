var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let photograph = await req.db.any(`
        SELECT
            *
        FROM
            photograph
    `)
    console.log(photograph)
    res.render('photograph/list', { title: 'Фотографы', photograph: photograph })

});

router.post('/create', async function(req, res, next) {

    let phg = req.body

    await req.db.none('INSERT INTO photograph(label, phone) VALUES( ${label}, ${phone})', phg);

    res.send({msg: ''})

});


router.delete('/delete', async function(req, res, next) {

    let phg = req.body
    await req.db.none('DELETE FROM photograph WHERE id = ${id}', phg);
    res.send({msg: ''})
});

router.put('/update', async function(req, res, next) {

    let phg = req.body

    await req.db.none('UPDATE photograph SET label = ${label}, phone = ${phone} WHERE id = ${id}', phg);

    res.send({msg: ''})

});
module.exports = router;
