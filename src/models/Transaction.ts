


// export class Transaction {
//   public id: number;
//   public description: string;
//   public amount: number;
//   public type: string;
//   public date: Date;
// }

export interface Transaction {
  id: number; //might have to recheck this one
  amount: number;
  category?: string; // it would have to flexible to the user
  description: string;
  date: Date;
}