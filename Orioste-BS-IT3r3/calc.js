let d = document.getElementById('inp');
let repeatA = 0,repeatS = 0,repeatM = 0,repeatD = 0,repeatMO=0,repeatEx=0;
function getData(num) {
	repeatA = 0;
	repeatS = 0;
	repeatM = 0;
	repeatD = 0;
	repeatMO=0;
 	d.value+=num;
 }
function operator(ope){
	if(ope=='+'){
		if(repeatA==0){
			d.value+='+';
			repeatA	++;
			repeatM++;
			repeatMO++;
		}
	}
	else if(ope=='-'){
		if(repeatS==0){
			d.value+='-';
			repeatS++;
			repeatA	++;
			repeatM++;
			repeatMO++;
		}
	}

	if(ope=='*'){
		if(repeatM==0){
			d.value+='*';
			repeatA	++;
			repeatM++;
			repeatMO++;
		}
	}
	else if(ope=='/'){
		if(repeatD==0){
			d.value+='/';
			repeatA	++;
			repeatM++;
			repeatMO++;
		}
	}
	else if(ope=='='){
		d.value=eval(d.value);
	}
	else if(ope=='%'){
		if(repeatMO	==0){
			d.value+='%';
			repeatA	++;
			repeatM++;
			repeatMO++;

		}
	}

	else if(ope=="C"){
		d.value=" ";
	}

}