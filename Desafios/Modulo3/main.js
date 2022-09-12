const usuario = CampoRequerido('#usuario');
const clave = CampoRequerido('#clave');

document.querySelector('#frmLogin').addEventListener('submit', function(e){
    e.preventDefault();

    if(
        usuario.isValid() &&
        clave.isValid()
    )
        document.querySelector('#frmLogin').submit();
});