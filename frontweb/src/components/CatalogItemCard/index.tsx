import './styles.css';
import CatalogCarImage from 'assets/img/catalog-car.png';

const CatalogItemCard = () => {
  return (
    <div className="base-card catalog-item-card">
      <div className="image-container">
        <img src={CatalogCarImage} alt="Nome do produto" />
      </div>
      <div className="text-container">
        <h3>Audi Supra TT</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <div className="item-btn-container">
        <button type="submit" className="base-button btn btn-secondary buy-btn">
          <h6>COMPRAR</h6>
        </button>
      </div>
    </div>
  );
};

export default CatalogItemCard;
