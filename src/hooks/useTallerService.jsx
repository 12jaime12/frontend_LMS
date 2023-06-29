import React from 'react';
import Swal from 'sweetalert2';
import { getByIdUser } from '../service/API_proyect/user.service';
import { getCocheById } from '../service/API_proyect/coche.service';

const useTallerService = async (res, coche, taller) => {
  if (res?.status == 200) {
    Swal.fire({
      icon: 'success',
      title: res.request.responseText,
      text: 'Por motivos de seguridad serás redirigido a la pagina principal 😁',
      showConfirmButton: true,
    });
  }

  if (
    res?.request?.status == 404 &&
    res?.request?.response.includes('incluye')
  ) {
    Swal.fire({
      icon: 'error',
      title: res.request.response,
      text: 'Revisa tus datos para comprobar que ese coche ya tiene cita en el taller seleccionado',
      showConfirmButton: true,
    });
  }
};

export default useTallerService;
