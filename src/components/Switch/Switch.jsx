import {
  Bmw_iX_negro_2,
  Bmw_iX_negro_1,
  Bmw_iX_azul_2,
  Bmw_iX_azul_1,
  Bmw_iX_gris_1,
  Bmw_iX_gris_2,
  Bmw_iX_blanco_1,
  Bmw_iX_blanco_2,
} from '../../data/personalizar.data';

import React from 'react';

export const Switch = (array) => {
  switch (array) {
    case 'Bmw_iX_negro_1':
      return Bmw_iX_negro_1;
    case 'Bmw_iX_negro_2':
      return Bmw_iX_negro_2;
    case 'Bmw_iX_azul_1':
      return Bmw_iX_azul_1;
    case 'Bmw_iX_azul_2':
      return Bmw_iX_azul_2;
    case 'Bmw_iX_gris_1':
      return Bmw_iX_gris_1;
    case 'Bmw_iX_gris_2':
      return Bmw_iX_gris_2;
    case 'Bmw_iX_blanco_1':
      return Bmw_iX_blanco_1;
    case 'Bmw_iX_blanco_2':
      return Bmw_iX_blanco_2;
  }
};
