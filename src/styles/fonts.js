import { fontFace } from 'polished'
import { injectGlobal } from 'styled-components'

const fonts = [
    {
        family: 'Skolar-PE',
        path: '../fonts/Skolar-PE.otf',
        formats: ['otf'],
        weight: 400
    }, {
        family: 'Skolar-PE',
        path: '../fonts/Skolar-PE-Bold.otf',
        formats: ['otf'],
        weight: 700
    }, {
        family: 'Geometria',
        path: '../fonts/Geometria.otf',
        formats: ['otf'],
        weight: 400
    }, {
        family: 'Geometria',
        path: '../fonts/Geometria-Light.otf',
        formats: ['otf'],
        weight: 300
    }
]

fonts.map(({ family, path, formats, weight }) => {
    return injectGlobal`${
        fontFace({
            'fontFamily': family,
            'fontFilePath': path,
            'fileFormats': formats,
            'fontWeight': weight
        }
    )}`
})
