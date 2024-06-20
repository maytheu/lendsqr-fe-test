declare type User = {
  user: Profile;
  account: Account;
  profession: Education;
  socials: Socials;
  guarantor: Guarantors;
};

declare interface Profile {
  type: "profile";
  id: string;
  name: string;
  email: string;
  tier: number;
  phone: string;
  bvn: string;
  gender: "male" | "female";
  isMarried: boolean;
  children: number;
  residence: string;
}

declare type Account = {
  balance: number;
  bank: string;
  accountNum: string;
};

declare interface Education {
  type: "education";
  level: string;
  employmentStatus: string;
  employmentDuration: string;
  incomeRange: string;
  officialEmail: string;
  loanRepay: number;
  sector: string;
}

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

declare type Socials = {
  type: "social";
  data: Social[];
};

declare type Guarantors = {
  type: "guarantor";
  data: Guarantor[];
};
declare type UserInfoProps = {
  data: Education | Profile | Socials | Guarantors;
};

declare type TableData = {
  organization: string;
  username: string;
  email: string;
  phone: string;
  date: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
};

declare type TableProps = {
  header: string[];
  data: [];
};
