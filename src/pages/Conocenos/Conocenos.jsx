import { Link } from 'react-router-dom';
import './Conocenos.css';

import React from 'react';

const Conocenos = () => {
  return (
    <div className="contenedor-about">
      <div className="content-descripcion">
        <h2>SOBRE NOSOTROS</h2>
        <p className="text-about">
          Son muchos los apasionados del mundo del motor, especialmente de los
          coches. Sin embargo, a veces puede ser difícil que las personas de tu
          entorno compartan los mismos hobbies. Legendary Motorsport es una
          comunidad donde los usuarios podrán disfrutar y compartir su pasión
          por los coches, a través de diferentes espacios. Además, la comunidad
          de usuarios podrá dar y recibir feedback de otros usuarios,
          interactuando mediante likes a sus vehículos favoritos y comentarios
          donde compartir opiniones e impresiones. Legendary Motorsport contará
          con un espacio destinado a la compra de coches de las marcas Honda y
          BMW. El atractivo de este espacio es que los usuarios podrán
          personalizar el modelo de coche a comprar. En el espacio de venta, los
          usuarios podrán poner a la venta sus vehículos. Además de la
          compra-venta de vehículos, los usuarios contarán con un espacio de
          Taller donde podrán reparar sus vehículos eligiendo el taller más
          cercano a su vivienda.
        </p>
      </div>
      <div className="andrea">
        <img
          className="img-conocenos"
          src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1685632147/andrea_v1aneu.jpg"
          alt=""
        />
        <section>
          <div className="datos">
            <h3>Datos de contacto</h3>
            <p>
              <strong>Nombre: </strong>Andrea
            </p>
            <p>
              <strong>Apellidos: </strong>de Antonio Ortiz
            </p>
            <div className="mailConocenos">
              <img
                className="img-mail"
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687965931/sobre2_cmlizj.png"
                alt="mail"
              ></img>
              <p>andreadeantonioortiz@gmail.com</p>
            </div>
            <div className="logos-redes">
              <Link
                to="http://www.linkedin.com/in/andrea-de-antonio-ortiz-181b4826"
                target="_blank"
              >
                <img
                  className="img-linkedin"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/linkedin_zpt7lh.png"
                  alt="linkedin"
                ></img>
              </Link>
              <Link to="https://github.com/andreafcb1" target="_blank">
                <img
                  className="img-github"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/github_yusdze.png"
                  alt="github"
                />
              </Link>
            </div>
          </div>
          <div className="description">
            <h3>Descripción</h3>
            <p>
              FullStack Developer con manejo de tecnologías de Front-end y
              Back-end.
            </p>
          </div>
        </section>
      </div>
      <div className="jaime">
        <img
          className="img-conocenos"
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687861733/jaime_kqdp6z.jpg"
          alt=""
        />
        <section>
          <div className="datos">
            <h3>Datos de contacto</h3>
            <p>
              <strong>Nombre: </strong>Jaime
            </p>
            <p>
              <strong>Apellidos: </strong>Calvo Cuadrado
            </p>
            <div className="mailConocenos">
              <img
                className="img-mail"
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687965931/sobre2_cmlizj.png"
                alt="mail"
              ></img>
              <p>12jaimejcc12@gmail.com</p>
            </div>
            <div className="logos-redes">
              <Link
                to="http://www.linkedin.com/in/jaime-calvo-cuadrado-253a16271"
                target="_blank"
              >
                <img
                  className="img-linkedin"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/linkedin_zpt7lh.png"
                  alt="linkedin"
                ></img>
              </Link>
              <Link to="https://github.com/12jaime12" target="_blank">
                <img
                  className="img-github"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/github_yusdze.png"
                  alt="github"
                />
              </Link>
            </div>
          </div>
          <div className="description">
            <h3>Descripción</h3>
            <p>
              Desarrollador Fullstack con conocimientos adquiridos en el Grado
              Superior de Desarrollo de Aplicaciones Web y perfeccionados con un
              Bootcamp Web Development.
            </p>
          </div>
        </section>
      </div>
      <div className="samu">
        <img
          className="img-conocenos"
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687861836/samu_qefbz7.jpg"
          alt=""
        />
        <section>
          <div className="datos">
            <h3>Datos de contacto</h3>
            <p>
              <strong>Nombre: </strong>Samuel
            </p>
            <p>
              <strong>Apellidos: </strong>Martínez González
            </p>
            <div className="mailConocenos">
              <img
                className="img-mail"
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687965931/sobre2_cmlizj.png"
                alt="mail"
              ></img>
              <p>3samuelmg@gmail.com</p>
            </div>
            <div className="logos-redes">
              <Link
                to="http://www.linkedin.com/in/samuel-martinez-gonzalez-640594266"
                target="_blank"
              >
                <img
                  className="img-linkedin"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/linkedin_zpt7lh.png"
                  alt="linkedin"
                ></img>
              </Link>
              <Link to="https://github.com/Samuelson23" target="_blank">
                <img
                  className="img-github"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/github_yusdze.png"
                  alt="github"
                />
              </Link>
            </div>
          </div>
          <div className="description">
            <h3>Descripción</h3>
            <p>
              Me dedico al Fullstack Development y mis principales aptitudes
              vienen de la mano de JavaScript, ReactJS y NodeJS, controlando
              desde el backend hasta el frontend complementándolo con una
              interfaz gráfica que sea visiblemente bonita. Cada día intento
              mejorar mi forma de trabajar ya sea con buenos tutoriales, cursos
              actualizados o leyendo documentación.
            </p>
          </div>
        </section>
      </div>
      <div className="carlos">
        <img
          className="img-conocenos"
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687861923/desconocido_u4qaqk.webp"
          alt=""
        />
        <section>
          <div className="datos">
            <h3>Datos de contacto</h3>
            <p>
              <strong>Nombre: </strong>Carlos
            </p>
            <p>
              <strong>Apellidos: </strong>Membrado de la Torre
            </p>
            <div className="mailConocenos">
              <img
                className="img-mail"
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687965931/sobre2_cmlizj.png"
                alt="mail"
              ></img>
              <p>cmdt367@gmail.com</p>
            </div>
            <div className="logos-redes">
              <Link
                to="http://www.linkedin.com/in/carlos-membrado-de-la-torre-b76b6a271"
                target="_blank"
              >
                <img
                  className="img-linkedin"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/linkedin_zpt7lh.png"
                  alt="linkedin"
                ></img>
              </Link>
              <Link to="https://github.com/cmdt367" target="_blank">
                <img
                  className="img-github"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/github_yusdze.png"
                  alt="github"
                />
              </Link>
            </div>
          </div>
          <div className="description">
            <h3>Descripción</h3>
            <p>Fullstack Web Developer.</p>
          </div>
        </section>
      </div>
      <div className="alber">
        <img
          className="img-conocenos"
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687861923/desconocido_u4qaqk.webp"
          alt=""
        />
        <section>
          <div className="datos">
            <h3>Datos de contacto</h3>
            <p>
              <strong>Nombre: </strong>Alberto
            </p>
            <p>
              <strong>Apellidos: </strong>Santamaría Fajardo
            </p>
            <div className="mailConocenos">
              <img
                className="img-mail"
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687965931/sobre2_cmlizj.png"
                alt="mail"
              ></img>
              <p>alberto.santamaria.ilustracion@outlook.es</p>
            </div>
            <div className="logos-redes">
              <Link
                to="http://www.linkedin.com/in/alberto-santamaria-26a122272"
                target="_blank"
              >
                <img
                  className="img-linkedin"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/linkedin_zpt7lh.png"
                  alt="linkedin"
                ></img>
              </Link>
              <Link to="https://github.com/albertosantamari" target="_blank">
                <img
                  className="img-github"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/github_yusdze.png"
                  alt="github"
                />
              </Link>
            </div>
          </div>
          <div className="description">
            <h3>Descripción</h3>
            <p>
              Fullstack Developer, con conocimientos en JavaScript, Html, Css,
              Node, React, Vite y Emotion.
            </p>
          </div>
        </section>
      </div>
      <div className="laura">
        <img
          className="img-conocenos"
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687861724/laura_evmehf.jpg"
          alt=""
        />
        <section>
          <div className="datos">
            <h3>Datos de contacto</h3>
            <p>
              <strong>Nombre: </strong>Laura
            </p>
            <p>
              <strong>Apellidos: </strong>Martínez Paredes
            </p>
            <div className="mailConocenos">
              <img
                className="img-mail"
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687965931/sobre2_cmlizj.png"
                alt="mail"
              ></img>
              <p>laura.prds@hotmail.com</p>
            </div>
            <div className="logos-redes">
              <Link
                to="http://www.linkedin.com/in/laura-m-86802b160"
                target="_blank"
              >
                <img
                  className="img-linkedin"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/linkedin_zpt7lh.png"
                  alt="linkedin"
                ></img>
              </Link>
              <Link
                to="https://github.com/LauraMartinezParedes"
                target="_blank"
              >
                <img
                  className="img-github"
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687962988/github_yusdze.png"
                  alt="github"
                />
              </Link>
            </div>
          </div>
          <div className="description">
            <h3>Descripción</h3>
            <p>
              Dedicada siempre a la atención al cliente en el sector de la moda.
              Ahora he decidido dar un cambio radical a mi vida y dedicarme a
              este sector de nuevas tecnologías. Es un cambio motivado por el
              querer seguir creciendo, y especialmente aprender como
              desarrolladora de Full Stack Developer.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Conocenos;
