import { type } from "os";

export type User = {
  nome: string;
  email: string;
  senha: string;
  usuarioTipo: string;
  sexo: "MASCULINO" | "FEMININO" | "OUTRO";
  dataNascimento: string;
  altura: number;
  id?: number;
  urlFoto?: string;
};

export type WeightGoal = {
  pesoAtual: number;
  pesoMeta: number;
};

export type Measures = {
  torax?: number;
  abdomen?: number;
  bicepsE?: number;
  bicepsD?: number;
  antebracoE?: number;
  antebracoD?: number;
  quadril?: number;
  coxaE?: number;
  coxaD?: number;
  panturrilhaE?: number;
  panturrilhaD?: number;

  subescapular?: number;
  bicepsBI?: number;
  tricepsTR?: number;
  axilarMedia?: number;
  toraxica?: number;
  suprailiaca?: number;
  supraespinal?: number;
  coxa?: number;
  panturrilhaMedial?: number;
  metaGordura?: number;
};
