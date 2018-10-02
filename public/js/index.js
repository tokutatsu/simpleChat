window.addEventListener('load', () => {
    var socket = io();
    const $inputMessage = $('#inputMessage');
    const $log = $('#log');
    const $form = $('form');

    socket.on('message', (data) => {
        $log.append('<div class="mui--divider-bottom mui--text-right">' + data + '</div>');
    });
    socket.on('broadcast', (data) => {
        $log.append('<div class="mui--divider-bottom">' + data + '</div>');
    });

    $form.submit((event) => {
        var msg = $inputMessage.val();
        $inputMessage.val('');
        if (msg.replace(/\s/g, '').length > 0) {
            socket.emit('message', msg);
        }
        event.preventDefault();
    });
});
