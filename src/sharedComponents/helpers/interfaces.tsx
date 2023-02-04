type Gender = "Male" | "Female";

export interface Profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: Gender;
  bvn: string;
  address: string;
  currency: string;
}

export interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: Gender;
  address: string;
}

export interface Socials {
  facebook: string;
  twitter: string;
  instagram: string;
}

export interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}

export interface User {
  id: string;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: Profile;
  guarantor: Guarantor;
  accountBalance: string;
  accountNumber: string;
  socials: Socials;
  education: Education;
}
