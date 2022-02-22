const cipher = {
  encode: (offset, string) => {
    if (!string) throw new TypeError("No ingresaste ningún mensaje");
    if (typeof string !== "string") throw new TypeError("El valor ingresado no es texto");
    let msg = "";

    for (let i = 0; i < string.length; i++) {
      let poscAscii = string.charCodeAt(i);
      let poscOffset = (poscAscii - 65 + offset) % 26 + 65;
      let letra = String.fromCharCode(poscOffset);
      msg = msg + letra;
    }
    return msg;
    },

  decode: (offset, string) => {
      if (!string) throw new TypeError("No ingresaste ningún mensaje");
      if (typeof string !== "string") throw new TypeError("El valor ingresado no es texto");
      let msg = ""
      for (let i = 0; i < string.length; i++) {
        let poscAscii = string.charCodeAt(i);
        let poscOffset = (poscAscii + 65 - offset) % 26 + 65;
        let letra = String.fromCharCode(poscOffset);
        msg = msg + letra;
        }
      return msg;
      }
};

export default cipher;
