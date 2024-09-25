export interface DonationInterface {
  idDonation?: number;
  description: string;
  category_id: number;
  name: string;
  charity_id: number;
  charityName: string;
  medications?: Array<{
    id: number;
    name: string;
    quantity: number;
    expireDate?: Date;
  }>;
  fechaDonacion?: Date;
}

//experimental no usar
