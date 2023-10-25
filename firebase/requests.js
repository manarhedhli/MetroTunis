import db from "../config";
import { collection, getDocs } from "firebase/firestore";

async function getStations(props){
    const ligneName = props.ligne;    
    try {
        const stationsRef = collection(db, ligneName);
        const snapshot = await getDocs(stationsRef);        
    
        const stationData = [];
        snapshot.forEach((doc) => {            
            stationData.push(doc.data());
        });        
        return stationData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export {getStations}