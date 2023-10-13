<script lang="ts" setup>
import LogoIfroUrl from "@/assets/logos/ifro.svg?url";
import { HeadTitleContext } from "../../infrastructure/app-utils";

useAppHeadTitle("Início", HeadTitleContext.DASHBOARD);

const route = useRoute();

const drawer = ref(true);

const blocks = reactive([
  {
    key: 'raiz',
    header: null,
    items: [
      {
        label: "Início",
        href: "/dashboard",
        icon: "mdi-home",
        exact: true,
      }
    ]
  },


  {
    key: 'horario',
    header: "Horário",
    items: [
      {
        label: "Calendários",
        href: "/dashboard/calendarios",
        icon: "mdi-calendar-blank-outline",
        exact: false,
      }
    ]
  },

  {
    key: 'ensino',
    header: "Ensino",
    items: [
      {
        label: "Cursos",
        href: "/dashboard/cursos",
        icon: "mdi-school",
        exact: false,
      },

    ]
  },

  {
    key: 'institucional',
    header: "Institucional",
    items: [

      {
        label: "Modalidades",
        href: '/dashboard/modalidades',
        icon: "mdi-strategy",
        exact: false,
      },
    ]
  },


  {
    key: 'sistema',
    header: "Sistema",
    items: [
      {
        label: "Usuários",
        href: '/dashboard/usuarios',
        icon: "mdi-account-hard-hat",
        exact: false,
      },
    ]
  },
])
</script>

<template>
  <LayoutDashboardGuard>
    <VApp>
      <VLayout>
        <VAppBar color="surface">
          <VAppBarNavIcon variant="text" @click.stop="drawer = !drawer"></VAppBarNavIcon>

          <VToolbarTitle>
            <div class="brand">
              <img :src="LogoIfroUrl" alt="IFRO" />

              <div class="brand-system-info">
                <span>IFRO</span>
                <span>DASHBOARD</span>
              </div>
            </div>
          </VToolbarTitle>

          <template v-slot:append>
            <UIMenuThemeStyleButton />
            <UIMenuAccountButton />
          </template>
        </VAppBar>

        <VNavigationDrawer v-model="drawer" color="surface">
          <VList density="compact" nav class="px-4 py-4">

            <div v-for="block in blocks" :key="block.key">
              <VListSubheader v-if="block.header" class="my-2">{{ block.header }}</VListSubheader>

              <VListItem v-for="link in block.items" :ripple="false" :title="link.label" :to="link.href"
                :active="link.exact ? (route.path === link.href) : (route.path.startsWith(link.href))"
                :prepend-icon="link.icon" class="px-4 py-3" style="border-radius: 0.75rem;">
              </VListItem>

            </div>
          </VList>

        </VNavigationDrawer>

        <VMain>
          <slot></slot>
        </VMain>
      </VLayout>
    </VApp>
  </LayoutDashboardGuard>
</template>


<style scoped>
.brand {
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1rem;

}

.brand-system-info {
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  line-height: 1.4;
}
</style>