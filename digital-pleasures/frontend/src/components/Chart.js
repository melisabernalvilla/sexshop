import React from 'react';
import ChartRow from './ChartRow';


function Chart({ content = [], type }) {
    const data = content.length > 0 && content.map(item => item.return);
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body chart">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        {type === 'user' &&
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>ID</th>
                                    <th>Img</th>
                                </tr>
                            </thead>
                        }
                        {type === 'product' &&
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Descripcion</th>
                                    <th>Img</th>
                                </tr>
                            </thead>
                        }

                        <tbody>
                            {data ?
                                data.map((row, i) => {
                                    return <ChartRow type={type} {...row} key={i} />
                                })
                                : <p>Cargando ...</p>
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;