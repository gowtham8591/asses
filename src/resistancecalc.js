function resistanceCalculator(firstBand,secBand,thirdBand,fourthBand){

   var resistor ={
	
				"Black":{
				  "value":"0",
				   "tolerance":""
				},
				"Brown":{
				  "value":"1",
				   "tolerance":""
				},
				"Red":{
				  "value":"2",
				   "tolerance":""
				},
				"Orange":{
				  "value":"3",
				   "tolerance":""
				},
				"Yellow":{
				  "value":"4",
				   "tolerance":""
				},
				"Green":{
				  "value":"5",
				   "tolerance":""
				},
				"Blue":{
				  "value":"6",
				   "tolerance":""
				},
				"Violet":{
				  "value":"7",
				   "tolerance":""
				},
				"Gray":{
				  "value":"8",
				   "tolerance":""
				},
				"White":{
				  "value":"9",
				   "tolerance":""
				},
				"Gold":{
				  "value":"-1",
				   "tolerance":"5%"
				},
				"Silver":{
				  "value":"-2",
				   "tolerance":"10%"
				},
				"None":{
				  "value":"",
				   "tolerance":"20%"
				}


}
		var Kilo_ohm =1000;
		var Mega_ohm = 1000000;



	var resistance = (resistor[firstBand].value+ resistor[secBand].value)*Math.pow(10,resistor[thirdBand].value);

  		 if(resistance.toString().length>3 && resistance.toString().length<6){
		  	resistance= resistance/Kilo_ohm+ ' K Ω ± '+resistor[fourthBand].tolerance;
		  }else if (resistance.toString().length>=6){
		  	resistance= resistance/Mega_ohm +' M Ω ± '+resistor[fourthBand].tolerance;
		  }else{
		  	resistance= resistance +' Ω ± '+resistor[fourthBand].tolerance;
		  }


		  return resistance;

}