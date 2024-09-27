export interface mostRequiredInterface {
  message: string,
  data : {
    Medication_Treatment : {
      medication_id : number,
      medication_name : string,
      usage_count : string,
      total_donated : string
    }[]
  }
}

export interface mostRequiredByCommunityInterface {
  Medication: {
    community_name : string,
    medications : {
      medication_name : string,
      total_medicamentos_necesitados : number
    }[]
  }[]
}
