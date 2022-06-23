


document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()
    let color = document.getElementById('color').value.substring(1)
    let value = document.getElementById('colorValue').value.toLowerCase()
   
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${value}&count=6`)
        .then(res => res.json())
        .then(data => {

            document.getElementById('colorOne').style.background = data.colors[0].rgb.value
            document.getElementById('colorTwo').style.background = data.colors[1].rgb.value
            document.getElementById('colorThree').style.background = data.colors[2].rgb.value
            document.getElementById('colorFour').style.background = data.colors[3].rgb.value
            document.getElementById('colorFive').style.background = data.colors[4].rgb.value
            document.getElementById('colorSix').style.background = data.colors[5].rgb.value
            
            
            document.getElementById('colorOne').innerHTML = data.colors[0].hex.value
            document.getElementById('colorTwo').innerHTML = data.colors[1].hex.value
            document.getElementById('colorThree').innerHTML = data.colors[2].hex.value
            document.getElementById('colorFour').innerHTML = data.colors[3].hex.value
            document.getElementById('colorFive').innerHTML = data.colors[4].hex.value
            document.getElementById('colorSix').innerHTML = data.colors[5].hex.value

            document.getElementById('colorOne').addEventListener('dblclick', function(){
                navigator.clipboard.writeText(data.colors[0].hex.value)
                this.style.border = "1px solid black"
            })
            document.getElementById('colorTwo').addEventListener('dblclick', function(){
                navigator.clipboard.writeText(data.colors[1].hex.value)
                this.style.border = "1px solid black"
            })
            document.getElementById('colorThree').addEventListener('dblclick', function(){
                navigator.clipboard.writeText(data.colors[2].hex.value)
                this.style.border = "1px solid black"
            })
            document.getElementById('colorFour').addEventListener('dblclick', function(){
                navigator.clipboard.writeText(data.colors[3].hex.value)
                this.style.border = "1px solid black"
            })
            document.getElementById('colorFive').addEventListener('dblclick', function(){
                navigator.clipboard.writeText(data.colors[4].hex.value)
                this.style.border = "1px solid black"
            })
            document.getElementById('colorSix').addEventListener('dblclick', function(){
                navigator.clipboard.writeText(data.colors[5].hex.value)
                this.style.border = "1px solid black"
            })
        })

})


