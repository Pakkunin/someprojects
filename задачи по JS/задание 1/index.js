var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

function draw(row, col, width) {
	var height = width;
	ctx.fillRect( row, col, width, height );
};
var number = document.getElementsByTagName("input")[0];
number.addEventListener('input', function()	{

	var n = number.value;
	if (n < 3) {
		alert('Введите число больше 2');
		return;
	}
	var a = 50 * n;
	var str = a.toString();
	canvas.style.height = str + 'px';
	canvas.style.width = str + 'px';
	canvas.setAttribute('height', str);
	canvas.setAttribute('width', str);


	for ( var i = 0; i < n; i++) {
		var row = i * 50 ;
		var col = row;
		var col1 = n*50 - 50 - row;

		draw(row, col, 50);
		draw(row,col1,50)

		


			
	};


});

