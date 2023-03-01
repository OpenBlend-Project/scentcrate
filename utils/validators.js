const validateCAS = (cas) => {
  if (!cas) {
    return false; // empty string or null value
  }
  
  // Remove any non-numeric characters
  cas = cas.split("-");
  
  // Check if the CAS number has the right length
  if (cas[0].length < 2 || cas[0].length > 7) {
    return false;
  }
  
  if (cas[1].length !== 2) {
    return false;
  }
  
  cas = cas.join("");
  
  // Check if the check digit is correct
  const checkDigit = parseInt(cas.charAt(cas.length - 1));
  let checkSum = 0;
  for (let i = 0; i < cas.length - 1; i++) {
    const digit = parseInt(cas.charAt(i));
    checkSum += (digit * ((cas.length - 1) - i));
  }
  const calculatedCheckDigit = checkSum % 10;
  return checkDigit === calculatedCheckDigit;
}

const validateEINECS = (einecs) => {
  if (!einecs) {
    return false; // empty string or null value
  }
  
  // Remove delimiters and split into digit groups
  einecs = einecs.split("-");
  
  // Check if the einecs number has the right length
  if (einecs[0].length !== 3 || einecs[1].length !== 3 || einecs[2].length !== 1) {
    return false;
  }
  
  einecs = einecs.join("");
  
  // Check if the check digit is correct
  const checkDigit = parseInt(einecs.charAt(einecs.length - 1));
  let checkSum = 0;
  for (let i = 0; i < einecs.length - 1; i++) {
    const digit = parseInt(einecs.charAt(i));
    checkSum += (digit * (i + 1));
  }
  const calculatedCheckDigit = checkSum % 11;
  return checkDigit === calculatedCheckDigit;
}

module.exports = {
  validateCAS,
  validateEINECS
}