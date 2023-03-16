const api_url = "https://api.genshin.dev/";
        const body = document.querySelector("body");
        let charList;
        const charGrid = document.querySelector(".character-grid")
        
        function upperCase(string) {
            return string[0].toUpperCase() + string.slice(1).toLowerCase();
        }

        async function getChar() {
            const response = await fetch(api_url+"characters");
            charList = await response.json();
            console.log(charList.length);
            //store data in variable

            for (let i = 0; i < charList.length; i++) {
                let name = charList[i];

                let picLink = "https://api.genshin.dev/characters/" + charList[i] + "/gacha-card";
                
                //replaces dead icon links with icon-big
                if (name == "collei" || name == "kuki-shinobu" || name == "shikanoin-heizou" || name == "tighnari") {
                    picLink = "https://api.genshin.dev/characters/" + charList[i] + "/icon-big";
                }

                console.log(picLink);
                let charCard = document.createElement("div");
                let img = document.createElement("img");
                img.src = picLink;
                img.style.height = "100%";
                img.style.width = "100%";
                charCard.appendChild(img);
                charGrid.appendChild(charCard);

                let charName = document.createElement("h3");
                
                charName.textContent = upperCase(name);
                charCard.appendChild(charName);
                // charGrid.appendChild(charName);
                charName.style.fontFamily = "Helvetica";
                charName.style.fontSize = "10px";
                //add images to DOM
                
                


            }
        }

        

        getChar();
