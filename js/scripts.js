// Accessibility: set current year
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year')?.textContent = new Date().getFullYear();
  document.getElementById('year2')?.textContent = new Date().getFullYear();
  document.getElementById('year3')?.textContent = new Date().getFullYear();

  // Simple input masks
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  function setCaretToEnd(el){
    const val = el.value;
    el.focus();
    el.setSelectionRange(val.length, val.length);
  }

  function maskCPF(v){
    return v
      .replace(/\D/g,'')
      .replace(/(\d{3})(\d)/,'$1.$2')
      .replace(/(\d{3})(\d)/,'$1.$2')
      .replace(/(\d{3})(\d{1,2})$/,'$1-$2')
      .slice(0,14);
  }

  function maskPhone(v){
    v = v.replace(/\D/g,'');
    if(v.length <= 10){
      v = v.replace(/(\d{2})(\d)/,'($1) $2')
           .replace(/(\d{4})(\d)/,'$1-$2');
    } else {
      v = v.replace(/(\d{2})(\d)/,'($1) $2')
           .replace(/(\d{5})(\d)/,'$1-$2');
    }
    return v.slice(0,15);
  }

  function maskCEP(v){
    return v.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2').slice(0,9);
  }

  if(cpf){
    cpf.addEventListener('input', (e)=>{ e.target.value = maskCPF(e.target.value); });
    cpf.addEventListener('blur', (e)=>{ e.target.value = maskCPF(e.target.value); });
  }
  if(telefone){
    telefone.addEventListener('input', (e)=>{ e.target.value = maskPhone(e.target.value); });
    telefone.addEventListener('blur', (e)=>{ e.target.value = maskPhone(e.target.value); });
  }
  if(cep){
    cep.addEventListener('input', (e)=>{ e.target.value = maskCEP(e.target.value); });
  }

  // Example of progressive enhancement for form: show a polite confirmation
  const form = document.getElementById('formCadastro');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        // Let HTML5 show native validation UI
        return;
      }
      e.preventDefault();
      // Simulate success (would be sent to backend in production)
      alert('Cadastro recebido! Obrigado por se envolver. Em breve entraremos em contato.');
      form.reset();
    });
  }

});
