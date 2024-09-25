export interface DonationInterface {
  idDonation?: number;
  description: string
  category_id : number;
  name: string,
  charity_id : string
  charityName : string,
  medications :
  [
    {
      medicationId: string,
      medicationName: string,
      quantity : number,
      expireDate : Date
    }
  ]
  fechaDonacion?: Date;
}


//experimental no usar
