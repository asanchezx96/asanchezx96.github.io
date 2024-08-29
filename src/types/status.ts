export type EstatusProcess =
    | "SIN_INICIAR"   // Cuando el proceso no ha comenzado
    | "PENDIENTE"     // Cuando está pendiente de algún acción
    | "INCOMPLETO"    // Cuando el proceso ha comenzado pero no está completo
    | "REVISION"      // Cuando está en revisión
    | "AUTORIZADO"      // Cuando ha sido aprobado
    | "RECHAZADO"     // Cuando ha sido rechazado
    | "CANCELADO"     // Cuando ha sido cancelado
    | "FINALIZADO"    // Cuando el proceso ha finalizado
    | "SURTIDO"       // Cuando ha sido surtido
    | "COTIZADO";     // Cuando ya ha sido cotizado

export type EstatusGeneral = "ACTIVO" | "BLOQUEADO";

interface EstatusValue {
    label: string;
    color: string;
    type: "success" | "warning" | "danger" | "info" | "dark";
}

export const setEstatusProcess: Record<EstatusProcess, EstatusValue> = {
    SIN_INICIAR: { label: "Pendiente", color: "bg-dark", type: "warning" },
    PENDIENTE: { label: "Pendiente", color: "bg-yellow-400", type: "warning" },
    INCOMPLETO: { label: "Incompleto", color: "bg-red-400", type: "danger" },
    REVISION: { label: "Revisión", color: "bg-blue-400", type: "warning" },
    AUTORIZADO: { label: "Autorizado", color: "bg-green-400", type: "success" },
    RECHAZADO: { label: "Rechazado", color: "bg-red-400", type: "danger" },
    CANCELADO: { label: "Cancelado", color: "bg-black-400", type: "dark" },
    FINALIZADO: { label: "Finalizado", color: "bg-green-400", type: "success" },
    SURTIDO: { label: "Surtido", color: "bg-green-400", type: "success" },
    COTIZADO: { label: "Cotizado", color: "bg-green-400", type: "success" },
};