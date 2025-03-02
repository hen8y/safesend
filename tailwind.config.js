/** @type { hairlineWidth } */
import {
    hairlineWidth
} from 'nativewind/theme';

const settings = require("./settings/index.json");


module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./zich/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            borderWidth: {
                hairline: hairlineWidth,
            },
            colors: {
                'primary-color': settings.colors.light.primary,
                'theme-color': settings.colors.light.theme,
                'theme-color-mild': settings.colors.light.themeMild,
                'dark-primary-color': settings.colors.dark.primary,
                'dark-theme-color': settings.colors.dark.theme,
                'dark-theme-color-mild': settings.colors.dark.themeMild,
            },
            fontFamily: {
                'space-mono': 'SpaceMono',
            },
        },
    },
    plugins: [],
    darkMode: 'class'
}
