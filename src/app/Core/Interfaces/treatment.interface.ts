export interface TreatmentInterface {
  id?: number;
  patient_id: number;
  observation: string;
  status: "not supplied" | "partially supplied" | "supplied";
  active: "active" | "inactive" | "deleted";
  medications?:[
      {
          medication_id:number;
          quantity:string
      }
  ]
  createdAt?: Date;
  updatedAt?: Date;
}
