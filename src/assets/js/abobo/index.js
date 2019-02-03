import '@babel/polyfill'
import $ from 'jquery'
import FastClick from 'fastclick'
import mv from './mv'
import slider from './slider'
import modal from './modal'
import screen from './screen'

$(function () {
  FastClick.attach(document.body)

  slider()
  modal()
  mv()
  screen()
})
