export interface DonationInterface {
  idDonation?: number;
  donationTypeId : number;
  donationType: string,
  fundationId : number,
  medications :
  [
    {
      medicationId: string,
      donationId : number,
      quantity : number,
      expireDate : Date
    }
  ]
  fechaDonacion?: Date;
  updatedAt?: Date;
}


//experimental no usar
