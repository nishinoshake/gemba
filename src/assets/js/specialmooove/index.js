import FastClick from 'fastclick'
import mv from './mv'
import card from './card'
import slider from './slider'
import modal from './modal'

document.addEventListener('DOMContentLoaded', () => {
  FastClick.attach(document.body)

  card()
  slider()
  modal()
  mv()
})
