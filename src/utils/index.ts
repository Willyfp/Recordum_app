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

  return plainText
    .toString(CryptoJS.enc.Utf8)
    .replace("/var/www/html", "http://85.31.231.232");
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

export const getBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export function removeEmpty(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}

export function htmlToFormat(htmlText) {
  const codes = { B: "*", I: "_", STRIKE: "~" };
  const { body } = new DOMParser().parseFromString(htmlText, "text/html");
  const dfs = ({ childNodes }) =>
    Array.from(childNodes, (node) => {
      if (node.nodeType == 1) {
        const s = dfs(node);
        const code = codes[node.tagName];
        return code
          ? s.replace(/^(\s*)(?=\S)|(?<=\S)(\s*)$/g, `$1${code}$2`)
          : s;
      } else {
        return node.textContent;
      }
    }).join("");

  return dfs(body);
}

export function formatDataTraining(data) {
  return {
    usuario: { id: Number(data.usuario) },
    equipamento: { id: Number(data.equipamento) },
    exercicioTreino: { id: data.exercicioTreino },
    treino: { id: Number(data.treino) },
    dataInicio: data.data,
    dataFim: data.data,
    conectado: false,
    series: data.series.map((serie, index) => ({
      carga: serie.cargaInformada,
      numero: index + 1,
      dataInicio: data.data,
      dataFim: data.data,
      repeticoes: Array.from({ length: Number(serie.repeticao) }).map(
        (_, index) => ({
          ordem: index,
          cargaSubida: serie.cargaInformada,
          cargaDescida: serie.cargaInformada,
          tempoSubida: 0,
          tempoDescida: 0,
        })
      ),
    })),
  };
}
