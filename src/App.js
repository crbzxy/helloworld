import "./App.scss";
require("aframe");


function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
      <a-scene shadow="type: basic">
        <a-assets>
          
        </a-assets>

        




{/* HABILITAR LUCES CON castShadow en plano y en objetos recibir sombra con propiedad shadow="receive:true"*/}
        <a-entity light="type: ambient; intensity: 0.7;" position="-5 3 1.5" />
        <a-entity light="type: point; intensity: 0.6; castShadow: true; color: #fffbbf"  position="2 4 0"  />
       

        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow="receive: true"/>
        <a-sphere position="0 1.25 -5" radius="1.25"shadow="receive: true" color="#EF2D5E" />
        <a-cylinder
          position="1 0.75 -3"
          radius="0.5"
          height="1.5"
          color="#FFC65D"
          shadow="receive: true"
          
        />

        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="4000"
          height="4000"
          color="#7BC8A4"
          shadow="receive: true"
        />
        <a-sky color="#87ceeb" />
      </a-scene>
    </div>
  );
}

export default App;
