import React from 'react';
import { useAuth } from '../../contexts/authContext';
import { Navigate } from 'react-router';

//PROTECTED-> Protegemos las rutas para que el usuario tenga que estar logeado, y en caso de que lo este tambien debe estar checkeado
export const Protected = ({ children }) => {
  const { user } = useAuth();

  if ((user == null) | (user?.check == false)) {
    localStorage.removeItem('user');
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

//PROTECTED GENERAL-> Protegemos las rutas para que el usuario tenga que estar logeado, sino lo llevamos a la pagina del login
export const ProtectedGeneral = () => {
  const { user } = useAuth();

  if (user == null) {
    return <Navigate to="/login" />;
  }
};

//PROTECTED CHECK-> Protegemos las rutas para que el usuario este checkeado. Si lo esta devolvemos el children (que sería la ruta protegida)
//                  y si no lo esta lo llevamos a la pagina de "checkCode" para que ponga el codigo de confirmacion
export const ProtectedCheck = ({ children }) => {
  const { user, allUser } = useAuth();

  if (user?.check == true || allUser?.data?.user?.check == true) {
    return children;
  } else {
    return <Navigate to="checkCode" />;
  }
};

//PROTECTED CHECK CHILDREN-> Protegemos las rutas para que en caso de estar checkeado nos lleve automaticamente al dashboard, y en caso contrario
//                           nos lleva al children. Esto se hace en la ruta de "checkCode" para que el usuario no pueda volver a ella en
//                           caso de que ya este checkeado, pq asi siempre que quiera acceder a esta ruta le redirige al dashboard, y en caso
//                           de no estar checkeado si que le deja acceder para que introduzca el codigo de confirmacion
export const ProtectedCheckChildren = ({ children }) => {
  const { user, allUser } = useAuth();
  if (allUser?.data?.user?.check == true || user?.check == true) {
    return <Navigate to="/dashboard" />;
  } else {
    return children;
  }
};
