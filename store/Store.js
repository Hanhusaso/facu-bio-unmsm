import React, { useState } from 'react'

export const Context = React.createContext()

const Store = ({ children }) => {
    const [state, setstate] = useState(true)

    return (
        <Context.Provider value={[state, setstate]}>{children}</Context.Provider>
    )
}

export default Store;