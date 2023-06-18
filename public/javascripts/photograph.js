$(document).ready(function(){

    $('#create_phg').click(function(e){

        $('#create_phg_popup').show()

    })

    $('#create_phg_popup_close').click(function(e){

        $('#create_phg_popup').hide()

    })

    $('#cancel_create_phg').click(function(e){

        $('#create_phg_popup').hide()

    })

    $('#submit_create_phg').click(function(e){

        e.preventDefault()
        let data = {
            label: $('#inLabel').val(),
            phone: $('#inPhone').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/photograph/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Фотограф добавлен')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })


    $('#delete_phg').click(function(e){
        $('#delete_phg_popup').show()
    })

    $('#delete_phg_popup_close').click(function(e){
        $('#delete_phg_popup').hide()
    })

    $('#cancel_delete_phg').click(function(e){
        $('#delete_phg_popup').hide()
    })

    $('#submit_delete_phg').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/photograph/delete',
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

    $('#update_phg').click(function(e){
        $('#update_phg_popup').show()
    })

    $('#update_phg_popup_close').click(function(e){
        $('#update_phg_popup').hide()
    })

    $('#cancel_update_phg').click(function(e){
        $('#update_phg_popup').hide()
    })

    $('#submit_update_phg').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#UpId').val(),
            label: $('#UpLabel').val(),
            phone: $('#UpPhone').val(),
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/photograph/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })
});


