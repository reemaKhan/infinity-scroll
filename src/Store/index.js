import React, {useState} from "react";


const AppStoreContext = React.createContext();

const AppStoreProvider = ({children}) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AppStoreContext.Provider value={{setIsLoggedIn, isLoggedIn}}>
            {children}
        </AppStoreContext.Provider>
    )
}

export {AppStoreProvider,AppStoreContext};
