window.addEventListener('load', () => {
    var socket = io();
    const $inputMessage = $('#inputMessage');
    const $log = $('#log');
    const $form = $('form');

    socket.on('message', (data) => {
        $log.append($('<div/>').text(data).addClass('mymessage'));
    });
    socket.on('broadcast', (data) => {
        $log.append($('<div/>').text(data).addClass('message'));
    });

    $form.submit((event) => {
        var msg = $inputMessage.val();
        if ($inputMessage.val().replace(/\s/g, '').length > 0) {
            $inputMessage.val('');
            socket.emit('message', msg);
        }
        event.preventDefault();
    });
});
