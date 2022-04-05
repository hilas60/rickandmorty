interface NameLinkType {
        name: string,
        url: URL,
}
export interface Character {
    id: number,
    name: string,
    status: 'Alive' | 'Dead' | 'unknown',
    species: string,
    type: string,
    gender: 'Female'| 'Male'| 'Genderless' | 'unknown',
    origin: NameLinkType,
    location: NameLinkType,
    image: string,
    episode: URL[],
    url: URL,
    created: Date
}