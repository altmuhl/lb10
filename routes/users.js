var express = require('express');
var router = express.Router();
const md5 = require('md5')

router.get('/', async function(req, res, next) {

    let users = await req.db.any(`
        SELECT
            users.id AS id,
            users.login AS login,
            users.fio AS fio,
            roles.label AS role
        FROM
            users
        INNER JOIN roles ON roles.id = users.id_role
        ORDER BY id
    `)
    console.log(users)

    let roles = await req.db.any(`
        SELECT
            *
        FROM
            roles
    `)
    console.log(roles)

    res.render('users/list', { title: 'Пользователи', users: users, roles: roles })
});


router.post('/create', async function(req, res, next) {

    let users = req.body
    await req.db.none('INSERT INTO users(login, id_role,  fio, pass) VALUES(${login}, ${id_role},  ${fio},  md5(${pass}))', users);
    res.send({msg: ''})
});

router.delete('/delete', async function(req, res, next) {

    let users = req.body
    await req.db.none('DELETE FROM users WHERE id = ${id}', users);
    res.send({msg: ''})
});

router.put('/update', async function(req, res, next) {

    let user = req.body
    await req.db.none('UPDATE users SET login = ${login}, id_role = ${id_role}, fio = ${fio}, pass = md5(${pass}) WHERE id = ${id}', user);
    res.send({msg: ''})

});

//router.get('/', async function(req, res) {

  //  let id = req.params.id

    //let users = await req.db.any(`
      //  SELECT
        //    users.id AS id,
          //  users.login AS login,
            //users.fio AS fio,
        //    roles.label AS role
       // FROM
         //   users
        //INNER JOIN roles ON roles.id = users.id_role
       // ORDER BY id
       // WHERE
       //     users.id = $/id/
   // `, {id: id})
  //  res.render('users/view', { title: 'Пользователь'+ users.label, users: users })
//});

module.exports = router;