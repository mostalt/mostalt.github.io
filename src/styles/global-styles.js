import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import { fontMain } from './utils-styles'
import './fonts'

injectGlobal`
    ${normalize()}

    body {
        padding: 0;
        margin: 0;
        font-family: ${fontMain};
    }
`
