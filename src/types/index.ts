export type EmailData = {
  to: string;
  subject: string;
  templateData: object

}


export type iResponse<T> = {
  data: T[];
  mensaje: string;
  dataTotal: number;
  pagination: number;
};

export type iOptionsSelect = {
  value: string;
  label: string;
}


export type iRequisicion = {
  clasificacion_id?: string;
  departamento_id?: number;
  descripcion?: string;
  docto_rq_id: number;
  estatus?: string;
  fecha?: string;
  folio?: string;
  nivel_auth_3?: boolean;
  prioridad_id?: string;
  requisitante_id?: number;
  tipo_docto?: string;
  _id?: string;
  prioridad: string;
  clasificacion: string;

  /* DATOS MICROSIP */
  nivel_aut1?: string;
  nivel_aut2?: string;
  nivel_aut3?: string;
  clasif1_enc_id?: string;
  departamento?: string;
  ORDEN_DE_TRABAJO?: any; //eslint-disable-line
};


export type iProveedor = {
  contacto?: string,
  telefono?: string,
  direccion?: string,
  checked?: boolean,
  estatus: string;
  password: string;
  account: string;

  tender_kind: string;
  supplier_kind: string;

  /* DATOS MICROSIP */
  EMAIL?: string,
  CLAVE_PROV: string;
  PROVEEDOR_ID?: string,
  NOMBRE?: string,
  RFC_CURP?: string,

  /* DATOS SELECT */
  value: string,
  label: string,
};

export type iQuotation = {
  folio: string
  requisition_id: string,
  docto_rq_id: number,
  currency: string
  delivery_date: Date
  validity_date: Date
  payment_term: string
  delivery_place: string
  applicable_taxes: string,
  shipping_costs: string,
  check_applicable_taxes: boolean,
  check_shipping_costs: boolean,

  descripcion: string,
  estatus: string,
  document_quotate: string,



}