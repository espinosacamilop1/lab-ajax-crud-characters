const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then((responseFromAPI)=>{
      const data = responseFromAPI.data;
      //clears the div
      const div = document.querySelector(".characters-container");
      while(div.firstChild) {
          div.removeChild(div.firstChild);
      }
      const parentContainer = document.querySelector(".characters-container");
        for(let i = 0; i < data.length; i++) {
          // console.log(`character: ${i}`, data[i].name)
          let divCreate = document.createElement('div')

          divCreate.className = 'character-info'
          divCreate.innerHTML = `
          <div class="id"> Id:<span>${data[i].id}</span></div>   
          <div class="name"> Name:<span>${data[i].name}</span></div>  
          <div class="occupation"> Occupation:<span>${data[i].occupation}</span></div>  
          <div class="cartoon"> Cartoon:<span>${data[i].cartoon}</span></div>
          <div class="weapon"> Weapon:<span>${data[i].weapon}</span></div>`
          parentContainer.appendChild(divCreate);
        }
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
      
      const idValue = document.querySelector('.id-value').value;
      charactersAPI.getOneRegister(idValue).then((responseFromAPI) =>{
        const data = responseFromAPI.data;
        const div = document.querySelector(".characters-container");
        const parentContainer = document.querySelector(".characters-container");
        const divCreate = document.createElement("div");

        while(div.firstChild) {
            div.removeChild(div.firstChild);
        }
        
        divCreate.className = 'character-info';
        divCreate.innerHTML = `
        <div class="id"> Id:<span>${data.id}</span></div>   
        <div class="name"> Name:<span>${data.name}</span></div>  
        <div class="occupation"> Occupation:<span>${data.occupation}</span></div>  
        <div class="cartoon"> Cartoon:<span>${data.cartoon}</span></div>
        <div class="weapon"> Weapon:<span>${data.weapon}</span></div>`
        parentContainer.appendChild(divCreate);

      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    let id = document.getElementById('character-id-delete').value;
    const deleteBtn = document.getElementById('delete-one');
    charactersAPI.deleteOneRegister(id)
    .then(() => deleteBtn.style.backgroundColor = 'green')
    .catch(() => deleteBtn.style.backgroundColor = 'red')
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    const deleteBtn = document.getElementById('send-data');
    let id = document.getElementById('id-value').value;
    let name = document.getElementById('edit-name').value;
    let occupation = document.getElementById('edit-occupation').value;
    let cartoon = document.getElementById('edit-cartoon').value;
    let weapon = document.getElementById('edit-weapon').value;

    const updatedCharacter = {name: name, occupation: occupation, cartoon: cartoon, weapon: weapon};

    charactersAPI.updateOneRegister(id, updatedCharacter)
    .then(() => deleteBtn.style.backgroundColor = 'green')
    .catch(() => deleteBtn.style.backgroundColor = 'red')
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    const deleteBtn = document.getElementById('send-data');
    const userInput = document.getElementById('new-character-form').elements
    const name = userInput.name.value;
    const occupation = userInput.occupation.value;
    const cartoon = userInput.cartoon.value;
    const weapon = userInput.weapon.value;

    const newCharacter = {name, occupation, cartoon, weapon};

    charactersAPI.createOneRegister(newCharacter)
    .then(() => deleteBtn.style.backgroundColor = 'green')
    .catch(() => deleteBtn.style.backgroundColor = 'red')
  });
});
