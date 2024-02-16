export class ListCharacter{
    #characters=[];
    #page

    setPage(page){
        this.#page=page;
    }
    getPage(){
        return this.#page;
    }
    addCharacter(character){
        this.#characters.push(character);
    }
    getCharacters(){
        return this.#characters;
    }
}