export interface UserData {
  profile: string | null;
  name: string;
  status: "FOLLOWER" | "FOLLOWING" | null;
}
