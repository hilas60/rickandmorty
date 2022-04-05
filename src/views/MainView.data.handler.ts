import axios from "axios";
// import { Character } from "./character.type";

export const fetchData = async (query, queryKey) => {
    const filterQuery = query && queryKey === 'name' ? `?${queryKey}=${query}` : queryKey === 'id'? `${query || 0}` : '';
    try {
        const res = await axios.get('https://rickandmortyapi.com/api/character/' + filterQuery);
        return res.data;
    } catch (error) {
        console.error(error)
        return null        
    }
}