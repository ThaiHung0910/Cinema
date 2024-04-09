import { useMediaQuery } from 'react-responsive'

export const ResponsiveDesktop = ({children}) => {
    const isDesktop = useMediaQuery({ minWidth: 1280 })
    return isDesktop ? children : null;
}

export const ResponsiveTablet = ({children}) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 })
    return isTablet ? children : null;
}

export const ResponsiveMobile = ({children}) => {
   const isMobile =  useMediaQuery({ maxWidth: 767 })
   return isMobile ? children : null;
}
