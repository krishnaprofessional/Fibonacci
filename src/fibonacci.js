class Fibonacci {
	encode(number) {
		let a,b,c ,f, fibs, i, result;
		if(number < 1) return ''; 
		a=1;
		b=1;
		c=a+b; 
		fibs =[b];   
		while(number >= c){  
			fibs.unshift(c);  
			a=b;  
			b=c; 
			c=a+b;
		}
		result =['1'];
		for (i = 0; i < fibs.length ; i++) {
				f = fibs[i];
				if (number >= f) {
				number = number - f;
				result.unshift('1');
			} else {
			result.unshift('0');
			}
		}
	     return result.join('');
	}

	decode(string) {
		var char, fib, last_element, index, sum, temperory, i, ref;
		fib = 1;
		last_element = 1;
		sum = 0;
		ref = string.split('').slice(0, -1);
		for (index = i = 0; i < ref.length; index = ++i) {
				char = ref[index];
				if (char === '1') {
				sum += fib;
				}
		temperory = last_element;
		last_element = fib;
		fib += temperory;
		}
		return sum;
	}

}

module.exports = new Fibonacci();
