import { createContext, useContext, useState } from "react";

interface Bikeprops{
      id:number,
      name:string,
      value:number,
      valuetwo:number,
      addition:number,
      image:number,
      imagepag:number,
      Hors:string,
      quantity: number;
}

interface BikeSelectorProps{
    selectbike: Bikeprops[],
    setSelectBike: (item:Bikeprops[]) => void ,
}

interface BikeProviderProps{
    children:React.ReactNode,
}

export const BikeSelector = createContext({} as BikeSelectorProps );

export const BikeProvider = ({children}: BikeProviderProps) => {
    const [selectbike, setSelectBike] = useState<any>([])
    
    return (
   <BikeSelector.Provider value={{selectbike,setSelectBike}}>
    {children}
   </BikeSelector.Provider>
    )
}

export function useBikeselector(){
    const context = useContext(BikeSelector);
    return context;
}