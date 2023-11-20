const getFullYear = () =>{
    const currentlyDate = new Date ()
    return currentlyDate.getFullYear();
}

export function getFootCopy(isIndex){
    return isIndex ? "Holberton School" : "Holberton School main dashboard"
}


export const getLatestNotification =() =>{
    return "<strong>Urgent requirement</strong> - complete by EOD";
}

export default getFullYear;