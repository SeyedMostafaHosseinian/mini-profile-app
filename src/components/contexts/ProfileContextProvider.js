import React , {createContext, useState} from 'react';


//images
import todoImg from "../../assets/p1.jpg";
import ProfileImg from "../../assets/p2.png"

export const ProfileContext = createContext()
const ProfileContextProvider = ({children}) => {
    const [Profile,setProfile] = useState({
        projects:[

            { 
                id:1 , 
                image:todoImg, 
                title:"todo App" 
                ,description:"a mini project" , 
                repository: "https://github.com/SeyedMostafaHosseinian/to-do-app.git" , 
                link:"https://todoapp-mostafa.netlify.app/"   
            },
            { 
                id:2, 
                image:ProfileImg , 
                title:"profile app" 
                ,description:"a mini project" , 
                repository: "https://github.com/SeyedMostafaHosseinian/to-do-app.git" , 
                link:"https://todoapp-mostafa.netlify.app/"   
            },
        ]
    })
    return (
        <ProfileContext.Provider value={Profile}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileContextProvider;