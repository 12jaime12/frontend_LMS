import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";
import "./Dashboard.css";
import React from "react";
import Button from "../../components/ui/Button";
import { H2C } from "../../components/ui";
import {LayoutFlex, LayoutForm, LayoutInline} from "../../components/Layout"

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const navigateFunction = (route) => {
    const ruta = `/${route}`;
    navigate(ruta);
  };

  console.log(user);
  return (
    <>
    
      <div>
        <ul  className="nav">
          <li>
          <LayoutFlex direction="row" color="white" padding="0.5rem" gap="1rem">
          <LayoutForm direction="column" heigth={50} padding="0.5rem" gap="1rem">
         
            <H2C text="Conócenos" width="pequeño"/>
              <p>
                Lengedary Motorsport es una comunidad creada para reunir a los
                amantes de los coches y, además, encontrar diferentes
                funcionalidades.
              </p>
              <Button type="submit" text="Saber más" variant="contained" color="white"/>
            </LayoutForm>
            <img
              src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1686737065/logoredondo-removebg-preview_uidph4.png"
              alt="segundoLogo"
              className="ConocenosImg"
            />
            </LayoutFlex>
          </li>
          
          <li>
          <LayoutFlex direction="row" color="white" padding="0.5rem" gap="1rem">
            <img
              src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687246794/7caf41ae44f772efd62df44450c72947d871dea699073065a3ef8367b7f006ba5bfa37dc66dbf7ec896d300ba8f69ac31578455787ae89322ba47c_1280_bcan6x.jpg"
              alt="catalogo"
              className="CatalogoImg"
            />
            <div className="Catalogo">
            <LayoutForm direction="column" heigth={50} padding="0.5rem" gap="1rem">
            <H2C text="Catálogo" width="pequeño"/>
              <p>
                Podrás descubrir los últimos modelos de nuestras marcas
                colaboradoras y personalizar tu coche en tiempo real.
              </p>
              <Button
              text="Saber más"
              action={() => navigate("/catalogo")}
              variant="contained"
              color="white"
            />
            </LayoutForm>
            </div>
            </LayoutFlex>
          </li>
          <li>
          <LayoutFlex direction="row" color="white" padding="0.5rem" gap="1rem">
            <div className="Comprayvende">
            <LayoutForm direction="column" heigth={50} padding="0.5rem" gap="1rem">
            <H2C text="Compra y vende" width="medio"/>
              <p>
                ¿Necesitas vender tu coche?¿Estás en busca de un coche de
                segunda mano? Esta es tu sección. Aquí encontrarás lo que
                buscas, o podrás publicar el coche que quieras vender. Con una
                sección de comentarios donde compartir con el resto de los
                usuarios.
              </p>
              <Button
              text="Saber más"
              action={() => navigate("/compraryvender")}
              variant="contained"
              color="white"
            />
            </LayoutForm>
            </div>
            
            <img
              src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687246794/993409168-0_dmj2q2.jpg"
              alt="Compra y vende"
              className="comprayvendeImg"
            />
            </LayoutFlex>
          </li>
          <li>
          <LayoutFlex direction="row" color="white" padding="0.5rem" gap="1rem">
            <img
              src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687246794/25b4391b79de1d76fb565d9a92c406a33c6b2a93d040761dca90c7163699c6a41d552b001665594e936a882820e733b055bd5da60cc0f8e45d4d9b_1280_qvgp7l.jpg"
              alt="Taller"
              className="tallerImg"
            />
            <LayoutForm direction="column" heigth={50} padding="0.5rem" gap="1rem">
            <div className="Taller">
            
            <H2C text="Taller" width="pequeño"/>
              <p>
                Accede a nuestra red de Talleres asociados. Seleccionados por
                sus servicios de la mayor calidad y cercanía para dejar tu coche
                en las mejores manos.
              </p>
              
              <Button
              text="Saber más"
              action={() => navigate("/taller")}
              variant="contained"
              color="white"
            />
            </div>
            </LayoutForm>
            </LayoutFlex>
          </li>
        </ul>
        <div className="div-info">
          <ul className="ul-info">
            <li>
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687255176/gift_vouwzw.png"
                alt="Oportunidades"
              />
              <h2>Oportunidades</h2>
              <p>
                Las mejores opciones en servicio calidad y precio, para nuestros
                clientes.
              </p>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687255174/cube_yddwhl.png"
                alt="Diseño"
              />
              <h2>Diseño</h2>
              <p>
                Página intuitiva y facil de usar para ofrecer una experiencia
                óptima.
              </p>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687255172/medal-2_jpep79.png"
                alt="Calidad"
              />
              <h2>Calidad</h2>
              <p>
                Garantía de calidad en todos nuestros servicios. Gracias a la
                confianza de los usuarios
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
