
const fonts = {
    'Fairly Normal':
    [
        'Beguild',
        'BladeDesire',
        'DroideFutur-Light',
        'DroideTransit-Light',
        'HealTheWebB-Regular',
        'LeMurmure-Regular',
        'LibrisADFStd-Bold',
        'LibrisADFStd-Regular',
        'sanstiefel',
        'TapeFlow',
    ],
    'Metal':
    [
        'Aporrheton_font',
        'Familia_Herlequin_font',
        'Intradistaff_font',
        'Mostean',
        'Pochwara_font',
        'Sripnoxhz',
        'Wolfsfifth',
    ],
    'Typewriter':
    [
        'Byron-Mark-I',
        'Byron-Mark-II',
        'Oliver-Printype',
        'Remington-Noiseless',
    ],
    'Scratchy':
    [
        'Depres',
        'UOAlecRegular',
        'UOBerettRegular',
        'UOClaudiaRegular',
        'UOKaelaRegular',
        'UOLydiaRegular',
    ],
    'Kinda Weird':
    [
        'SenseFont1_Regular',
        'UOEmilyRegular',
    ],
};

var bandReplacer = $('#font-replacer-band');

$.each(fonts, function(key, value) {

    bandReplacer.append(`<optgroup label="${key}">`);
    $.each(value, function(key, font) {
        bandReplacer.append(`<option value="${font}">${font}</option>`);
    });
    bandReplacer.append(`</optgroup>`);
});

bandReplacer.on('change', function() {
    $('#band-name').removeClass().addClass(this.value);
});

var albumReplacer = $('#font-replacer-album');

$.each(fonts, function(key, value) {
    albumReplacer.append(`<optgroup label="${key}">`);
    $.each(value, function(key, font) {
        albumReplacer.append(`<option value="${font}">${font}</option>`);
    });
    albumReplacer.append(`</optgroup>`);
});

albumReplacer.on('change', function() {
    $('#album-name').removeClass().addClass(this.value);
});

$('#band-text-transform').click(function(e){
    e.preventDefault();
    if ($('#band-name h2').hasClass('title-case')) {
        $(this).text('lowercase');
        $('#band-name h2').removeClass().addClass('lowercase');
    }
    else if ($('#band-name h2').hasClass('lowercase')) {
        $(this).text('title-case');
        $('#band-name h2').removeClass().addClass('title-case');
    }
});

$('#album-text-transform').click(function(e){
    e.preventDefault();
    if ($('#album-name h2').hasClass('title-case')) {
        $(this).text('To Title Case');
        $('#album-name h2').removeClass().addClass('lowercase');
    }
    else if ($('#album-name h2').hasClass('lowercase')) {
        $(this).text('to lowercase');
        $('#album-name h2').removeClass().addClass('title-case');
    }
});

$('#band-weight-picker').on('change', function() {
    $('#band-name h2').css('font-weight', this.value);
});



