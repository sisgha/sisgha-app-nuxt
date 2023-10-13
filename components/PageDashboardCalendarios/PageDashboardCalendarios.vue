<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure/app-utils';

useAppHeadTitle("Calendários", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardCalendariosGuard>
    <PageDashboardCalendariosContent />
  </PageDashboardCalendariosGuard>
</template>