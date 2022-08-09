const BASE_URL = "https://pokeapi.co/api/v2/";

export async  function getPokex (limit) {
    const getData = await fetch( `${BASE_URL}pokemon?limit=${limit}&offset=0`)
    return  getData.json();

}