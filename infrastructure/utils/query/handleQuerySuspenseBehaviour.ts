import { UseQueryReturnType } from "@tanstack/vue-query";
import { APP_QUERY_SUSPENSE_BEHAVIOUR } from "./APP_QUERY_SUSPENSE_BEHAVIOUR";

export const handleQuerySuspenseBehaviour = async (
  suspenseBehaviour: APP_QUERY_SUSPENSE_BEHAVIOUR,
  query: UseQueryReturnType<any, any>
) => {
  const doSuspense = () => query.suspense().catch(() => null);

  switch (suspenseBehaviour) {
    case APP_QUERY_SUSPENSE_BEHAVIOUR.ALWAYS: {
      await doSuspense();
      break;
    }

    case APP_QUERY_SUSPENSE_BEHAVIOUR.SERVER_SIDE_ONLY: {
      onServerPrefetch(async () => {
        await doSuspense();
      });
    }

    case APP_QUERY_SUSPENSE_BEHAVIOUR.DISABLED:
    default: {
      break;
    }
  }
};
