import React from 'react'

const ModalDetalles = ({item}) => {
  return (
    <div className="modal fade" id={item} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
    <div className="modal-dialog modal-xl">
        <div className="modal-content">
        <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Detalle del Pais</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <h3>test</h3>
        <div className="row py-2">
            <div className="col-md-5">
                <img src={item.name.common} className="card-img-top img-thumbnail" alt="..." loading="lazy" />

            </div>
            <div className="col-md-7">
                <h3>test</h3>
               
            </div>

        </div>

        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

        </div>
        </div>
    </div>
</div>
  )
}

export default ModalDetalles