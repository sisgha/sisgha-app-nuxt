<script lang="ts" setup>
import { callWithNuxt } from 'nuxt/app';

//

const app = useNuxtApp()

//

const appContextAuth = useAppContextAuth()

//

const authState = useAuthState();
const { status } = authState;

//

const handleStatus = async () => {
  const status_value = unref(status)

  switch (status_value) {
    case "authenticated": {
      const canViewPageDashboard = await appContextAuth.checkAuthorization({
        verbo: "view",
        recurso: "pages.dashboard",
        entityId: null
      });

      if (canViewPageDashboard) {
        callWithNuxt(app, () => navigateTo("/dashboard"))
      }

      break;
    }

    case "unauthenticated": {
      callWithNuxt(app, () => navigateTo("/login"))
      break;
    }

    default: {
      break;
    }
  }
}

watch(
  [status],
  handleStatus,
  { immediate: false }
);

await handleStatus();

// 

</script>

<template>
  <PageLoading />
</template>