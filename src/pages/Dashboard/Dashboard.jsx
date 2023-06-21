import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";
import "./Dashboard.css";
import React from "react";
import Button from "../../components/ui/Button";
import { H2C, ImgC } from "../../components/ui";
import { LayoutAbsolute, LayoutFlex, LayoutForm, LayoutInline, LayoutRelative } from "../../components/Layout";
import { LayoutPosition } from "../../components/Layout/LayoutPosition";



const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log(user);
  return (
    <>
      <div>
        <ul  className="nav">
          {/*--------------- CONTAINER LOGO------------------------------- */}
          <li>

          
            <LayoutFlex direction="row" color="white" padding="0.5rem" gap="1rem">
              <LayoutPosition direction="column"  >
                <H2C text="Conócenos" width="pequeño"/>
                <p className="pdashboard">
                  Lengedary Motorsport es una comunidad creada para reunir a los
                  amantes de los coches y, además, encontrar diferentes
                  funcionalidades.
                </p>
                <Button type="submit" text="Saber más" variant="contained" color="white"/>
              </LayoutPosition>
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1686737065/logoredondo-removebg-preview_uidph4.png"
                alt="segundoLogo"
                className="Img-Dashboard ConocenosImg"
              />
            </LayoutFlex>
          </li>
          
          <li className="li-catalogo">
            <figure>
              <LayoutAbsolute color="transparent">
                {/* <div> */}
               
                  <img
                    src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687246794/7caf41ae44f772efd62df44450c72947d871dea699073065a3ef8367b7f006ba5bfa37dc66dbf7ec896d300ba8f69ac31578455787ae89322ba47c_1280_bcan6x.jpg"
                    alt="catalogo"
                    className="Img-Dashboard CatalogoImg"
                    // style={{position: "absolute"}}
                  />
              
                {/* </div> */}
                </LayoutAbsolute>

                {/* <div className="Catalogo"> */}
                <LayoutRelative color="#f2f2f2">
                  <H2C text="Catálogo" width="pequeño"/>
                  <p className="pdashboard">
                  Podrás descubrir los últimos modelos de nuestras marcas colaboradoras y personalizar tu coche en tiempo real.
                  </p>
                  <Button
                  text="Saber más"
                  action={() => navigate("/catalogo")}
                  variant="contained"
                  color="white"
                  />
                {/* </div> */}
                </LayoutRelative>
            </figure>
          </li>


          <li style={{margin: "13rem"}}> 
  
           <figure>
           <LayoutAbsolute color="f2f2f2">
            {/* <div className="Comprayvende" style={{position:"absolute"}}> */}
              <H2C text="Compra y vende" width="medio"/>
              <p className="pdashboard">
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
            {/* </div> */}
            </LayoutAbsolute>
            <LayoutRelative color="transparent">
            <img
              src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687246794/993409168-0_dmj2q2.jpg"
              alt="Compra y vende"
              className="Img-Dashboard comprayvendeImg"
              // style={{position: "relative", left: "300px", bottom: "100px"}}
            />
            </LayoutRelative>
            </figure>
          </li>


          <li> 
          
            <img
              src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687246794/25b4391b79de1d76fb565d9a92c406a33c6b2a93d040761dca90c7163699c6a41d552b001665594e936a882820e733b055bd5da60cc0f8e45d4d9b_1280_qvgp7l.jpg"
              alt="Taller"
              className="Img-Dashboard tallerImg"
            />
           
            <div className="Taller">
            
            <H2C text="Taller" width="pequeño"/>
              <p >
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
            
          </li> 
        </ul>
        
        <div className="div-info">
          <ul className="ul-info" >
            <li>
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687255176/gift_vouwzw.png"
                alt="Oportunidades"
              />
              <h2>Oportunidades</h2>
              <p className="pdashboard">
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
              <p className="pdashboard">
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
              <p className="pdashboard">
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
