declare type User = {
  user: Profile;
  phone: string;
  bvn: string;
  gender: "male" | "female";
  isMarried: boolean;
  children: number;
  residence: string;
  account: Account;
  professtion: Education;
  socials: Social[];
  guarantor: Guarantor[];
};

declare type Profile = {
  id: string;
  name: string;
  email: string;
  tier: number;
};

declare type Account = {
  balance: number;
  bank: string;
  accountNum: string;
};

declare type Education = {
  level: string;
  employmentStatus: string;
  employmentDuration: string;
  income: number;
  officialEmail: string;
  loanRepay: number;
};

declare type Social = {
  name: string;
  id: string;
};

declare type Guarantor = {
  name: string;
  phone: string;
  email: string;
  relationship: string;
};
