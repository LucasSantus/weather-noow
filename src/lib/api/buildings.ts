import type { RawAxiosRequestConfig } from "axios";
import type { Building } from "~/types/Building";
import type { Id } from "~/types/Id";
import { api } from ".";

type CreateBuildingData = Pick<
  Building,
  "name" | "proprietary" | "roomsQty" | "doc" | "city" | "uf" | "district"
>;

type UpdateBuildingData = CreateBuildingData;

interface GetCheckCountByRangePayload {
  id: Id;
  dateRange: {
    from: string;
    to: string;
  };
}

export class BuildingsAPI {
  static async getAll(options?: RawAxiosRequestConfig): Promise<Building[]> {
    const { data } = await api.get<Building[]>("/Building", options);
    return data;
  }

  static async getById(
    id: Id,
    options?: RawAxiosRequestConfig,
  ): Promise<Building> {
    const { data } = await api.get<Building>(`/Building/${id}`, options);
    return data;
  }

  static async getCheckInCount(
    id: Id,
    options?: RawAxiosRequestConfig,
  ): Promise<number> {
    const { data } = await api.get<{ count: number }>(
      `/Building/${id}/CheckIn/Count`,
      options,
    );

    return data.count;
  }

  static async getCheckInCountByRange(
    { id, dateRange }: GetCheckCountByRangePayload,
    options?: RawAxiosRequestConfig,
  ): Promise<number> {
    const { data } = await api.get<{ count: number }>(
      `/Building/${id}/CheckIn/Count/ByRange`,
      {
        ...options,
        params: {
          ...options?.params,
          dtBegin: dateRange.from,
          dtEnd: dateRange.to,
        },
      },
    );

    return data.count;
  }

  static async getCheckOutCount(
    id: Id,
    options?: RawAxiosRequestConfig,
  ): Promise<number> {
    const { data } = await api.get<{ count: number }>(
      `/Building/${id}/CheckOut/Count`,
      options,
    );

    return data.count;
  }

  static async getCheckOutCountByRange(
    { id, dateRange }: GetCheckCountByRangePayload,
    options?: RawAxiosRequestConfig,
  ): Promise<number> {
    const { data } = await api.get<{ count: number }>(
      `/Building/${id}/CheckOut/Count/ByRange`,
      {
        ...options,
        params: {
          ...options?.params,
          dtBegin: dateRange.from,
          dtEnd: dateRange.to,
        },
      },
    );

    return data.count;
  }

  static async create(building: CreateBuildingData) {
    await api.post("/Building", building);
  }

  static async update(id: Id, building: UpdateBuildingData) {
    await api.put(`/Building/${id}`, building);
  }
}
