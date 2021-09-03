class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`).then(function (responseFromAPI) {
      return responseFromAPI;
    })
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`).then(function (responseFromAPI) {
      //console.log(responseFromAPI)
      return responseFromAPI;
    })
  }

  createOneRegister (newCharacter) {
    return axios.post(`${this.BASE_URL}/characters`, newCharacter)
  }

  updateOneRegister (id, updatedCharacter) {
   return axios.put(`${this.BASE_URL}/characters/${id}`, updatedCharacter)
    
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
