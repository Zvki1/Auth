const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const originalKey = 'e55778dee65d0dcb46dbe7e16bbd96e7';
const expandedKey = originalKey + originalKey; // Repeat the original key to make it 32 bytes long
const key = Buffer.from(expandedKey, 'hex');
// const key = crypto.randomBytes(32);
//'e55778dee65d0dcb46dbe7e16bbd96e7'
// <Buffer cd 63 5e 89 6c 47 d0 a9 42 c8 0d 0e 65 6e 6e 66 6a c7 a2 b9 be a4 e7 3f 3d ff 0b 3a ff e1 cd 9c>
const iv = crypto.randomBytes(16);

function encrypt(text) {
  let cipher = crypto.createCipheriv(algorithm,key, iv);
  try {
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
  } catch (err) {
    console.log("error from encrypting from the cypher",err,"\n");
  }
}

function decrypt(text) {
  const iv = Buffer.from(text.iv, 'hex');
  const encryptedText = Buffer.from(text.encryptedData, 'hex');

  try {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  } catch (err) {
    console.error("Error from decrypting:", err);
    console.error("Encrypted data:", text.encryptedData);
    console.error("Key:", key);
    console.error("IV:", iv);
    return null; // Handle decryption error gracefully
  }
}


module.exports = { encrypt, decrypt };