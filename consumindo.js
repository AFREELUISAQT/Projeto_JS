
// ---- S I T E   E M   C O N S T R U Ç Ã O ----

async function start() {
  const api = async () => {
    const response = await fetch('https://api.github.com/users/afreeluisaqt/repos');
    const data = await response.json();
    return data;
  }
  const content = document.getElementById('content')
  const data = await api();

  console.table(data);

  content.innerHTML = `
    
    <tr>
      <td scope="row">${data.id}</td>
      <td>${data.name}</td>
      <td>${data.html_url}</td>
  </tr> 
    
    `
}

start();
