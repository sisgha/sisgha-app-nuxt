import { useQuery } from "@tanstack/vue-query";
import { APP_QUERY_SUSPENSE_BEHAVIOUR, handleQuerySuspenseBehaviour } from "../../../utils";
import { BaseAPIActionFindByIdConstructor } from "../../api-actions/BaseAPIActionFindById";

export const useAPIActionFindById = async <
  Result,
  APIActionFindByIdConstructor extends BaseAPIActionFindByIdConstructor<Result> = BaseAPIActionFindByIdConstructor<Result>
>(
  apiActionFindByIdConstructor: APIActionFindByIdConstructor,
  idRef: MaybeRef<number>,
  queryKeyBase: MaybeRef<string> = apiActionFindByIdConstructor.name,
  queryKeyResourcePrefix: MaybeRef<string> = `${queryKeyBase}::id`,
  suspenseBehaviour = APP_QUERY_SUSPENSE_BEHAVIOUR.ALWAYS
) => {
  const appContextAPI = useAppContextAPI();

  const queryKeyResource = computed(() => `${unref(queryKeyResourcePrefix)}::${unref(idRef)}`);

  const query = useQuery(
    [
      //
      queryKeyBase,
      queryKeyResource,
    ],
    async () => {
      const id = unref(idRef);

      if (Number.isInteger(id) && id > 0) {
        try {
          const r = await appContextAPI.invoke(apiActionFindByIdConstructor, { id });
          return r;
        } catch (e: any) {
          if (isReactive(e)) {
            throw toRaw(e);
          } else {
            throw e;
          }
        }
      } else {
        throw new Error("Invalid identifier");
      }
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  //

  const result = computed((): Result | null => query.data.value ?? null);

  const resultColdJSON = computed(() => JSON.stringify(unref(result)));

  const resultCold = computed((): Result | null => JSON.parse(unref(resultColdJSON)));

  //

  const queryError = computed((): any => query.error.value ?? null);

  const isLoading = computed(() => query.isLoading.value);

  const isError = computed(() => queryError.value !== null);

  const isErrorNotFound = computed(() => {
    const error: any = unref(queryError);

    if (error) {
      if ("gqlErrors" in error) {
        const isError404 = error.gqlErrors.some((error: any) => {
          if ("status" in error && "path" in error) {
            return error?.status === 404;
          }

          return false;
        });

        return isError404;
      }
    }

    return false;
  });

  await handleQuerySuspenseBehaviour(suspenseBehaviour, query);

  return {
    query,

    //

    result,
    resultCold,

    //

    queryError,

    //
    isError,
    isErrorNotFound,
    isLoading,
  };
};
