import { useTheme } from "vuetify";

export const useAppColorMode = () => {
  const colorMode = useColorMode();

  const theme = useTheme();

  const appColorMode = ref("light");

  const loadAppColorMode = () => {
    appColorMode.value = colorMode.value;
  };

  onMounted(loadAppColorMode);

  watch(colorMode, loadAppColorMode);

  const applyColorModeToVuetify = () => {
    theme.global.name.value = unref(appColorMode);
  };

  watch(appColorMode, applyColorModeToVuetify, { immediate: true });

  onMounted(applyColorModeToVuetify);

  const isDark = computed(() => appColorMode.value === "dark");

  const invertTheme = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  };

  return {
    invertTheme,

    appColorMode,

    isDark,
  };
};
