import { UserData } from "entities/user/index.type";

export const FOLLOWER_DATA: UserData[] = [
  { profile: null, name: "유저1", status: "FOLLOWER" },
  { profile: null, name: "유저2", status: null },
  { profile: null, name: "유저3", status: "FOLLOWER" },
];

export const RECOMMENDATION_DATA: UserData[] = [
  { profile: null, name: "유저4", status: "FOLLOWER" },
  { profile: null, name: "유저5", status: "FOLLOWER" },
  { profile: null, name: "유저6", status: "FOLLOWER" },
];
