import { fontFace } from 'polished'
import { injectGlobal } from 'styled-components'

const fonts = [
    {
        family: 'Skolar-PE',
        path: `${process.env.PUBLIC_URL}/fonts/Skolar-PE-Regular`,
        formats: ['woff', 'ttf', 'eot', 'otf', 'svg'],
        weight: 400
    }, {
        family: 'Skolar-PE',
        path: `${process.env.PUBLIC_URL}/fonts/Skolar-PE-Bold`,
        formats: ['woff', 'ttf', 'eot', 'otf', 'svg'],
        weight: 700
    }, {
        family: 'Geometria',
        path: `${process.env.PUBLIC_URL}/fonts/Geometria`,
        formats: ['woff', 'ttf', 'eot', 'otf', 'svg'],
        weight: 400
    }, {
        family: 'Geometria',
        path: `${process.env.PUBLIC_URL}/fonts/Geometria-Light`,
        formats: ['woff', 'ttf', 'eot', 'otf', 'svg'],
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
