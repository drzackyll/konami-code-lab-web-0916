const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

function init() {
  document.body.addEventListener('keydown', function(event) {
    var key = parseInt(event.detail || event.which)
    // var input.push(key)
    if (key === code[index]){
      index++
      if (index === code.length - 1){
        alert("Congrats!")
        index = 0
      }
    }
  })
}
init()
