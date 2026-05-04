 
 export const getAnimalsData =async()=>{
    const res = await fetch("https://qurbani-hat-henna.vercel.app/animalsData.json");
    const animals = await res.json();
    return animals;
 }