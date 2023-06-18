$(document).ready(function(){

    $('#create_client').click(function(e){

        $('#create_client_popup').show()

    })

    $('#create_client_popup_close').click(function(e){

        $('#create_client_popup').hide()

    })

    $('#cancel_create_client').click(function(e){

        $('#create_client_popup').hide()

    })

    $('#submit_create_client').click(function(e){

        e.preventDefault()
        let data = {
            label: $('#inLabel').val(),
            phone: $('#inPhone').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/clients/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Клиент добавлен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $('#delete_client').click(function(e){
        $('#delete_client_popup').show()
    })

    $('#delete_client_popup_close').click(function(e){
        $('#delete_client_popup').hide()
    })

    $('#cancel_delete_client').click(function(e){
        $('#delete_client_popup').hide()
    })

    $('#submit_delete_client').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/clients/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Клиент удален')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#update_client').click(function(e){
        $('#update_client_popup').show()
    })

    $('#update_client_popup_close').click(function(e){
        $('#update_client_popup').hide()
    })

    $('#cancel_update_client').click(function(e){
        $('#update_client_popup').hide()
    })

    $('#submit_update_client').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpUpId').val(),
            label: $('#inUpLabel').val(),
            phone: $('#inUpPhone').val()
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/clients/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные клиента изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })
});
