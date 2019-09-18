var value; 
var arena;
init();
function init() {
    value= 'X';
    arena = ['', '', '',
    '', '', '',
    '', '', ''
    ];

    document.getElementById('1').textContent = '';
    document.getElementById('2').textContent = '';
    document.getElementById('3').textContent = '';
    document.getElementById('4').textContent = '';
    document.getElementById('5').textContent = '';
    document.getElementById('6').textContent = '';
    document.getElementById('7').textContent = '';
    document.getElementById('8').textContent = '';
    document.getElementById('9').textContent = '';
}
document.getElementById('1').addEventListener('click', function () {
    document.getElementById('1').innerHTML = '<h1>' + value + '</h1>';
    document.getElementById('1').disabled = true;
    arena[0] = value;
    value = (value === 'X') ? '0' : 'X';



});

document.getElementById('2').addEventListener('click', function () {
    document.getElementById('2').innerHTML = '<h1>' + value + '</h1>';
    document.getElementById('2').disabled = true;
    arena[1] = value;
    value = (value === 'X') ? '0' : 'X';
});

document.getElementById('3').addEventListener('click', function () {
    document.getElementById('3').innerHTML = '<h1>' + value + '</h1>';
    document.getElementById('3').disabled = true;
    arena[2] = value;
    value = (value === 'X') ? '0' : 'X';
});

document.getElementById('4').addEventListener('click', function () {
    document.getElementById('4').innerHTML = '<h1>' + value + '</h1>';
    document.getElementById('4').disabled = true;
    arena[3] = value;
    value = (value === 'X') ? '0' : 'X';
});

document.getElementById('5').addEventListener('click', function () {
    document.getElementById('5').innerHTML = '<h1>' + value + '</h1>';
    document.getElementById('5').disabled = true;
    arena[4] = value;
    value = (value === 'X') ? '0' : 'X';
});

document.getElementById('6').addEventListener('click', function () {
    document.getElementById('6').innerHTML = '<h1>' + value + '</h1>';
    document.getElementById('6').disabled = true;
    arena[5] = value;
    value = (value === 'X') ? '0' : 'X';
});

document.getElementById('7').addEventListener('click', function () {
    document.getElementById('7').innerHTML = '<h1>' + value + '</h1>';
    document.getElementById('7').disabled = true;
    arena[6] = value;
    value = (value === 'X') ? '0' : 'X';
});

document.getElementById('8').addEventListener('click', function () {
    document.getElementById('8').innerHTML = '<h1>' + value + '</h1>';
    document.getElementById('8').disabled = true;
    arena[7] = value;
    value = (value === 'X') ? '0' : 'X';
});

document.getElementById('9').addEventListener('click', function () {
    document.getElementById('9').innerHTML = '<h1>' + value + '</h1>';
    document.getElementById('9').disabled = true;
    arena[8] = value;
    value = (value === 'X') ? '0' : 'X';

});


//document.getElementById('A').classList.remove("bg-white");
//document.getElementById('A').classList.add("bg-success");


document.addEventListener('click', function () {


    for (var i = 0, j = 0; i < arena.length; i += 3, j++) {


        if (arena[i] != '' && arena[i] == arena[i + 1] && arena[i] == arena[i + 2]) {
            var a = i + 1;
            var b = i + 2;
            var c = i + 3;
            bgUpdate(a, b, c,i);


        }


        if (arena[j] != '' && arena[j] == arena[j + 3] && arena[j] == arena[j + 6]) {
            var a = j + 1;
            var b = j + 4;
            var c = j + 7;
            bgUpdate(a, b, c, j);
        }

        if (arena[0] != '' && arena[0] == arena[4] && arena[0] == arena[8]) {
            var a = 1;
            var b = 5;
            var c = 9;
            bgUpdate(a, b, c,4);

        }
        if (arena[2] != '' && arena[2] == arena[4] && arena[2] == arena[6]) {
            var a = 3;
            var b = 5;
            var c = 7;
            bgUpdate(a, b, c,4);
            


        }
    }
});

function bgUpdate(a, b, c,w) {
    document.getElementById('div-' + a).classList.remove("bg-white");
    document.getElementById('div-' + a).classList.remove("bg-success");
    document.getElementById('div-' + a).classList.add("bg-success");

    document.getElementById('div-' + b).classList.remove("bg-white");
    document.getElementById('div-' + b).classList.remove("bg-success");
    document.getElementById('div-' + b).classList.add("bg-success");

    document.getElementById('div-' + c).classList.remove("bg-white");
    document.getElementById('div-' + c).classList.remove("bg-success");
    document.getElementById('div-' + c).classList.add("bg-success");

    for (var i = 1; i < 10; i++)
        document.getElementById(i).disabled = true;

    document.getElementById('winner').textContent=(arena[w]=='X')?'X':'O';
    document.getElementById('msg').style.display='inline-block';

    

}