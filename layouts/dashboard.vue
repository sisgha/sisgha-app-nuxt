<script lang="ts" setup>
import LogoIfroUrl from "@/assets/logos/ifro.svg?url";
import { HeadTitleContext } from "../infrastructure/utils/buildHeadTitle";

useAppHeadTitle("Início", HeadTitleContext.DASHBOARD);

const drawer = ref(true);

const blocks = reactive([
  {
    key: 1,
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
    key: 2,
    header: "Sistema",
    items: [
      {
        label: "Usuários",
        href: "/dashboard/usuarios",
        icon: "mdi-account-hard-hat",
        exact: false,
      },
    ]
  },
])

</script>

<template>
  <dashboard-guard>
    <v-app>
      <v-layout>
        <v-app-bar color="surface">
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>
            <div class="brand">
              <img :src="LogoIfroUrl" alt="IFRO" />

              <div class="brand-system-info">
                <span>IFRO</span>
                <span>DASHBOARD</span>
              </div>
            </div>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <template v-slot:append>
            <UIMenuThemeStyleButton />
            <UIMenuAccountButton />
          </template>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" color="surface">
          <v-list density="compact" nav class="px-4 py-4">

            <div v-for="block in blocks" :key="block.key">
              <v-list-subheader v-if="block.header" class="my-2">{{ block.header }}</v-list-subheader>

              <v-list-item v-for="link in block.items" :ripple="false" :title="link.label" :to="link.href"
                :exact="link.exact ?? false" :prepend-icon="link.icon" class="px-4 py-3" style="border-radius: 0.75rem;">
              </v-list-item>
            </div>
          </v-list>

        </v-navigation-drawer>

        <v-main>
          <slot></slot>
        </v-main>
      </v-layout>
    </v-app>
  </dashboard-guard>
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