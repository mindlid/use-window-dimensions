import { useCallback, useEffect, useState } from 'react'

type WindowDimensions = {
    height: number
    width: number
}

const getWindowDimensions = (): WindowDimensions => {
    const { innerHeight, innerWidth } = window
    return { height: innerHeight, width: innerWidth }
}

/** Gets the current window dimensions */
export const useWindowDimensions = (): WindowDimensions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions)
    const updateScreen = useCallback(() =>
        setWindowDimensions(getWindowDimensions()), [setWindowDimensions])

    useEffect(() => {
        window.addEventListener('resize', updateScreen)
        return () => window.removeEventListener('resize', updateScreen)
    })

    return windowDimensions
}


