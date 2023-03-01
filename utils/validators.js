const validateCAS = (cas) => {
  if (!cas) {
    return false; // empty string or null value
  }
  
  // Remove any non-numeric characters
  cas = cas.split("-");
  console.log(cas)
  
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
  console.log(checkDigit)
  let checkSum = 0;
  for (let i = 0; i < cas.length - 1; i++) {
    const digit = parseInt(cas.charAt(i));
    checkSum += (digit * ((cas.length - 1) - i));
    console.log(checkSum);
  }
  const calculatedCheckDigit = checkSum % 10;
  return checkDigit === calculatedCheckDigit;
}

const validateEC = (ec) => {
  if (!ec) {
    return false; // empty string or null value
  }
  
  // Remove delimiters and split into digit groups
  ec = ec.split("-");
  
  // Check if the EC number has the right length
  if (ec[0].length !== 3 || ec[1].length !== 3 || ec[2].length !== 1) {
    return false;
  }
  
  ec = ec.join("");
  
  // Check if the check digit is correct
  const checkDigit = parseInt(ec.charAt(ec.length - 1));
  let checkSum = 0;
  for (let i = 0; i < ec.length - 1; i++) {
    const digit = parseInt(ec.charAt(i));
    checkSum += (digit * (i + 1));
  }
  const calculatedCheckDigit = checkSum % 11;
  return checkDigit === calculatedCheckDigit;
}

module.exports = {
  validateCAS,
  validateEC
}