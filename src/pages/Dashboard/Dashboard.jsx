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
      <div>
        <img 
        src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687252466/hpn-l-hondatyper-2560x1440-d70b_wvkrs1.jpg"
        alt="imagenprincipal"
        className="ImgPrincipalDash"
        /> 
        <ul  className="nav">
          {/*--------------- CONTAINER LOGO------------------------------- */}
          <li>
            <LayoutFlex direction="row" color="white" padding="3rem" gap="10rem">
              
            <LayoutForm direction = "column" color="#f2f2f2" width="50vw"  padding = "2rem" gap="1rem">
                <H2C text="Conócenos" width="pequeño"/>
                <PC text="Lengedary Motorsport es una comunidad creada para reunir a los
                  amantes de los coches y, además, encontrar diferentes
                  funcionalidades." width="extralargo"></PC>
                <Button type="submit" text="Saber más" variant="contained" color="white"/>
                </LayoutForm>
              
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1686737065/logoredondo-removebg-preview_uidph4.png"
                alt="segundoLogo"
                className="Img-Dashboard ConocenosImg"
              />
            </LayoutFlex>
            
          </li>
          
          <li className="li-catalogo">
          <LayoutFlex direction="row" color="white" padding="3rem" gap="10rem">
            <figure>
              <LayoutAbsolute color="transparent" direction= "row" zindex="2" top="220vh" bottom="0" right="0" left="0">
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
                <LayoutRelative color="transparent" margin="150px" zindex="3" left="350px" right="0" bottom="100px" top="0">
                <LayoutForm direction = "column" color="#f2f2f2" width="40vw"  padding = "2rem" gap="1rem">
                  <H2C text="Catálogo" width="pequeño"/>
                  <PC text="Podrás descubrir los últimos modelos de nuestras marcas colaboradoras y personalizar tu coche en tiempo real."
                  width="extralargo"></PC>
                
                  <Button
                  text="Saber más"
                  action={() => navigate("/catalogo")}
                  variant="contained"
                  color="white"
                  />
                  </LayoutForm>
                {/* </div> */}
                </LayoutRelative>
            </figure>
            </LayoutFlex>
          </li>
          <li style={{margin: "13rem"}}> 
          <LayoutFlex direction="row" color="white" padding="3rem" gap="10rem">
           <figure>
            <LayoutAbsolute color="#f2f2f2" direction="column" zindex="80"  top="260vh" bottom="0" right="40vh" left="50px">
            {/* <div className="Comprayvende" style={{position:"absolute"}}> */}
            <LayoutForm direction = "column" zindex="5" color="#f2f2f2" width="50vw"  padding = "2rem" gap="1rem">
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
            </LayoutForm>
            {/* </div> */}
            </LayoutAbsolute>
            <LayoutRelative color="none" margin="0" zindex="4" left="300px" right="0" bottom="0" top="0">
            <img
              src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687246794/993409168-0_dmj2q2.jpg"
              alt="Compra y vende"
              className="Img-Dashboard comprayvendeImg"
              // style={{position: "relative", left: "300px", bottom: "100px"}}
            />
            </LayoutRelative>
            </figure>
            </LayoutFlex>
          </li>
          <li> 
          <LayoutFlex direction="row" color="white" padding="3rem" gap="10rem">
          <LayoutAbsolute color="none" direction="row" zindex="2"  top="370vh" bottom="0" right="0" left="0">
            <img
              src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687246794/25b4391b79de1d76fb565d9a92c406a33c6b2a93d040761dca90c7163699c6a41d552b001665594e936a882820e733b055bd5da60cc0f8e45d4d9b_1280_qvgp7l.jpg"
              alt="Taller"
              className="Img-Dashboard tallerImg"
            />
           </LayoutAbsolute>
            {/* <div className="Taller"> */}
            <LayoutRelative color="#transparent" margin="0" zindex="3" left="400px" right="0" bottom="" top="">
            <LayoutForm direction = "column" color="#f2f2f2" width="40vw"  padding = "2rem" gap="1rem">
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
              </LayoutForm>
              </LayoutRelative>
            {/* </div> */}
            </LayoutFlex>
          </li>
        </ul>
        
        <LayoutInline gap="1rem" padding="5rem">    
        <LayoutForm direction = "column" color="#f2f2f2" width="300px"  padding = "2rem" gap="1rem">
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687255176/gift_vouwzw.png"
                alt="Oportunidades"
                className="imgiconos"
              />
              <H2C text="Oportunidades" width="largo"></H2C>
              <PC text="Las mejores opciones en servicio, calidad y precio, para nuestros
                clientes." width="largo"></PC>
         </LayoutForm>   
         <LayoutForm direction = "column" color="#f2f2f2" width="300px" padding = "2rem" gap="1rem">
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687255174/cube_yddwhl.png"
                alt="Diseño"
                className="imgiconos"
              />
              <H2C text="Diseño" width="largo"></H2C>
              <PC text="Página intuitiva y fácil de usar para ofrecer una experiencia
                óptima." width="largo"></PC>
          </LayoutForm>
          <LayoutForm direction = "column" color="#f2f2f2"width="300px" padding = "2rem" gap="1rem">
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687255172/medal-2_jpep79.png"
                alt="Calidad"
                className="imgiconos"
              />
              <H2C text="Calidad" width="largo"></H2C>
              <PC text="Garantía de calidad en todos nuestros servicios. Gracias a la
                confianza de los usuarios." width="largo"></PC>
          </LayoutForm>
         </LayoutInline>
       </div>
     
    </>
  );
};

export default Dashboard;
