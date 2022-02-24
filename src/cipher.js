  const cipher = {
  encode: (offset, string) => {
    if (typeof string !== 'string' || !offset) {
      throw TypeError('invoked with wrong argument types')
    }

    let msg = "";

    for (let i = 0; i < string.length; i++) {
      let poscAscii = string.charCodeAt(i);
      let poscOffset = ((poscAscii - 65 + offset) % 26) + 65;
      let letra = String.fromCharCode(poscOffset);
      if (poscAscii >= 65 && poscAscii <= 90) {
        msg += String.fromCharCode(poscOffset);
      } else {
      msg += letra;
    }
    }
    return msg;
    },

  decode: (offset, string) => {
    if (typeof string !== 'string' || !offset) {
      throw TypeError('invoked with wrong argument types')
    }
      let msg = ""
      for (let i = 0; i < string.length; i++) {
        let poscAscii = string.charCodeAt(i);
        let poscOffset = (poscAscii + 65 - offset) % 26 + 65;
        let letra = String.fromCharCode(poscOffset);
        if (poscAscii >= 65 && poscAscii <= 90) {
          msg += String.fromCharCode(poscOffset);
        } else {
        msg += letra;
        }
      }
      return msg;
      }
};

export default cipher;
