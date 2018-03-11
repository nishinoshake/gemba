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

  // スライド
  new Swiper('.swiper-container', {
    pagination: {
      el: '.system-step-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.system-step-next',
      prevEl: '.system-step-prev'
    }
  })
}
