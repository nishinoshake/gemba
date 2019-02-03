import $ from 'jquery'
import { TweenMax, Expo, Power4 } from 'gsap'

export default function () {
  const $el = {
    '1': $('.screen-flip.mod-left'),
    '-1': $('.screen-flip.mod-right')
  }

  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  async function wait (ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, ms)
    })
  }
  async function show (sign) {
    return new Promise(resolve => {
      const $inner = $el[sign].find('.screen-flip-inner')

      $el[sign].find('.screen-flip-front').css({ opacity: 1 })
      TweenMax.set($el[sign], { rotationZ: 0 })
      TweenMax.set($inner, { rotationY: 0 })

      TweenMax.to($el[sign], 0.5, {
        x: 0,
        ease: Expo.easeOut,
        onComplete () {
          resolve()
        }
      })
    })
  }

  async function hide (sign) {
    return new Promise(resolve => {
      TweenMax.to($el[sign], 0.6, {
        x: -1 * sign * 70,
        rotationZ: -1 * sign * 10,
        ease: Power4.easeOut,
        onComplete () {
          TweenMax.to($el[sign], 0.5, {
            x: sign * 500,
            rotationZ: 0,
            ease: Power4.easeOut,
            onComplete () {
              resolve()
            }
          })
        }
      })
    })
  }

  async function flip (sign) {
    return new Promise(resolve => {
      const num = getRandomInt(0, 5)
      const $inner = $el[sign].find('.screen-flip-inner')

      TweenMax.to($inner, 0.16, {
        rotationY: 90,
        ease: Power4.easeIn,
        onComplete () {
          $el[sign].find('.screen-flip-front').css({ opacity: 0 })
          $el[sign].find('.screen-flip-back img').css({ opacity: 0 })
          $el[sign].find('.screen-flip-back img').eq(num).css({ opacity: 1 })
          TweenMax.to($inner, 0.16, {
            rotationY: 180,
            ease: Power4.easeOut,
            onComplete () {
              resolve()
            }
          })
        }
      })
    })
  }

  async function anime (sign) {
    await show(sign)
    await flip(sign)
    await wait(3000)
    await hide(sign)
  }

  anime(1)
  anime(-1)
  setInterval(() => {
    anime(1)
    anime(-1)
  }, 8000)
}
