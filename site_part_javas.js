function conversion()
{
	decimal = document.getElementById ("decimal") ;
	binaire = document.getElementById ("binaire") ;
	hexadecimal = document.getElementById ("hexadecimal") ;
	if (decimal.value !== '' && !isNaN(decimal.value) && /^-?\d+$/.test(decimal.value)) {
		conversionDecimal();
  } else if (hexadecimal.value !== '' && /^[0-9A-Fa-f]+$/.test(hexadecimal.value)) {
    conversionHexadecimal();
  } else if (binaire.value !== '' && /^[01]+$/.test(binaire.value)) {
    conversionBinaire();
  } else {
	decimal.value = "valeur non valide";
    binaire.value = "valeur non valide";
    hexadecimal.value = "valeur non valide"; 
	setTimeout(() => binaire.value = '', 2000);
	setTimeout(() => hexadecimal.value = '', 2000);
	setTimeout(() => decimal.value = '', 2000);
  }
}

function conversionDecimal()
{
	hexadecimal.value =(decimal.value-0).toString(16) ;
	binaire.value =(decimal.value-0).toString(2) ;
}

function conversionBinaire()
{
	decimal.value=parseInt(binaire.value,2);
	hexadecimal.value=(decimal.value-0).toString(16);
}

function conversionHexadecimal()
{
	decimal.value=parseInt(hexadecimal.value,16);
	binaire.value=(decimal.value-0).toString(2);
}

