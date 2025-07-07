import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'arriendos' })
class Arriendo extends Model {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    declare id: number;

    @Column({ type: DataType.DATE, allowNull: true })
    declare fecha_inicio: Date | null;

    @Column({ type: DataType.DATE, allowNull: true })
    declare fecha_fin: Date | null;

    @Column({ type: DataType.STRING(6), allowNull: false })
    declare patente_vehiculo: string;
    
    // Solo Sedán, SUV o Camioneta
    @Column({ type: DataType.STRING(20), allowNull: false })
    declare tipo_vehiculo: string; 

    @Column({ type: DataType.STRING(10), allowNull: false })
    declare rut_cliente: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    declare nombre_cliente: string;
}
export default Arriendo;