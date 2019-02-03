import $ from 'jquery'
import Swiper from 'swiper/dist/js/swiper.js'
import { eachElement } from './helper'

export default function () {
  const activeClass = 'is-active'
  const INTERVAL = 1300
  const slides = document.querySelectorAll('.system-step-slide')

  const toggleSlide = slide => {
    let index = 0
    const images = slide.querySelectorAll('img')
    const length = images.length

    if (length >= 2) {
      eachElement(images, image => image.classList.add('slide-switch'))

      images[0].classList.add(activeClass)

      setInterval(() => {
        const next = index === length - 1 ? 0 : index + 1

        images[index].classList.remove(activeClass)
        images[next].classList.add(activeClass)

        index = next
      }, INTERVAL)
    }
  }

  // 画像がひとつのスライドに複数ある場合は切り替え
  eachElement(slides, slide => toggleSlide(slide))

  const total = $('.swiper-slide').length

  $('#step-total').text(total)
  $('#step-current').text(1)

  // スライド
  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.system-step-next',
      prevEl: '.system-step-prev'
    }
  })

  swiper.on('slideChange', () => {
    $('#step-current').text(swiper.activeIndex + 1)
  })
}
