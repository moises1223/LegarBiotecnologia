const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate() {
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = Math.max(1, Math.ceil(target / speed))  // Garante um incremento mínimo de 1
        
        if (count < target) {
            counter.innerText = Math.min(count + inc, target)  // Não ultrapassa o target
            setTimeout(upDate, 15)
        } else {
            counter.innerText = target
        }
    }
    upDate()
})
