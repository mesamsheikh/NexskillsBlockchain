function CheckPrimeNumber(number)
{
	for (let i= number -1, i >1 ; i--)
	{
		if(number % i == 0) 
			return false;
	}
	return true;
}	

function IsEvenOrOdd(number)
{
	let parsedNumber = parseInt(number);
	if( isNaN(parsedNumber)) return "Not a number";
	else 
	{
		if (parsedNumber % 2 == 0) return "Even";
		else return "Odd";
	}
}

function IsPositiveOrNegative(number)
{
	if(number == 0) return "zero";
	else if	(number > 0) return "positive";
	else return "negative";
}

function IsVowel(alphabet)
{
	if(alphabet == 'a') return true;
	else if(alphabet == 'e') return true;
	else if(alphabet == 'i') return true;
	else if(alphabet == 'o') return true;
	else if(alphabet == 'u') return true;
	else return false;
}

function StarTriangle ()
{
	let n = 7;
	for (let i= 0 ; i<n ; i++)
	{
		let spaces = '', stars = '';
		for (let j = i ; j<n ; j++)
		{ 
		spaces += ' ';
		}
		for (let k = n ; k>(n-i-1) ; k--)
		{
			stars += ' *';
		}
		console.log(spaces + stars);	
	}
}