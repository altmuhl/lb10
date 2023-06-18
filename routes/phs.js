var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let phs = await req.db.any(`
        SELECT
            phs.id as id,
            phs.date as date,
            phs_type.label as id_type,
            location.label as id_location,
            photograph.label as id_phg

        FROM
            phs
        INNER JOIN
            phs_type ON phs_type.id = phs.id_type
        INNER JOIN
            location on location.id = phs.id_location
        INNER JOIN
            photograph on photograph.id = phs.id_phg
    `)
    console.log(phs)
    let photograph = await req.db.any(`
        SELECT
            *
        FROM
            photograph
        `)
        console.log(photograph)
    
    let location = await req.db.any(`
        SELECT
            *
        FROM
            location
        `)
        console.log(location)
        let phs_type = await req.db.any(`
        SELECT
            *
        FROM
        phs_type
        `)
        console.log(phs_type)
    res.render('phs/list', { title: 'Фотосессии', phs: phs, photograph: photograph, location:location, phs_type:phs_type})

});

router.post('/create', async function(req, res, next) {

    let phs = req.body

    await req.db.none('INSERT INTO phs(date, id_type, id_location, id_phg) VALUES( ${date}, ${id_type}, ${id_location}, ${id_phg})', phs);

    res.send({msg: ''})

});

router.delete('/delete', async function(req, res, next) {

    let phs = req.body
    await req.db.none('DELETE FROM phs WHERE id = ${id}', phs);
    res.send({msg: ''})
});

router.put('/update', async function(req, res, next) {

    let phs = req.body

    await req.db.none('UPDATE phs SET date = ${date}, id_type = ${id_type}, id_location= ${id_location} , id_phg = ${id_phg} WHERE id = ${id}', phs);

    res.send({msg: ''})

});
module.exports = router;
