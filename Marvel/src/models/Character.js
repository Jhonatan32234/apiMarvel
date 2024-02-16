export class Character{
    #image;
    #name;
    #description;

    setImage(image){
        this.#image=image;
    }
    getImage(){
        return this.#image;
    }
    setName(name){
        this.#name=name;
    }
    getName(){
        return this.#name;
    }
    setDescription(description){
        this.#description=description;
    }
    getDescription(){
        return this.#description;
    }
}