import { UseQueryReturnType } from "@tanstack/vue-query";
import { wait } from "../wait";
import { APP_QUERY_SUSPENSE_BEHAVIOUR } from "./APP_QUERY_SUSPENSE_BEHAVIOUR";

export const handleQuerySuspenseBehaviour = async (
  suspenseBehaviour: APP_QUERY_SUSPENSE_BEHAVIOUR,
  query: UseQueryReturnType<any, any>
) => {
  const doSuspense = (timeout = -1): Promise<unknown> => {
    return Promise.race([
      //
      query.suspense().catch(() => null),
      ...(timeout > 0 ? [wait(timeout)] : []),
    ]);
  };

  switch (suspenseBehaviour) {
    case APP_QUERY_SUSPENSE_BEHAVIOUR.ALWAYS: {
      await doSuspense(400);
      break;
    }

    case APP_QUERY_SUSPENSE_BEHAVIOUR.SERVER_SIDE_ONLY: {
      onServerPrefetch(async () => {
        await doSuspense(2000);
      });
    }

    case APP_QUERY_SUSPENSE_BEHAVIOUR.DISABLED:
    default: {
      break;
    }
  }
};
