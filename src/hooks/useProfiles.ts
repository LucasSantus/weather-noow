import { QUERY_KEYS } from "@/constants/globals";
import { ProfileAPI } from "@/lib/api/profile";
import { useQuery } from "@tanstack/react-query";

export interface ProfileResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type ProfileData = ProfileResponse[];

interface UseProfileData {
  profiles: ProfileData;
  isLoading: boolean;
  isFetching: boolean;
  error: unknown;
}

export function useProfiles(): UseProfileData {
  const { data, isLoading, isFetching, error } = useQuery<ProfileData>([QUERY_KEYS.profiles], ({ signal }) => {
    return ProfileAPI.get({
      signal,
    });
  });

  return {
    profiles: data ?? ([] as ProfileData),
    isLoading,
    isFetching,
    error,
  };
}
