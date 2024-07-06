import React from 'react'
import ModalDetalles from './ModalDetalles'
import { Link } from 'react-router-dom'

const Carta = ({ index, item }) => {
    return (
        <>
            <div className="col-md-4 col-lg-3 mb-4" >
                <div className="card h-100" data-bs-theme="dark">
                    <div className="card-header p-0">
                        <img src={item.flags.png} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body text-center">

                        <p className="text-success">{item.name.common}</p>
                        <h5 className="text-danger">{item.name.official}</h5>
                    </div>
                    <div className="card-footer text-center">
                        <Link to={`/detalles/${item.name.common}`} className="btn btn-outline-danger btn-sm mx-1"  >Detalle</Link>
                        <button className="btn btn-outline-danger btn-sm mx-1" data-bs-toggle="modal" data-bs-target={`#${index}`} >Ver mas</button>
                    </div>
                </div>





                <div>

                    <div className="modal fade" id={index} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="row py-2">
                                        <div className="col-md-5">
                                            <img src={item.flags.png} className="card-img-top img-thumbnail" alt="..." loading="lazy" />

                                        </div>
                                        <div className="col-md-7">
                                            <h3>{item.name.common}</h3>
                                            <h4>Capital: <span className="fw-bold">{item.capital}</span></h4>
                                            <h4>Poblacion: <span className="badge bg-info">{item.population}</span></h4>
                                            <h4>Region: <span className="fw-bold">{item.region}</span></h4>





                                        </div>
                                    </div>




                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>


        </>
    )
}

export default Carta