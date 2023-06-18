var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let location = await req.db.any(`SELECT * FROM location`)
    console.log(location)
    res.render('location/list', { title: 'Локации', location: location })

});

router.post('/create', async function(req, res, next) {

    let location = req.body

    await req.db.none('INSERT INTO location(label) VALUES( ${label})', location);

    res.send({msg: ''})

});


router.delete('/delete', async function(req, res, next) {

    let location = req.body
    await req.db.none('DELETE FROM location WHERE id = ${id}', location);
    res.send({msg: ''})
});


router.put('/update', async function(req, res, next) {

    let location = req.body
    await req.db.none('UPDATE location SET label = ${label} WHERE id = ${id}', location);
    res.send({msg: ''})

});
module.exports = router;
