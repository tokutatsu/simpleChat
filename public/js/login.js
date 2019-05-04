const $form = $('form');
const $name = $('#name');
const $roomId = $('#roomId');
const $log = $('#log');

$form.submit(() => {
    let nameLength = $name.val().replace(/\s/g, '').length;
    let roomIdLength = $roomId.val().replace(/\s/g, '').length;
    if (nameLength + roomIdLength <= 0) {
        $log.text('名前を入力してください');
        $log.append($('<div/>').text('ルームIDを入力してください'));
        return false;
    }
    if (nameLength <= 0) {
        $log.text('名前を入力してください');
        return false;
    }
    if (roomIdLength <= 0) {
        $log.text('ルームIDを入力してください');
        return false;
    }
});