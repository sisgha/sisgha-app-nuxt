<template>
  <dape-guard>
    <v-app>
      <v-layout>
        <v-app-bar color="surface" title="">
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>
            <div class="brand">
              <img src="~/assets/logos/ifro.svg" alt="IFRO" />

              <div class="brand-system-info">
                <span>IFRO</span>
                <span>DAPE</span>
              </div>
            </div>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <template v-slot:append>
            <MenuThemeStyleButton />
            <MenuAccountButton />
          </template>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" color="surface">
          <v-list density="compact" nav>

            <div v-for="block in blocks" :key="block.header">
              <v-list-subheader v-if="block.header">{{ block.header }}</v-list-subheader>

              <v-list-item v-for="link in block.items" :title="link.label" :to="link.href" :prepend-icon="link.icon">
              </v-list-item>
            </div>
          </v-list>

        </v-navigation-drawer>

        <v-main>
          <slot></slot>
        </v-main>
      </v-layout>
    </v-app>
  </dape-guard>
</template>

<script setup>
const drawer = ref(true);

const blocks = reactive([
  {
    header: null,
    items: [
      {
        label: "Início",
        href: "/dape",
        icon: "mdi-home"
      }
    ]
  },

  {
    header: "Corpo Docente",

    items: [
      {
        label: "Cursos",
        href: "/dape/cursos",
        icon: "mdi-school"
      },
      {
        label: "Disciplinas",
        href: "/dape/disciplinas",
        icon: "mdi-shape-plus"
      },
      {
        label: "Professores",
        href: "/dape/professores",
        icon: "mdi-human-male-board"
      },
    ]
  },

  {
    header: "Corpo Discente",
    items: [

      {
        label: "Turmas",
        href: "/dape/turmas",
        icon: "mdi-account-group"
      },

      {
        label: "Diários",
        href: "/dape/diarios",
        icon: "mdi-notebook"
      },
    ]
  },

  {
    header: "Institucional",
    items: [
      {
        label: "Lugares",
        href: "/dape/lugares",
        icon: "mdi-selection-marker"
      },
      {
        label: "Horários de Aula",
        href: "/dape/horarios-de-aula",
        icon: "mdi-calendar-clock"
      },
    ]
  },

  {
    header: "Usuários",
    items: [
      {
        label: "Cargos",
        href: "/dape/cargos",
        icon: "mdi-briefcase"
      },
      {
        label: "Usuários",
        href: "/dape/usuarios",
        icon: "mdi-account-hard-hat"
      },
    ]
  },
])

</script>

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