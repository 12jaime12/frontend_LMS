import './LikeCatalogo.css';

import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { useAuth } from '../../contexts/authContext';
import { addLike } from '../../service/API_proyect/catalogo.service';

const ToggleButtonCatalogo = ({ car, setAllElementByPather, variable }) => {
  console.log(car);
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleAddToFavorites = async () => {
    setLoading(true);
    setRes(await addLike({ id: car._id, variable: variable }));
    setLoading(false);
  };
  useEffect(() => {
    if (res?.status == 200) {
      console.log(res);
      setAllElementByPather(() => res.data.update);
    }
  }, [res]);

  return (
    <button
      style={{ background: 'none', border: 'none' }}
      onClick={handleAddToFavorites}
      disabled={loading || user == null}
    >
      {user ? (
        car.like.includes(user.id) ? (
          <AiTwotoneHeart size={15} className="favorite-icon-red" />
        ) : (
          <AiOutlineHeart size={15} className="favorite-icon" />
        )
      ) : null}

      {!user && <AiTwotoneHeart size={15} className="favorite-icon-red" />}
    </button>
  );
};
export default ToggleButtonCatalogo;
