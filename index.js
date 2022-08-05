const func1 = () => {
    $('#img1').fadeToggle(1000);
}
const func2 = () => {
    $('div').css('background-color', '#f00');
}

$('#btn2').click(func2);