export type Theme = "light" | "dark";

export type PersonId = 1 | 2;

export type ItemType = "total" | "forSelf" | "forOther";

export type PersonData = {
  id: PersonId;
  name: string;
  total: number[];
  forSelf: number[];
  forOther: number[];
};

export type ItemDialogData = {
  personId?: PersonId;
  type?: ItemType;
  index?: number;
  value?: number;
};
