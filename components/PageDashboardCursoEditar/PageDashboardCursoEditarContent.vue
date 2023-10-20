
<script lang="ts" setup>
import { useAppContextPageDashboardCurso } from '../PageDashboardCurso/hooks';

//

const { idCurso } = useAppContextPageDashboardCurso()

//

</script>

<template>
  <PageDashboardCursoEditarLayout>

    <ResourceHandlerCurso :resourceId="idCurso">
      <ResourceHandlerCursoEditGuard>
        <ResourceHandlerCursoActivatedGuard>
          <template #allowed>
            <PageDashboardCursoEditarContentPresentation />
          </template>
        </ResourceHandlerCursoActivatedGuard>
      </ResourceHandlerCursoEditGuard>
    </ResourceHandlerCurso>
  </PageDashboardCursoEditarLayout>
</template>