window.addEventListener('load', () => {
    var socket = io();
    const $inputMessage = $('#inputMessage');
    const $log = $('#log');
    const $form = $('form');

    socket.on('message', (data) => {
        if (data != '') {
            $log.append('<div class="mui--divider-bottom">' + data + '</div>');
        }
    });

    $form.submit((event) => {
        var msg = $inputMessage.val();
        $inputMessage.val('');
        socket.emit('message', msg);
        event.preventDefault();
    });
});
