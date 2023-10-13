<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure';

useAppHeadTitle("Calendários", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardCalendariosGuard>
    <PageDashboardCalendariosContent />
  </PageDashboardCalendariosGuard>
</template>