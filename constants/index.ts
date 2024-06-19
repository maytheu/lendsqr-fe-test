export const customerSideLinks = [
  {
    imgURL: "/icons/users.svg",
    route: "/user",
    label: "Users",
  },
  {
    imgURL: "/icons/guarantor.svg",
    route: "/",
    label: "guarators",
  },
  {
    imgURL: "/icons/loans.svg",
    route: "/",
    label: "loans",
  },
  {
    imgURL: "/icons/model.svg",
    route: "/",
    label: "decision models",
  },
  {
    imgURL: "/icons/savings.svg",
    route: "/",
    label: "savings",
  },
  {
    imgURL: "/icons/loan_req.svg",
    route: "/",
    label: "loan request",
  },
  {
    imgURL: "/icons/whitelist.svg",
    route: "/",
    label: "whitelist",
  },
  {
    imgURL: "/icons/karma.svg",
    route: "/",
    label: "karma",
  },
];

export const businessSideLinks = [
  {
    imgURL: "/icons/org.svg",
    route: "/",
    label: "organization",
  },
  {
    imgURL: "/icons/loan_req.svg",
    route: "/",
    label: "loan products",
  },
  {
    imgURL: "/icons/savings_product.svg",
    route: "/",
    label: "savings product",
  },
  {
    imgURL: "/icons/fees.svg",
    route: "/",
    label: "fees and charges",
  },
  {
    imgURL: "/icons/txn.svg",
    route: "/",
    label: "transactions",
  },
  {
    imgURL: "/icons/services.svg",
    route: "/",
    label: "services",
  },
  {
    imgURL: "/icons/service.svg",
    route: "/",
    label: "service account",
  },
  {
    imgURL: "/icons/settlement.svg",
    route: "/",
    label: "settlements",
  },
  {
    imgURL: "/icons/report.svg",
    route: "/",
    label: "reports",
  },
];

export const settingsSideLinks = [
  {
    imgURL: "/icons/preference.svg",
    route: "/",
    label: "preferences",
  },
  {
    imgURL: "/icons/pricing.svg",
    route: "/",
    label: "fees and pricing",
  },
  {
    imgURL: "/icons/audit.svg",
    route: "/",
    label: "audit logs",
  },
];

export const userDetailLink = [
  {
    imgURL: "/icons/detail.svg",
    route: "/user-profile",
    label: "General Details",
  },
  {
    imgURL: "/icons/docs.svg",
    route: "/user-document",
    label: "documents",
  },
  {
    imgURL: "/icons/bank.svg",
    route: "/user-bank",
    label: "bank details",
  },
  {
    imgURL: "/icons/loan_link.svg",
    route: "/user-loan",
    label: "loans",
  },
  {
    imgURL: "/icons/save_link.svg",
    route: "/user-saving",
    label: "savings",
  },
  {
    imgURL: "/icons/setting.svg",
    route: "/user-settings",
    label: "app and system",
  },
];

export const mockUser: User = {
  account: { accountNum: "9912345678", balance: 200000, bank: "Providus Bank" },
  guarantor: {
    type: "guarantor",
    data: [
      {
        name: "Debby Ogana",
        email: "debby@gmail.com",
        phone: "07060780922",
        relationship: "Sister",
      },
      {
        name: "Debby Ogana",
        email: "debby@gmail.com",
        phone: "07060780922",
        relationship: "Sister",
      },
    ],
  },
  profession: {
    employmentDuration: "2 years",
    employmentStatus: "Employed",
    incomeRange: "200,000.00 - 400,000.00",
    level: "B.Sc",
    loanRepay: 40000,
    officialEmail: "grace@lendsqr.com",
    type: "education",
    sector: "FinTech",
  },
  socials: {
    type: "social",
    data: [
      { id: "@grace_effiom", name: "twiiter" },
      { id: "Grace Effiom", name: "facebook" },
      { id: "@grace_effiom", name: "Instagram" },
    ],
  },
  user: {
    email: "grace@gmail.com",
    id: "LSQFf587g90",
    name: "Grace Effiom",
    tier: 1,
    bvn: "07060780922",
    children: 0,
    gender: "female",
    residence: "Parent’s Apartment",
    isMarried: false,
    phone: "07060780922",
    type: "profile",
  },
};
