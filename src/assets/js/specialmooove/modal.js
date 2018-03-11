import { TweenMax } from 'gsap'
import { eachElement } from './helper'

export default function () {
  const el = {
    body: document.body,
    modal: document.getElementById('modal'),
    modalContents: document.getElementById('modal-contents'),
    modalBody: document.querySelectorAll('modal-body'),
    close: document.getElementById('modal-close'),
    triggers: document.querySelectorAll('.js-modal-trigger'),
    active: null
  }

  const open = () => {
    el.active.style.display = 'block'
    TweenMax.to(el.modal, 0.2, { opacity: 1, display: 'block' })
    el.body.style.overflow = 'hidden'
  }

  const close = () => {
    TweenMax.to(el.modal, 0.2, {
      opacity: 0,
      display: 'none',
      onComplete: () => {
        el.active.style.display = 'none'
      }
    })
    el.body.style.overflow = ''
  }

  // ボタンのクリックで開く
  eachElement(el.triggers, trigger => {
    trigger.addEventListener('click', () => {
      const target = trigger.getAttribute('data-target')
      el.active = document.getElementById(target)

      open()
    })
  })

  el.modalContents.addEventListener('click', e => e.stopPropagation())
  el.modal.addEventListener('click', () => close())
  el.close.addEventListener('click', () => close())
}
