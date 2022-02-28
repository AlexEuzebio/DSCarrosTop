import HomeCarImage from 'assets/img/home-car.png';
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="top-card">
          <div className="home-image-container">
            <img src={HomeCarImage} alt="O carro perfeito para você" />
          </div>
          <div className="home-text-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>

        <div className="bottom-card">
          <button className="btn btn-secondary">
            <h6>VER CATÁLOGO</h6>
          </button>
          <h5>Comece agora a navegar</h5>
        </div>
      </div>
    </>
  );
};

export default Home;
