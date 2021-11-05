import http from "../http-common";

const getAll = () => {
  return http.get("/Student");
};

const get = id => {
  return http.get(`/Student/${id}`);
};

const create = data => {
  return http.post("/Student", data);
};

const update = (id, data) => {
  return http.put(`/Student/${id}`, data);
};

const remove = id => {
  return http.delete(`/Student/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/Student`);
};

const findByTitle = title => {
  return http.get(`/Student?name=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};