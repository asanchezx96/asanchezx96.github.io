import axios from "axios";

const token = import.meta.env.VITE_TOKEN_MICROSIP;

const ip = "https://api-microsip.ddns.net/api_microsip";
// const ip = "https://10.10.15.6/api_microsip";

const appsApi = axios.create({
  baseURL: ip,
});

appsApi.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ` + token;
  }
  return config;
});

export const getRequisiciones = async (filtros: object) => {
  const { data } = await appsApi.post("/cicsa/listarRequisiciones", filtros);
  return data;
};

export const getListasRequisiciones = async () => {
  const { data } = await appsApi.get("/cicsa/obtenerListasRequisiciones");
  return data;
};

export const agregarRequisicion = (data: object) => {
  return appsApi.post("/cicsa/registrarRequisicion", data);
};

export const listarArticulos = (data: object) => {
  return appsApi.post("/cicsa/lista_articulos_parecidos", data);
};

export const listarArtículosContratos = async (data: object) => {
  return appsApi.post("/cicsa/listarArticulosGruasMarinas", data);
};

export const listarClientesActivos = async () => {
  const { data } = await appsApi.get("/cicsa/listarClientesActivosTest/");
  return data.data;
};
