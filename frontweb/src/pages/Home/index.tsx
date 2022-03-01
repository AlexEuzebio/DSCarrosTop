import HomeCarImage from 'assets/img/home-car.png';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-card">
        <div className="home-image-container">
          <img src={HomeCarImage} alt="O carro perfeito para você" />
        </div>
        <div className="home-text-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>

      <div className="base-card bottom-card">
        <Link to="/catalog" className="nav-catalog-link">
          <button className="base-button btn btn-secondary">
            <h6>VER CATÁLOGO</h6>
          </button>
        </Link>
        <h5>Comece agora a navegar</h5>
      </div>
    </div>
  );
};

export default Home;
