describe( "Resistance calculation using color bands", function () {

 			it(" first band Yellow  second band Violet third band  Red and fourth band Gold ", function () {
		        expect(resistanceCalculator('Yellow','Violet','Red','Gold')).toBe('4.7 K Ω ± 5%');
		    });
		    it(" first band Red  second band Orange third band  Red and fourth band Silver ", function () {
		        expect(resistanceCalculator('Red','Orange','Red','Silver')).toBe('2.3 K Ω ± 10%');
		    });
		    it(" first band Brown  second band Yellow third band  Violet and fourth band gold ", function () {
		        expect(resistanceCalculator('Brown','Yellow','Violet','Gold')).toBe('140 M Ω ± 5%');
		    });
		    it(" first band Orange  second band Brown third band  Brown and fourth band None ", function () {
		        expect(resistanceCalculator('Orange','Brown','Brown','None')).toBe('310 Ω ± 20%');
		    });
		    it(" first band White  second band Black third band  Silver and fourth band Gold ", function () {
		        expect(resistanceCalculator('White','Black','Silver','Gold')).toBe('0.9 Ω ± 5%');
		    });
		    it(" first band White  second band Red third band  Orange and fourth band gold ", function () {
		        expect(resistanceCalculator('White','Red','Orange','Gold')).toBe('92 K Ω ± 5%');
		    });

});