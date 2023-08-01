import React from 'react';
import Swal from 'sweetalert2';

const useChangePasswordError = (res, setChangeOk) => {
  if (res?.status == 200) {
    Swal.fire({
      icon: 'success',
      title: 'Contraseña cambiada correctamente',
      showConfirmButton: false,
      timer: 3000,
    });
    setChangeOk(() => true);
  }

  if (res?.response?.data.includes('Contraseña incorrecta')) {
    Swal.fire({
      icon: 'error',
      title: 'La contraseña introducida no es correcta',
      text: 'Prueba de nuevo',
      showConfirmButton: false,
      timer: 3000,
    });
  }
};

export default useChangePasswordError;
