document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector("#form");
 
  form.addEventListener("submit", function(event) {
    event.preventDefault();
   
    if (form.checkValidity()) {
      alert("O formulário foi enviado com sucesso!");
      form.reset();
    } 
    
    else {
      alert("Preencha todos os campos obrigatórios antes de enviar.");
    }
  });
});