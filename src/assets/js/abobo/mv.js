import { TweenMax, Expo } from 'gsap'
import 'gsap/ScrollToPlugin'
import imagesLoaded from 'imagesloaded'

export default function () {
  // MVの画像読み込み完了後アニメーション
  imagesLoaded('#mv', { background: true }, () => {
    setTimeout(() => {
      document.querySelector('.mv-chara01').classList.add('is-active')
      document.querySelector('.mv-chara02').classList.add('is-active')
    }, 300)
  })

  // スクロール
  document.getElementById('mv-scroll').addEventListener('click', () => {
    TweenMax.to(window, 0.8, { scrollTo: '#intro', ease: Expo.easeOut })
  })
}
