import { WeatherAPI } from "@/lib/api/weather";
import { useQuery } from "@tanstack/react-query";

export interface UserResponse {
  data: Array<{
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
  }>;
}

// interface UseUsersOptions {
//   options?: UseQueryOptions<UserResponse>;
// }

interface UseUsersData {
  users: UserResponse;
  isLoading: boolean;
  isFetching: boolean;
  error: unknown;
}

export function useUsers(): UseUsersData {
  const { data, isLoading, isFetching, error } = useQuery<UserResponse>(
    ["QUERY_KEYS.users"],
    ({ signal }) => {
      return WeatherAPI.get({
        signal,
        // params: {
        //   page: 2,
        // },
      });
    },
    // options,
  );

  return { users: data ?? ({} as UserResponse), isLoading, isFetching, error };
}
