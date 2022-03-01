import CatalogItemCard from "components/CatalogItemCard";

const CatalogGrid = () => {
  return (
    <div className="container my-4 ">
      <div id="row" className="row">
        <div className="col-12 col-sm-6 col-lg-4">
            <CatalogItemCard />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
            <CatalogItemCard />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
            <CatalogItemCard />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
            <CatalogItemCard />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
            <CatalogItemCard />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
            <CatalogItemCard />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
            <CatalogItemCard />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
            <CatalogItemCard />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
            <CatalogItemCard />
        </div>
      </div>
    </div>
  );
};

export default CatalogGrid;
