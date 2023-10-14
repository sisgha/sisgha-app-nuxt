import { UseQueryReturnType } from "@tanstack/vue-query";
import { APP_QUERY_SUSPENSE_BEHAVIOUR } from "./APP_QUERY_SUSPENSE_BEHAVIOUR";

export const handleQuerySuspenseBehaviour = async (
  suspenseBehaviour: APP_QUERY_SUSPENSE_BEHAVIOUR,
  query: UseQueryReturnType<any, any>
) => {
  switch (suspenseBehaviour) {
    case APP_QUERY_SUSPENSE_BEHAVIOUR.ALWAYS: {
      await query.suspense();
      break;
    }

    case APP_QUERY_SUSPENSE_BEHAVIOUR.SERVER_SIDE_ONLY: {
      onServerPrefetch(async () => {
        await query.suspense();
      });
    }

    case APP_QUERY_SUSPENSE_BEHAVIOUR.NEVER:
    default: {
      break;
    }
  }
};
