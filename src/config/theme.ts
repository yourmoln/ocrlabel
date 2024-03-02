import { useOsTheme, darkTheme } from 'naive-ui'
import { computed } from 'vue'
const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))
export default theme