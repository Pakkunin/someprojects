var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var pi = Math.PI;


// -------- Получаем кол-во городов ----------------------
var n = prompt('Введите кол-во городов');
(10 >= n, n >= 2)? input() : n = prompt('Кол-во городов должно быть не менше 2х и не больше 10');

// ----------- Не придумал как тут сделать не множа код --------------

	function input() {
		if( n == 2 ){
			document.getElementsByClassName('form')[2].style.display = "none"
			document.getElementsByClassName('form')[3].style.display = "none"
			document.getElementsByClassName('form')[4].style.display = "none"
			document.getElementsByClassName('form')[5].style.display = "none"
			document.getElementsByClassName('form')[6].style.display = "none"
			document.getElementsByClassName('form')[7].style.display = "none"
			document.getElementsByClassName('form')[8].style.display = "none"
			document.getElementsByClassName('form')[9].style.display = "none"

		} else if( n == 3 ){


			document.getElementsByClassName('form')[3].style.display = "none"
			document.getElementsByClassName('form')[4].style.display = "none"
			document.getElementsByClassName('form')[5].style.display = "none"
			document.getElementsByClassName('form')[6].style.display = "none"
			document.getElementsByClassName('form')[7].style.display = "none"
			document.getElementsByClassName('form')[8].style.display = "none"
			document.getElementsByClassName('form')[9].style.display = "none"


		} else if( n == 4 ){


			document.getElementsByClassName('form')[4].style.display = "none"
			document.getElementsByClassName('form')[5].style.display = "none"
			document.getElementsByClassName('form')[6].style.display = "none"
			document.getElementsByClassName('form')[7].style.display = "none"
			document.getElementsByClassName('form')[8].style.display = "none"
			document.getElementsByClassName('form')[9].style.display = "none"


		} else if( n == 5 ){


			document.getElementsByClassName('form')[5].style.display = "none"
			document.getElementsByClassName('form')[6].style.display = "none"
			document.getElementsByClassName('form')[7].style.display = "none"
			document.getElementsByClassName('form')[8].style.display = "none"
			document.getElementsByClassName('form')[9].style.display = "none"


		} else if( n == 6 ){


			document.getElementsByClassName('form')[6].style.display = "none"
			document.getElementsByClassName('form')[7].style.display = "none"
			document.getElementsByClassName('form')[8].style.display = "none"
			document.getElementsByClassName('form')[9].style.display = "none"


		} else if( n == 7 ){


			document.getElementsByClassName('form')[7].style.display = "none"
			document.getElementsByClassName('form')[8].style.display = "none"
			document.getElementsByClassName('form')[9].style.display = "none"


		} else if( n == 8 ){


			document.getElementsByClassName('form')[8].style.display = "none"
			document.getElementsByClassName('form')[9].style.display = "none"


		} else if( n == 9 ) {

			document.getElementsByClassName('form')[9].style.display = "none"



		} else {}};

input();





function buildCities(x, y) {
	if (x > 0, y > 0) {
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.arc( x , y, 10, 2*pi, false );
		ctx.stroke();
		ctx.fill();
	} else {
		false
	}
	// ctx.beginPath();
	// ctx.fillStyle = "black";
	// ctx.arc( x , y, 10, 2*pi, false );
	// ctx.stroke();
	// ctx.fill();

};

function buildRoads(x, y, z, l) {
	if (x > 0, y > 0, z >0, l > 0) {
		ctx.moveTo(x, y);
		ctx.lineTo(z, l);
		ctx.stroke()
	} else {
		false
	}
	// ctx.moveTo(x, y);
	// ctx.lineTo(z, l);
	// ctx.stroke()
};

// ------ Получаем введенные координаты ------------------

var submit = document.getElementById('submit');
	submit.addEventListener('click', function(event) {

		var  citysCoor_x = document.getElementsByClassName('coordinate_x');
		var	 citysCoor_y = document.getElementsByClassName('coordinate_y');

		var citysArr_x = [],
			citysArr_y = [];

			function save() {
			    for (var i = 0; i < citysCoor_x.length; i++) {

			    	citysArr_x[i] = citysCoor_x[i].value * 100;

			    }
			    console.log(citysArr_x);

			    for (var i = 0; i < citysCoor_y.length; i++) {
			      citysArr_y[i] = citysCoor_y[i].value * 100;
			    }
			    console.log(citysArr_y);

		  	}
			save();

//--------- Отрисовываем резултат ------------------------

		for (var i = 0; i < citysArr_x.length; i++) {
			var Coor_x = citysArr_x[i],
				Coor_y = citysArr_y[i];
			buildCities(Coor_x, Coor_y)
		};

// ----------- Не придумал как тут сделать не множа код --------------

		for (var i = 0; i < citysArr_x.length; i++) {
			var Coor_x = citysArr_x[i],
				Coor_y = citysArr_y[i],
				Coor_x1 = citysArr_x[i+1],
				Coor_y1 = citysArr_y[i+1],

				Coor_x = citysArr_x[i],
				Coor_y = citysArr_y[i],
				Coor_x2 = citysArr_x[i+2],
				Coor_y2 = citysArr_y[i+2],

				Coor_x = citysArr_x[i],
				Coor_y = citysArr_y[i],
				Coor_x3 = citysArr_x[i+3],
				Coor_y3 = citysArr_y[i+3],

				Coor_x = citysArr_x[i],
				Coor_y = citysArr_y[i],
				Coor_x4 = citysArr_x[i+4],
				Coor_y4 = citysArr_y[i+4],

				Coor_x = citysArr_x[i],
				Coor_y = citysArr_y[i],
				Coor_x5 = citysArr_x[i+5],
				Coor_y5 = citysArr_y[i+5];

			buildRoads(Coor_x, Coor_y, Coor_x1, Coor_y1);
			buildRoads(Coor_x, Coor_y, Coor_x2, Coor_y2);
			buildRoads(Coor_x, Coor_y, Coor_x3, Coor_y3);
			buildRoads(Coor_x, Coor_y, Coor_x4, Coor_y4);
			buildRoads(Coor_x, Coor_y, Coor_x5, Coor_y5);

		};


	});
