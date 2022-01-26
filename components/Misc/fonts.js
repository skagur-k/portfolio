import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
        `}
    />
)

export default Fonts
