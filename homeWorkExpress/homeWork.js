const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const app = express()
const PORT = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/get-anecdote/1', (req, res) => {
  const firstAnecdote = '\n' + 'I\'m not being condescending, ' +
    'I\'m too busy thinking about far more important ' +
    'things you wouldn\'t understand.' + '\n'
  const translateFirstAnecdote = '\n' + 'Я не снисходительный, ' +
    'я слишком занят мыслями о гораздо более важных вещах, ' +
    'которые ты не поймешь'

  res.send(`First joke is:  ${firstAnecdote} Translate is: ${translateFirstAnecdote}`)
})

app.get('/get-anecdote/2', (req, res) => {
  const secondAnecdote = '\n' + 'People with Tourettes.....What makes them tick?' + '\n'
  const translateSecondAnecdote = '\n' + 'Люди с Туреттом ..... Что в них движет?'


  res.send(`Second joke is:  ${secondAnecdote} Translate is : ${translateSecondAnecdote} `)
})

app.get('/get-anecdote/3', (req, res) => {
  const thirdAnecdote = '\n' + 'British scientists have demonstrated ' +
    'that cigarettes can harm your children. ' +
    'Fair enough. Use an ashtray!' + '\n'
  const translateThirdAnecdote = '\n' + 'Британские ученые доказали, ' +
    'что сигареты могут навредить вашим детям. ' +
    'Справедливо. Используйте пепельницу!'

  res.send(`Third joke is:  ${thirdAnecdote} Translate is: ${translateThirdAnecdote}`)
})

app.listen(PORT, () => {
  console.log('Prepare to the 3 jokes')
})