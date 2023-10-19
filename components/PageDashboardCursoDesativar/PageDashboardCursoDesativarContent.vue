
<script lang="ts" setup>
import { useAppContextPageDashboardCurso } from '../PageDashboardCurso/hooks';


//

const { idCurso } = useAppContextPageDashboardCurso()

//

</script>

<template>
  <PageDashboardCursoDesativarLayout>
    <ResourceHandlerCurso :resourceId="idCurso">
      <ResourceHandlerCursoActivatedGuard>
        <template #allowed>
          <PageDashboardCursoDesativarContentPresentation />
        </template>
      </ResourceHandlerCursoActivatedGuard>
    </ResourceHandlerCurso>
  </PageDashboardCursoDesativarLayout>
</template>