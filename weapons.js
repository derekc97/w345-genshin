const api_url = "https://api.genshin.dev/";
        const body = document.querySelector("body");
        let weapList;
        const weapGrid = document.querySelector(".weapon-grid")
        
        function upperCase(string) {
            return string[0].toUpperCase() + string.slice(1).toLowerCase();
        }

        async function getWeap() {
            const response = await fetch(api_url+"weapons");
            weapList = await response.json();
            console.log(weapList.length);
            //store data in variable

            for (let i = 0; i < weapList.length; i++) {
                let name = weapList[i];

                let picLink = "https://api.genshin.dev/weapons/" + weapList[i] + "/icon";
                
                console.log(picLink);
                let weapCard = document.createElement("div");
                let img = document.createElement("img");
                img.src = picLink;
                img.style.height = "100%";
                img.style.width = "100%";
                weapCard.appendChild(img);
                weapGrid.appendChild(weapCard);

                let weapName = document.createElement("h3");
                
                weapName.textContent = upperCase(name);
                weapCard.appendChild(weapName);
                // charGrid.appendChild(charName);
                weapName.style.fontFamily = "Helvetica";
                weapName.style.fontSize = "10px";
                //add images to DOM
                
                


            }
        }

        

        getWeap();
