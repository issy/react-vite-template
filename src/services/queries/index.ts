// generated with @7nohe/openapi-react-query-codegen@0.5.1
import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseQueryOptions,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { DefaultService } from "../requests/services/DefaultService";

export type { ValidationError } from "../requests/models/ValidationError";
export type { HTTPValidationError } from "../requests/models/HTTPValidationError";

export const useDefaultServiceRegisterSessionApiV1SessionPut = <
  TData = Awaited<
    ReturnType<typeof DefaultService.registerSessionApiV1SessionPut>
  >,
  TError = unknown,
  TContext = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      Awaited<ReturnType<typeof DefaultService.registerSessionApiV1SessionPut>>,
      unknown,
      void,
      unknown
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: () => DefaultService.registerSessionApiV1SessionPut(),
    ...options,
  }) as Omit<
    UseMutationResult<
      Awaited<ReturnType<typeof DefaultService.registerSessionApiV1SessionPut>>,
      TError,
      void,
      TContext
    >,
    "data"
  > & {
    data: TData;
  };
export const useDefaultServiceGetNotificationsApiV1NotificationsGetKey =
  "DefaultServiceGetNotificationsApiV1NotificationsGet";
export const useDefaultServiceGetNotificationsApiV1NotificationsGet = <
  TQueryKey extends Array<unknown> = unknown[],
  TData = Awaited<
    ReturnType<typeof DefaultService.getNotificationsApiV1NotificationsGet>
  >,
  TError = unknown,
>(
  {
    connection,
  }: {
    connection: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<
      Awaited<
        ReturnType<typeof DefaultService.getNotificationsApiV1NotificationsGet>
      >,
      unknown,
      Awaited<
        ReturnType<typeof DefaultService.getNotificationsApiV1NotificationsGet>
      >,
      unknown[]
    >,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery({
    queryKey: [
      useDefaultServiceGetNotificationsApiV1NotificationsGetKey,
      ...(queryKey ?? [{ connection }]),
    ],
    queryFn: () =>
      DefaultService.getNotificationsApiV1NotificationsGet(connection),
    ...options,
  }) as Omit<
    UseQueryResult<
      Awaited<
        ReturnType<typeof DefaultService.getNotificationsApiV1NotificationsGet>
      >,
      TError
    >,
    "data"
  > & {
    data: TData;
  };
