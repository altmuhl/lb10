$(document).ready(function(){

    $('#create_order').click(function(e){

        $('#create_order_popup').show()

    })

    $('#create_order_popup_close').click(function(e){

        $('#create_order_popup').hide()

    })

    $('#cancel_create_order').click(function(e){

        $('#create_order_popup').hide()

    })

    $('#submit_create_order').click(function(e){

        e.preventDefault()
        let data = {
            id_status: $('#inpOrder_statuses').val(),
            id_client: $('#inpClient').val(),
            id_phs: $('#inpPhs').val(),
            amount: $('#inpAmount').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/orders/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Заказ создан')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })


    $('#delete_order').click(function(e){
        $('#delete_order_popup').show()
    })

    $('#delete_order_popup_close').click(function(e){
        $('#delete_order_popup').hide()
    })

    $('#cancel_delete_order').click(function(e){
        $('#delete_order_popup').hide()
    })

    $('#submit_delete_order').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/orders/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Заказ удален')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#update_order').click(function(e){
        $('#update_order_popup').show()
    })

    $('#update_order_popup_close').click(function(e){
        $('#update_order_popup').hide()
    })

    $('#cancel_update_order').click(function(e){
        $('#update_order_popup').hide()
    })

    $('#submit_update_order').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpDelId').val(),
            id_status: $('#inpDelstatus').val(),
            id_client: $('#inpDelClient').val(),
            id_phs: $('#inpDelPhs').val(),
            amount: $('#inpDelAmount').val()
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/orders/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные заказа изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })
});
