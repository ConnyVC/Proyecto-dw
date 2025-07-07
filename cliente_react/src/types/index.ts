export interface Arriendo {
    patente_vehiculo: string;
    tipo_vehiculo: "Sedán" | "SUV" | "Camioneta";
    rut_cliente: string;
    nombre_cliente: string;
  }

  export interface ArriendoCompleto {
    id: number;
    fecha_inicio: string;
    fecha_fin: string | null;
    patente_vehiculo: string;
    tipo_vehiculo: "Sedán" | "SUV" | "Camioneta";
    rut_cliente: string;
    nombre_cliente: string;
  }
  
  export interface Estadistica {
    tipo_vehiculo: "Sedán" | "SUV" | "Camioneta";
    cantidad: number;
  }