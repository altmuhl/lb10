var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let orders = await req.db.any(`
        SELECT
            orders.id AS id,
            order_statuses.label AS id_status,
            clients.label AS id_client,
            phs.id AS id_phs,
            orders.amount AS amount
        FROM
            orders
        INNER JOIN
            clients ON clients.id = orders.id_client
        INNER JOIN
            order_statuses ON order_statuses.id = orders.id_status
        INNER JOIN
            phs ON phs.id = orders.id_phs
    `)
    console.log(orders)
     let clients = await req.db.any(`
        SELECT
            *
        FROM
            clients
    `)
    console.log(clients)
    let order_statuses = await req.db.any(`
    SELECT
        *
    FROM
    order_statuses
`)
console.log(order_statuses)
let phs = await req.db.any(`
SELECT
    *
FROM
    phs
`)
console.log(phs)
    res.render('orders/list', { title: 'Заказы', orders: orders, clients: clients, order_statuses:order_statuses, phs:phs })

});

router.post('/create', async function(req, res, next) {

    let order = req.body

    await req.db.none('INSERT INTO orders(id_status, id_client,id_phs , amount) VALUES( ${id_status}, ${id_client}, ${id_phs}, ${amount})', order);

    res.send({msg: ''})

});

router.delete('/delete', async function(req, res, next) {

    let order = req.body
    await req.db.none('DELETE FROM orders WHERE id = ${id}', order);
    res.send({msg: ''})
});

router.put('/update', async function(req, res, next) {

    let order = req.body

    await req.db.none('UPDATE orders SET id_status = ${id_status}, id_client= ${id_client} ,id_phs = ${id_phs} , amount = ${amount} WHERE id = ${id}', order);

    res.send({msg: ''})

});

module.exports = router;
