import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";
import "./Dashboard.css";
import React from "react";
import Button from "../../components/ui/Button";
import { H2C, ImgC, PC } from "../../components/ui";
import { LayoutAbsolute, LayoutFlex, LayoutForm, LayoutInfo, LayoutInline, LayoutRelative } from "../../components/Layout";
import { LayoutPosition } from "../../components/Layout/LayoutPosition";



const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log(user);
  return (
    <>
      <div className="dashboard">
        <img 
        src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687252466/hpn-l-hondatyper-2560x1440-d70b_wvkrs1.jpg"
        alt="imagenprincipal"
        className="ImgPrincipalDash"
        /> 
        <ul  className="nav">
          {/*--------------- CONTAINER LOGO------------------------------- */}
          <li className="li-conocenos">
            <div className="boxConocenos">
                <H2C text="Conócenos" width="pequeño"/>
                <PC text="Lengedary Motorsport es una comunidad creada para reunir a los
                  amantes de los coches y, además, encontrar diferentes
                  funcionalidades." width="extralargo"></PC>
                <Button type="submit" text="Saber más" variant="contained" color="white"/>
              </div>
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1686737065/logoredondo-removebg-preview_uidph4.png"
                alt="segundoLogo"
                className="Img-Dashboard ConocenosImg"
              />
          </li>
          <li className="li-catalogo">
                  <img
                    src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687246794/7caf41ae44f772efd62df44450c72947d871dea699073065a3ef8367b7f006ba5bfa37dc66dbf7ec896d300ba8f69ac31578455787ae89322ba47c_1280_bcan6x.jpg"
                    alt="catalogo"
                    className="Img-Dashboard CatalogoImg"
                    // style={{position: "absolute"}}
                  />

                <div className="boxCatalogo"> 
                  <H2C text="Catálogo" width="pequeño"/>
                  <PC text="Podrás descubrir los últimos modelos de nuestras marcas colaboradoras y personalizar tu coche en tiempo real."
                  width="extralargo"></PC>
                
                  <Button
                  text="Saber más"
                  action={() => navigate("/catalogo")}
                  variant="contained"
                  color="white"
                  />
                </div>
          </li>
          <li className="li-comprayvende">
            <div className="boxComprayvende" >
              <H2C text="Compra y vende" width="medio"/>
              <PC text="¿Necesitas vender tu coche?¿Estás en busca de un coche de
                segunda mano? Esta es tu sección. Aquí encontrarás lo que
                buscas, o podrás publicar el coche que quieras vender. Con una
                sección de comentarios donde compartir con el resto de los
                usuarios." width="extralargo"></PC>
              <Button
              text="Saber más"
              action={() => navigate("/compraryvender")}
              variant="contained"
              color="white"
            />
            </div>
            <img
              src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687246794/993409168-0_dmj2q2.jpg"
              alt="Compra y vende"
              className="Img-Dashboard comprayvendeImg"
              // style={{position: "relative", left: "300px", bottom: "100px"}}
            />
          </li>
          <li className="li-taller"> 
            <img
              src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687246794/25b4391b79de1d76fb565d9a92c406a33c6b2a93d040761dca90c7163699c6a41d552b001665594e936a882820e733b055bd5da60cc0f8e45d4d9b_1280_qvgp7l.jpg"
              alt="Taller"
              className="Img-Dashboard tallerImg"
            />
            <div className="boxTaller"> 
            <H2C text="Taller" width="pequeño"/>
              <PC text="Accede a nuestra red de Talleres asociados. Seleccionados por
                sus servicios de la mayor calidad y cercanía para dejar tu coche
                en las mejores manos." width="extralargo"></PC>
              
              <Button
                text="Saber más"
                action={() => navigate("/taller")}
                variant="contained"
                color="white"
              />
            </div>
          </li>
        </ul>
        <div className="nuestrosvalores">
        <div className="oportunidades">
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687255176/gift_vouwzw.png"
                alt="Oportunidades"
                className="imgiconos"
              />
              <H2C text="Oportunidades" width="largo"></H2C>
              <PC text="Las mejores opciones en servicio, calidad y precio, para nuestros
                clientes." width="largo"></PC>
                </div>
                <div className="diseño">
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687255174/cube_yddwhl.png"
                alt="Diseño"
                className="imgiconos"
              />
              <H2C text="Diseño" width="largo"></H2C>
              <PC text="Página intuitiva y fácil de usar para ofrecer una experiencia
                óptima." width="largo"></PC>
   </div>
   <div className="calidad">
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687255172/medal-2_jpep79.png"
                alt="Calidad"
                className="imgiconos"
              />
              <H2C text="Calidad" width="largo"></H2C>
              <PC text="Garantía de calidad en todos nuestros servicios. Gracias a nuestros proveedores." width="largo"></PC>
              </div>
              </div>
              </div>
       
     
    </>
  );
};

export default Dashboard;
