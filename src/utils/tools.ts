import CryptoJS from "crypto-js";

export const encrypt = str => {
  // return CryptoJS.AES.encrypt(word, "secret key 123").toString();
  const keyHex = CryptoJS.enc.Utf8.parse(PASSWORD_SCRIT_KEY);
  const encrypted = CryptoJS.DES.encrypt(str, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
};

export const PASSWORD_SCRIT_KEY = "PROOFREAD@%_-563453@!~[001]";

export const dateFormat = (row, column, cellValue) => {
  // return new Date(cellValue).toLocaleString();
  // return new Date(cellValue).toLocaleString().replace(/:\d{1,2}$/, "");
  const date = new Date(cellValue);
  const year = date.getFullYear() + "-";
  const month =
    date.getMonth() + 1 >= 10
      ? date.getMonth() + 1 + "-"
      : "0" + (date.getMonth() + 1) + "-";
  const day =
    date.getDate() >= 10 ? date.getDate() + " " : "0" + date.getDate() + " ";
  const hour =
    date.getHours() >= 10 ? date.getHours() + ":" : "0" + date.getHours() + ":";
  const minute =
    date.getMinutes() >= 10
      ? date.getMinutes() + ":"
      : "0" + date.getMinutes() + ":";
  const second =
    date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds();
  return year + month + day + hour + minute + second;
};

export const remainTime = row => {
  const date = new Date(row.createdAt);
  const now = new Date();
  const agreeTime = row.agreedAt || 24;
  const deadLine = new Date(date.getTime() + agreeTime * 60 * 60 * 1000);
  const diff = deadLine.getTime() - now.getTime();
  // const day = Math.floor(diff / (24 * 3600 * 1000));
  const hour = Math.floor((diff / (3600 * 1000)) % 24);
  const minute = Math.floor((diff / (60 * 1000)) % 60);
  const second = Math.floor((diff / 1000) % 60);
  const h = hour > 0 ? `${hour}小时` : "";
  const m = minute > 0 ? `${minute}分` : "";
  const s = second > 0 ? `${second}秒` : "——";
  return `${h}${m}${s}`;
};
