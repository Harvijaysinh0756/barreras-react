import React from 'react'

export default function BuyFilter() {
  return (
    <section className="home-structure-section">
        <div className="container">
            <div className="home-structure-content">
                <div className="row">
                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="home-structure-select">
                            <label className="form-label section-discription">Type</label>
                            <select className="form-select form-control">
                                <option defaultValue  hidden>All</option>
                                <option>Flat</option>
                                <option>House / Chalet</option>
                                <option>Country House</option>
                                <option>Hotel</option>
                                <option>Parking</option>
                                <option>Shop</option>
                                <option>Industrial Ship</option>
                                <option>Office</option>
                                <option>Land</option>
                                <option>Storage</option>
                                <option>Building</option>
                            </select>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="home-structure-select">
                            <label className="form-label section-discription">Sort by</label>
                            <select className="form-control form-select">
                                <option defaultValue  hidden>Recent</option>
                                <option>Highest price</option>
                                <option>Lowest price</option>
                            </select>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="home-structure-select">
                            <label className="form-label section-discription">Bedrooms</label>
                            <select className="form-control form-select">
                                <option defaultValue  hidden>All</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>More than 7</option>
                            </select>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="home-structure-select">
                            <label className="form-label section-discription">Bedrooms</label>
                            <select className="form-control form-select">
                                <option defaultValue  hidden>All</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>More than 7</option>
                            </select>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="home-structure-select">
                            <label className="form-label section-discription">Tags</label>
                            <select className="form-control form-select">
                                <option defaultValue  hidden>All</option>
                                <option>Elevator</option>
                                <option>Garage</option>
                                <option>Garden</option>
                                <option>Outdoor</option>
                                <option>Rooftop terrace</option>
                                <option>Ocean views</option>
                                <option>Storage room</option>
                                <option>Swimimng pool</option>
                                <option>Terrace</option>
                            </select>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="home-structure-select">
                            <label className="form-label section-discription">Tags</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="home-structure-select">
                            <label className="form-label section-discription">Zone</label>
                            <select className="form-control form-select">
                                <option defaultValue  hidden>All</option>
                                <option className="">Adeje</option>
                                <option>Armeñime</option>
                                <option>Callao Salvaje</option>
                                <option>Costa Adeje</option>
                                <option>El Duque</option>
                                <option>La Caldera</option>
                                <option>La Caleta</option>
                                <option>Madroñal</option>
                                <option>Playa de Las Americas</option>
                                <option>Playa Paraiso</option>
                                <option>Roque del Conde</option>
                                <option>San Eugenio Alto</option>
                                <option>San Eugenio Bajo</option>
                                <option>Tijoco</option>
                                <option>Torviscas Alto</option>
                                <option>Torviscas Bajo</option>
                                <option>Arona</option>
                                <option>Buzanada</option>
                                <option>Cabo Blanco</option>
                                <option>Chayofa</option>
                                <option>Costa del Silencio</option>
                                <option>La Camella</option>
                                <option>Las Galletas</option>
                                <option>Los Cristianos</option>
                                <option>Palm-Mar</option>
                                <option>Parque de la Reina</option>
                                <option>Valle San Lorenzo</option>
                                <option>Granadilla de Abona</option>
                                <option>San Isidro</option>
                                <option>Los Abrigos</option>
                                <option>La Tejita</option>
                                <option>El Medano</option>
                                <option>Guia de Isora</option>
                                <option>Alcala</option>
                                <option>Playa San Juan</option>
                                <option>Norte</option>
                                <option>San Cristobal de la Laguna</option>
                                <option>Santa Cruz de Tenerife</option>
                                <option>Puerto de la Cruz</option>
                                <option>San Miguel de Abona</option>
                                <option>Aldea Blanca</option>
                                <option>Amarilla Golf</option>
                                <option>El Roque</option>
                                <option>Golf del Sur</option>
                                <option>Guargacho</option>
                                <option>Las Chafiras</option>
                                <option>Las Zocas</option>
                                <option>Llano del Camello</option>
                                <option>Santiago del Teide</option>
                                <option>Acantilados de Los Gigantes</option>
                                <option>Arguayo</option>
                                <option>Puerto de Santiago</option>
                            </select>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="home-structure-range">
                            <div className="range-slider-container">
                                <input type="range" className="range-slider w-100" min="50.000,00" max="1000000" value="50.000,00" step="1" />
                            </div>

                            <p className="slider-counter-container">50.000,00 € <span className="slider-counter"></span></p>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="home-structure-select mb-0">
                            <a href="/" className="btn btn-dark w-100 home-structure-serach-btn">Search</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
