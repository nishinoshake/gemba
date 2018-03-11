import { TweenMax, Power0 } from 'gsap'
import imagesLoaded from 'imagesloaded'
import { eachElement } from './helper'

export default function () {
  const SPEED = 45
  const cards = document.querySelectorAll('.intro-card')

  eachElement(cards, card => {
    imagesLoaded(card, () => {
      const inside = card.querySelector('.intro-card-inside')
      const img = inside.querySelector('img')
      const distance = img.clientWidth
      const duration = distance / SPEED
      const toRight = card.classList.contains('mod-reverse')

      inside.appendChild(img.cloneNode(true))

      TweenMax.fromTo(
        inside,
        duration,
        {
          x: toRight ? -distance : 0
        },
        {
          x: toRight ? 0 : -distance,
          ease: Power0.easeNone,
          repeat: -1
        }
      )
    })
  })
}
