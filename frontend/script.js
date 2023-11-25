/* const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("name");
    const files = document.getElementById("files");
    const formData = new FormData();
    formData.append("name", name.value);
    for(let i =0; i < files.files.length; i++) {
            formData.append("files", files.files[i]);
    }
    fetch("http://localhost:5000/", {
        method: 'POST',
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
    })
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));
} */

function uploadFile() {

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
  
    if (!file) {
      alert('Veuillez sélectionner un fichier.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
    alert (file);
  
    fetch('http://localhost:8500/upload', {
  
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(message => {
      document.getElementById('message').innerText = message;
    })
    .catch(error => {
      console.error('Erreur lors du téléchargement du fichier:', error);
      document.getElementById('message').innerText = 'Erreur lors du téléchargement du fichier.';
    });
  }


  