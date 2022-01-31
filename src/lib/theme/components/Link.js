import { mode } from '@chakra-ui/theme-tools'
export const Link = {
    baseStyle: props => ({
        _focus: { boxShadow: '0' },
        color: mode('#3d7aed', '#ff63c3')(props),
        textUnderlineOffset: 3
    }),

    variants: {
        navbarItem: props => ({
            p: '0.1rem 0.75rem',
            borderRadius: '2px',
            '--hover-color': mode(
                'var(--chakra-colors-gray-300)',
                'var(--chakra-colors-gray-700)'
            )(props),
            '--active-color': mode(
                'var(--chakra-colors-gray-700)',
                'var(--chakra-colors-gray-300)'
            )(props),
            _hover: {
                bg: !props.active
                    ? 'linear-gradient(to right, var(--hover-color) 2px, transparent 2px) 0 0, linear-gradient(to right, var(--hover-color) 2px, transparent 2px) 0 100%, linear-gradient(to left, var(--hover-color) 2px, transparent 2px) 100% 0, linear-gradient(to left, var(--hover-color) 2px, transparent 2px) 100% 100%,linear-gradient(to bottom, var(--hover-color) 2px, transparent 2px) 0 0, linear-gradient(to bottom, var(--hover-color) 2px, transparent 2px) 100% 0, linear-gradient(to top, var(--hover-color) 2px, transparent 2px) 0 100%, linear-gradient(to top, var(--hover-color) 2px, transparent 2px) 100% 100%'
                    : undefined,
                bgRepeat: 'no-repeat',
                textDecoration: 'none',
                bgSize: '6px 6px'
            },
            bg: props.active
                ? 'linear-gradient(to right, var(--active-color) 2px, transparent 2px) 0 0, linear-gradient(to right, var(--active-color) 2px, transparent 2px) 0 100%, linear-gradient(to left, var(--active-color) 2px, transparent 2px) 100% 0, linear-gradient(to left, var(--active-color) 2px, transparent 2px) 100% 100%,linear-gradient(to bottom, var(--active-color) 2px, transparent 2px) 0 0, linear-gradient(to bottom, var(--active-color) 2px, transparent 2px) 100% 0, linear-gradient(to top, var(--active-color) 2px, transparent 2px) 0 100%, linear-gradient(to top, var(--active-color) 2px, transparent 2px) 100% 100%'
                : undefined,
            bgRepeat: 'no-repeat',
            bgSize: '6px 6px',
            textDecoration: 'none'
        })
    }
}

export default Link
