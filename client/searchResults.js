
async function getByID() {
  let endpoint = './api/search/' + document.querySelector('#movieId').value 
  const message = document.querySelector('#results')
  const clearButton = document.querySelector('#clear')
  console.log(endpoint)
  const request = await fetch(endpoint)
  const movies = await request.json()
  const movieSet = new Set();
  
  movies.forEach((movie) => {
      movie.forEach((data) => {
        movieSet.add(data.name);
      });
  });

  movieSet.forEach((movie) =>{
    message.innerHTML += `
  <li>                    
      <div class="column">
              <th>${(movie)}</th>
      </div>
  </li>
  `
  } )
  
 function clearSet(){
    // looping through each child of the search results list and remove each child
    while (movieSet.firstChild){
      movieSet.removeChild(movieSet.firstChild)
    }
  }
  
  clearButton.addEventListener("click", () => {
    clearSet()
  })
}

const send = document.querySelector('#submit');
send.onclick = getByID;
