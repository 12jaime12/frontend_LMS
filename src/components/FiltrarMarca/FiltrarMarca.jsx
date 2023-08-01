import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router';

const FiltrarMarca = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [send, setSend] = useState();
  const [res, setRes] = useState();
  const inputRef = useRef();

  return (
    <div>
      <h1>HOLAAAAAAAAAAAAAAAA</h1>
    </div>
  );
};

export default FiltrarMarca;
