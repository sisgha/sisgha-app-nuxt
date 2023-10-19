<script lang="ts" setup>
import { useAppContextPageDashboardCurso } from "./hooks";

//

const { idCurso } = useAppContextPageDashboardCurso()

//

</script>

<template>
  <PageDashboardCursoLayout>
    <ResourceHandlerCurso :resourceId="idCurso">
      <PageDashboardCursoContentPresentation />
    </ResourceHandlerCurso>
  </PageDashboardCursoLayout>
</template>