document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes-button")
    const noButton = document.getElementById("no-button")
    const container = document.querySelector(".container")
  
    let isFirstMove = true

    function prepareButtonForMovement() {
      if (isFirstMove) {
    
        const rect = yesButton.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
    
        const currentLeft = rect.left - containerRect.left
        const currentTop = rect.top - containerRect.top
  
        yesButton.classList.add("moving")
  
        yesButton.style.left = currentLeft + "px"
        yesButton.style.top = currentTop + "px"
  
        isFirstMove = false
  
    
        setTimeout(() => moveButton(), 10)
        return true
      }
      return false
    }

    function moveButton() {
    
      const containerRect = container.getBoundingClientRect()
      const buttonRect = yesButton.getBoundingClientRect()
    
      const maxX = containerRect.width - buttonRect.width
      const maxY = containerRect.height * 2
    
      const randomX = Math.max(0, Math.floor(Math.random() * maxX))
      const randomY = Math.max(0, Math.floor(Math.random() * maxY))
    
      yesButton.style.left = randomX + "px"
      yesButton.style.top = randomY + "px"
    }

    yesButton.addEventListener("mouseover", () => {
      if (!prepareButtonForMovement()) {
        moveButton()
      }
    })

    noButton.addEventListener("click", () => {
      alert("Good choice! Your mental health thanks you!")
    })

    window.addEventListener("resize", () => {
      if (!isFirstMove) {
        moveButton()
      }
    })
  })
  