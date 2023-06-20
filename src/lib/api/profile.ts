import { ProfileData } from "@/hooks/useProfiles";
import type { RawAxiosRequestConfig } from "axios";
import { api } from ".";

export class ProfileAPI {
  static async get(options?: RawAxiosRequestConfig): Promise<ProfileData> {
    const { data } = await api.get("/users", options);
    return data;
  }
}
