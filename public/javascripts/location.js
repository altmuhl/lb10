$(document).ready(function(){

    $('#create_location').click(function(e){

        $('#create_location_popup').show()

    })

    $('#create_location_popup_close').click(function(e){

        $('#create_location_popup').hide()

    })

    $('#cancel_create_location').click(function(e){

        $('#create_location_popup').hide()

    })

    $('#submit_create_location').click(function(e){

        e.preventDefault()
        let data = {
            label: $('#inLabel').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/location/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Локация добавлена!')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })


    $('#delete_loc').click(function(e){
        $('#delete_loc_popup').show()
    })

    $('#delete_loc_popup_close').click(function(e){
        $('#delete_loc_popup').hide()
    })

    $('#cancel_delete_loc').click(function(e){
        $('#delete_loc_popup').hide()
    })

    $('#submit_delete_loc').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/location/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Локация удалена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#update_location').click(function(e){
        $('#update_location_popup').show()
    })

    $('#update_location_popup_close').click(function(e){
        $('#update_location_popup').hide()
    })

    $('#cancel_update_location').click(function(e){
        $('#update_location_popup').hide()
    })

    $('#submit_update_location').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpUpId').val(),
            label: $('#inUpLabel').val()
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/location/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные локации изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })
});



