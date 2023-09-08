<script lang="ts" setup>
import { HeadTitleContext } from '../../../infrastructure/utils/buildHeadTitle';

definePageMeta({
  layout: "dape",
  middleware: 'auth'
})

useAppHeadTitle("Usuários", HeadTitleContext.DAPE);


</script>

<template>
  <div>
    <v-container class="py-8 px-8">
      <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 1rem">
        <h1>Usuários</h1>

        <div style="flex:1;"></div>

        <v-btn to="/dape/usuarios/novo" icon="mdi-plus" color="success"></v-btn>
      </div>

      <div class="my-8"></div>

      <div>

        <v-card>
          <v-table hover>
            <thead>
              <tr>
                <th class="text-left">
                  Nome
                </th>
                <th class="text-left">
                  Matrícula Siape
                </th>
                <th class="text-left">
                  E-mail
                </th>
                <th class="text-left">
                  Cargos
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nome do Usuário</td>

                <td>123456789</td>

                <td>usuario@provedor.email</td>

                <td>
                  <v-chip ripple link class="ma-1" variant="outlined">
                    Professor
                  </v-chip>

                  <v-chip ripple link class="ma-1" variant="outlined">
                    DAPE
                  </v-chip>
                </td>
              </tr>
            </tbody>
          </v-table>

          <v-divider color="info"></v-divider>
        </v-card>
      </div>
    </v-container>
  </div>
</template>
