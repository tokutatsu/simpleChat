const $form = $('form');
const $name = $('#name');
const $roomId = $('#roomId');
const $log = $('#log');

$form.submit(() => {
    if ($name.val().replace(/\s/g, '').length <= 0) {
        $log.append($('<div/>').text('名前を入力してください'));
        return false;
    }
    if ($roomId.val().replace(/\s/g, '').length <= 0) {
        $log.append($('<div/>').text('ルームIDを入力してください'));
        return false;
    }
});