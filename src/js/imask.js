import 'imask/dist/imask.min.js'

document.addEventListener('DOMContentLoaded', () => {

  const maskOptions = { 
    mask: '+{38} (000) 000-00-00'
  }

  document.querySelectorAll('.tel-input').forEach(inputElement => {
    IMask(inputElement, maskOptions) 

    var overwriteMask = IMask(inputElement,
      {
        mask: '+{38} (000) 000-00-00',
        lazy: false,
      }
    );
  });
    
})
