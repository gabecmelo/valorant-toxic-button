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
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
  
      const containerRect = container.getBoundingClientRect()
      const buttonRect = yesButton.getBoundingClientRect()
  
      const containerLeft = containerRect.left
      const containerTop = containerRect.top
  
      const maxX = Math.min(containerRect.width - buttonRect.width, viewportWidth - buttonRect.width - containerLeft)
  
      const maxY = Math.min(containerRect.height * 2, viewportHeight - buttonRect.height - containerTop)
  
      const randomX = Math.max(0, Math.min(Math.floor(Math.random() * maxX), maxX))
      const randomY = Math.max(0, Math.min(Math.floor(Math.random() * maxY), maxY))
  
      yesButton.style.left = randomX + "px"
      yesButton.style.top = randomY + "px"
    }

    yesButton.addEventListener("mouseover", () => {
      if (!prepareButtonForMovement()) {
        moveButton()
      }
    })

    noButton.addEventListener("click", () => {
      alert("Boa escolha! Sua saúde mental agradece! <3")
    })

    window.addEventListener("resize", () => {
      if (!isFirstMove) {
        moveButton()
      }
    })
  })
  