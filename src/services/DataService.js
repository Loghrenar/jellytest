import http from "@/http-common";
class DataService {
  getAll() {
    return http.get("character");
  }
  search(name, status, gender) {
    /* 
                name: filter by the given name.
                status: filter by the given status (alive, dead or unknown).
                gender: filter by the given gender (female, male, genderless or unknown).
            */
    let searchUrl = "/character";
    if (name) {
      searchUrl = searchUrl + `?name=${name}`;
    }
    if (status && name) {
      searchUrl = searchUrl + `&status=${status}`;
    } else if (status) {
      searchUrl = searchUrl + `?status=${status}`;
    }
    if (gender && name) {
      searchUrl = searchUrl + `&gender=${gender}`;
    } else if (gender) {
      searchUrl = searchUrl + `?gender=${gender}`;
    }
    return http.get(searchUrl);
  }
  previous(url) {
    return http.get(url);
  }
  next(url) {
    return http.get(url);
  }
}
export default new DataService();
