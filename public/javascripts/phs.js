$(document).ready(function(){

    $('#create_phs').click(function(e){

        $('#create_phs_popup').show()

    })

    $('#create_phs_popup_close').click(function(e){

        $('#create_phs_popup').hide()

    })

    $('#cancel_create_phs').click(function(e){

        $('#create_phs_popup').hide()

    })

    $('#submit_create_phs').click(function(e){

        e.preventDefault()
        let data = {
            date: $('#inpDate').val(),
            id_type: $('#inpId_type').val(),
            id_location: $('#inpId_location').val(),
            id_phg: $('#inpPhg').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/phs/create',
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


    $('#delete_phs').click(function(e){
        $('#delete_phs_popup').show()
    })

    $('#delete_phs_popup_close').click(function(e){
        $('#delete_phs_popup').hide()
    })

    $('#cancel_delete_phs').click(function(e){
        $('#delete_phs_popup').hide()
    })

    $('#submit_delete_phs').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/phs/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Фотосессия удалена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#update_phs').click(function(e){
        $('#update_phs_popup').show()
    })

    $('#update_phs_popup_close').click(function(e){
        $('#update_phs_popup').hide()
    })

    $('#cancel_update_phs').click(function(e){
        $('#update_phs_popup').hide()
    })

    $('#submit_update_phs').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#UpId').val(),
            date: $('#UpDate').val(),
            id_type: $('#UpId_type').val(),
            id_location: $('#UpId_location').val(),
            id_phg: $('#UpPhg').val()
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/phs/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные  изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })
});



