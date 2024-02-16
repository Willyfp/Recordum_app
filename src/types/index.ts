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
  peso?: number;
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

export type MuscleGroup = {
  id: number;
  descricao: string;
};

export type Exercise = {
  id: number;
  descricao: string;
  foto?: string;
  grupoMuscular: MuscleGroup;
  exercicio: Exercise;
};

export type Training = {
  id: number;
  descricao: string;
  dataCadastro: string;
  usuarioCadastro: User;
  exerciciosTreino: Exercise[];
};

export type UF = {
  id: number;
  nome: string;
  sigla: string;
};

export type City = {
  id: number;
  nome: string;
  ibge: number;
  latitude: number;
  longitude: number;
  codTom: number;
  uf: UF;
};

export type GymType = {
  id: number;
  fantasia: string;
  razao: string;
  cnpj: string;
  endereco: string;
  numero: string;
  telefone: string;
  email: string;
  status: "ATIVO" | "INATIVO";
  cidade: City;
};
