document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

        const width = 10
        let currentIndex = 0
        let appleIndex = 0
        let currentSnake = [2,1,0]
        let direction = 1
        let score = 0
        let speed = 0.9
        let intervalTime = 0
        let interval = 0

        // start and restart
        function startGame() {
            currentSnake.forEach(index => squares[index].classlist.remove('snake'))
            squares[appleIndex].classList.remove('apple')
            clearInterval(interval)
            score = 0
            //random apple
            direction = 1
            scoreDisplay.innerText = score
            intervalTime = 1000
            currentSnake = [2,1,0]
            currentIndex = 0
            currentSnake.forEach(index => squares.[index].classlist.add('snake'))
            interval = setInterval(moveOutcomes, intervalTime)
        }

        //possible outcomes
        function moveOutcomes() {
            //snake hitting wall or self


            //eating an apple



        }
        function control(e) {
            squares[currentIndex].classList.remove('snake')

            if(e.keyCode === 39) {
                direction = 1 //right
            } else if (e.keyCode === 38) {
                direction = -width //up
            } else if (e.keyCode === 37) {
                direction = -1 //left
            } else if (e.keyCode === 40) {
                direction = +width //down
            }
        }

        document.addEventListener('keyup', control)

})