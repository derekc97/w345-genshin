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

                let picLink = "https://api.genshin.dev/characters/" + charList[i] + "/icon";
                
                //replaces dead icon links with icon-big
                if (name == "collei" || name == "kuki-shinobu" || name == "shikanoin-heizou" || name == "tighnari") {
                    picLink = "https://api.genshin.dev/characters/" + charList[i] + "/icon-big";
                }

                console.log(picLink);
                let img = document.createElement("img");
                img.src = picLink;
                img.style.height = "50px";
                img.style.width = "50px";
                charGrid.appendChild(img);

                let charName = document.createElement("h3");
                
                charName.textContent = upperCase(name);
                // charGrid.appendChild(charName);
                charName.style.fontFamily = "Helvetica";
                charName.style.fontSize = "10px";
                //add images to DOM
                
                


            }
        }

        

        getChar();
