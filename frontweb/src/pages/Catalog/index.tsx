import CatalogGrid from 'components/CatalogGrid';
import Navbar from 'components/Navbar';
import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <div className="base-card search-card">
        <form className="search-form">
          <div className="search-container">
            <div className="search-input-container">
              <label
                htmlFor="search-input"
                className="form-label visually-hidden"
              >
                Texto para busca
              </label>
              <input
                id="search-input"
                type="text"
                className="form-control"
                placeholder="Digite sua busca"
              />
            </div>
            <div className="search-btn-container">
              <button
                type="submit"
                className="base-button btn btn-secondary search-btn"
              >
                <h6>BUSCAR</h6>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="grid-container">
        <CatalogGrid />
      </div>
    </div>
  );
};

export default Catalog;
