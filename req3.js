function generateID() {
  const pattern = "XXXX-AAAA-BBBB-CCCC";
  return pattern.replace(/[XABC]/g, generateRandomAlphanumeric);
}

function generateRandomAlphanumeric() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomIndex = Math.floor(Math.random() * characters.length);
  const randomCharacter = characters.charAt(randomIndex);
  return randomCharacter;
}

const ids = [
  generateID(),
  generateID(),
  generateID(),
  generateID(),
]

ids.forEach(id => console.log(id))