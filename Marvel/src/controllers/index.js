import { Character } from "../models/Character.js";
import { listCharacter } from "./Dependenciesl.js";

let btnCharger=document.getElementById("button")
btnCharger.addEventListener("click",function(){
    //const apikey="?apikey=a0a9293ae93ff298770aebdd4356b9c7&ts=24/05/2023,%2013:34:34&hash=2278d1e50ea05ee3cbdecf31d510eeac";
    const url="https://gateway.marvel.com/v1/public/characters?apikey=a0a9293ae93ff298770aebdd4356b9c7&ts=24/05/2023,%2013:34:34&hash=2278d1e50ea05ee3cbdecf31d510eeac"
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        listCharacter.setPage(1);
        console.log(data.data.results);
        data.data.results.forEach(element => {
            let character=new Character();
            if(element.thumbnail.extension=="jpg"){
                character.setImage(element.thumbnail.path+".jpg");
            }else{
                character.setImage(element.thumbnail.path+".gif");
            }
            character.setName(element.name);
            if(element.description==""){
                character.setDescription("None description");
            }else{
                character.setDescription(element.description);
            }
            listCharacter.addCharacter(character);
        })
    })
    
})

const btnView= document.getElementById("character");
btnView.addEventListener("click",function(){

    const characterCard=document.getElementById("data");

    console.log(listCharacter.getCharacters());
    listCharacter.getCharacters().forEach(item=>{
        
        let image=document.createElement("img");
        image.src=item.getImage();
        
        let name=document.createElement("h2");
        name.innerText=item.getName();
        
        let description=document.createElement("p");
        description.innerText=item.getDescription();

        let character=document.createElement("div");
        character.appendChild(description);
        character.appendChild(image);
        character.appendChild(name);

        characterCard.appendChild(character);
    })
})
