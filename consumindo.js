
function consumindo() {
  
  fetch('https://api.github.com/users/afreeluisaqt/repos')
  .then(response => response.json())
  .then(data => {

   /*  var td = document.createElement("td");
    td.innerHTML = `${data.id}`

    document.getElementById("conte").appendChild(td) */


    let idrepo = document.getElementById('idrepo')
    let nomeRepo = document.getElementById('nomeRepo')
    let linkRepo = document.getElementById('linkRepo')

    data.forEach(data => {
      document.getElementById('idrepo').innerHTML +=  "<td/>" +"<p/>" + data.id;
      document.getElementById('nomeRepo').innerHTML +=  "<td/>" + "<p/>" + data.name;
      document.getElementById('linkRepo').innerHTML +=   "<td/>" + "<p/>" + data.html_url;
     
    });
    
    // content.innerHTML =
     
    //   ` <tr>
    //     <td>${data.id}</td>
    //     <td>${data.name}</td>
    //     <td>${data.html_url}</td>
    //     </tr> 

    //   `;
    
    
    console.log(data)
    
    
  })
  

    
  
.catch(e => console.log('Deu Erro:' + e))
  
  

}

consumindo(); 
