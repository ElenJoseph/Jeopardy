const categories = [
  {
    title: 'Sci-Fi Stuff',
    clues: [
      {
        text: `The latex prosthetic ears worn by this 'Star Trek' actor in the late '60s even have some residual makeup left on them`,
        value: 200,
        answer: `Who is Leonard Nimoy`
      },
      {
        text: `The piece here is really green cast resin in crystal form, but in 'Superman III', it was called this, & appeared onscreen with Christopher Reeve`,
        value: 400,
        answer: `What is Kryptonite`
      },
      {
        text: `Seen in Dr. Zaius' private chambers, the Lawgiver statue from this 1968 film looks to be stone, but is actually made of cast & carved rigid polyfoam`,
        value: 600,
        answer: `What is Planet of the Apes`
      }
    ]
  },
  {
    title: 'TV Shows By Couple',
    clues: [
      {
        text: `Monica & Chandler`,
        value: 200,
        answer: `What is Friends`
      },
      {
        text: `Carrie & Mr. Big`,
        value: 400,
        answer: `What is Sex and the City`
      },
      {
        text: `Jim Halpert & Pam Beesly, who hooked up at work`,
        value: 600,
        answer: `What is The Office`
      }
    ]
  },
  {
    title: 'Mother Goose',
    clues: [
      {
        text: `They were the 'Three Men in a Tub'`,
        value: 200,
        answer: `Who is the butcher, the baker, the candlestick maker`
      },
      {
        text: `March winds & April showers brings forth these`,
        value: 400,
        answer: `What is May Flowers`
      },
      {
        text: `After 'Jack fell down and broke his crown', he 'went to bed to mend his head' using brown paper & this liquid`,
        value: 600,
        answer: `What is Vinegar`
      }
    ]
  }
]
//my code starts here

const $cell= document.querySelector('.cell')
const $title = document.querySelector('.title')
const information = []
const $overlay = document.getElementById('overlay')
const $clue = document.getElementById('clue')
const $button = document.getElementById('close')
const $answer = document.getElementById('answer')

// add title 
for(const category of categories){

  information.push(`<div class="category">`)
  information.push(`<div class="title">${category.title}</div>`)
  for (const clue of category.clues){
    information.push(`<div class="cell" data-clue="${clue.text}" data-answer="${clue.answer}">${clue.value}</div>`)}
    information.push(`</div>`)
  }

const $board=document.getElementById('board')
$board.innerHTML=information.join('')

//creating funtion on the board
$board.addEventListener('click', function(event){
  if(event.target.classList.contains('cell')){
    $overlay.classList.add('show')
    $answer.classList.remove('show')
    $clue.textContent= event.target.dataset.clue
    $answer.textContent= event.target.dataset.answer
    $button.textContent='Show Answer'
  }
})

// showing the answer and closing overlay

$button.addEventListener('click', function(event){
  if (event.target.classList.contains('button')){
    if($answer.classList.contains('show')){
      $answer.classList.remove('show')
      $overlay.classList.remove('show')
    }
    else{
      $answer.classList.add('show')
      $button.textContent='close'
    }
  }
}
)