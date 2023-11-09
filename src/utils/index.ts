import CryptoJS from "crypto-js";

export function decryptStrData(encodedStr: string | undefined): string {
  if (!encodedStr) {
    return "";
  }

  const key = CryptoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_DECODE_KEY);
  const iv1 = CryptoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_DECODE_KEY);
  const plainText = CryptoJS.AES.decrypt(encodedStr, key, {
    keySize: 16,
    iv: iv1,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  return plainText.toString(CryptoJS.enc.Utf8);
}

export function encryptStrData(encodedStr: string | undefined): string {
  if (!encodedStr) {
    return "";
  }

  const key = CryptoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_DECODE_KEY);
  const iv1 = CryptoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_DECODE_KEY);
  const plainText = CryptoJS.AES.encrypt(encodedStr, key, {
    keySize: 16,
    iv: iv1,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  return plainText.toString();
}
