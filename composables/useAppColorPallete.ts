export const useAppThemePallete = () => {
  const appThemePalleteGetter = inject<ComputedRef<string>>("appThemePalleteGetter");
  const appThemePallete = computed(() => appThemePalleteGetter?.value ?? "dark");
  return appThemePallete;
};

export const useAppThemePalleteIsDark = () => {
  const appThemePallete = useAppThemePallete();
  const isDark = computed(() => appThemePallete.value === "dark");
  return isDark;
};

export const useAppThemePalleteInvertTheme = () => {
  const colorMode = useColorMode();

  const appThemePallete = useAppThemePallete();

  const invertTheme = () => {
    colorMode.preference = appThemePallete.value === "dark" ? "light" : "dark";
  };

  return invertTheme;
};
