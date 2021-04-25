export interface TagsType {
  key: string;
  title: string;
}

export interface Frequency {
  times: number;
  repeat_every: string;
}

export interface PlantsTypes {
  id: number;
  uuid: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: Frequency;
}
export interface MyPlantTypes extends PlantsTypes {
  dateTimeNotification: Date;
  notificationId: string;
  uuid: string;
}