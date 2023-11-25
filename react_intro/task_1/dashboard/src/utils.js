const getFullYear = () =>{
    const currentlyDate = new Date ()
    return currentlyDate.getFullYear();
}

export function getFootCopy(isIndex){
    return isIndex ? "Holberton School" : "Holberton School main dashboard"
}



export default getFullYear;