let addCardBtn = document.getElementById('addCard');

let todoContiner = document.getElementById('todo');

let count = 1
addCardBtn.addEventListener("click", ()=>{
     let card  = document.createElement("div")
     card.className = "card";
     card.id = "card" + count++
     card.innerText = "Test Card"
     
     card.setAttribute("contenteditable", "true")
     card.setAttribute("draggable", "true")
     todoContiner.append(card)

     card.addEventListener("click", (event_details)=>{
        
             console.log(card.innerText)
             console.log(card.innerHTML)
          if(card.innerText == "Test Card"){
               card.innerText = ""
          }
     })


     
        card.addEventListener("blur", (event_details)=>{
           let blurredCard = event_details.target

           if(blurredCard.innerText==""){
                blurredCard.remove()
           }
     })
    
     card.addEventListener("dragstart", (event_details)=>{
          card.style.opacity = "0.2"  
          event_details.dataTransfer.setData("text", card.id)
     })

     card.addEventListener("dragend", ()=>{
        card.style.opacity = "1.0" 
     })

    let dragEvents = ["dragover", "dragenter", "drop"]

    dragEvents.forEach((drag)=>{
        let container = document.querySelectorAll(".column")

        for(let t of container){ 
              t.addEventListener(drag, (event_details)=>{
                    event_details.preventDefault()
              
                    if(drag == "drop"){
                        let cardId = event_details.dataTransfer.getData("text")
                        let draggedCard = document.getElementById(cardId)
                        let columnTobeMoved =  event_details.target
                        columnTobeMoved.append(draggedCard)
                    }
            })
        }

    })

}) 