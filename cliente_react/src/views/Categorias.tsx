import { Link,useLoaderData } from 'react-router-dom'
import { getCategoriasConCantidadDeProductos } from '../services/CategoriaService'
import type { CategoriaConCantidadProductos } from '../types/categoria'
import CategoriaFila from '../components/CategoriaFila'

export async function loader() {
	const categorias=await getCategoriasConCantidadDeProductos()
	return categorias
}

export default function Categorías(){

	const categorias=useLoaderData() as CategoriaConCantidadProductos[]
    return (
	<>
    <h2>Categorías</h2>
			<div className="row">
				<div className="col-8">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="#">Inicio</a></li>
							<li className="breadcrumb-item active" aria-current="page">Categorías</li>
						</ol>
					</nav>
				</div>
				<div className="col-4 text-end">
					<Link to="/categorias/crear" className="btn btn-primary">Crear Categoría</Link>
				</div>
			</div>
			<div className="table-responsive">
				<table className="table table-bordered table-striped table-hover">
					<thead className="table-dark">
						<tr>
							<th>Nº</th>
							<th>Nombre</th>
							<th>Cantidad Productos</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{categorias.map((categoria,index)=>(
							<CategoriaFila key={categorias.id} index={index} categoria={categoria} />
						))}
					</tbody>
				</table>
			</div>
    
    </>)
}