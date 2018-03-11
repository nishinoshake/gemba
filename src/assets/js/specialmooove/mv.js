import { TweenMax, Expo, Power2, Power3, Bounce, Elastic } from 'gsap'
import 'gsap/ScrollToPlugin'
import imagesLoaded from 'imagesloaded'

export default function () {
  const anime = () => {
    // パッケージ
    TweenMax.fromTo(
      '#mv-package',
      0.6,
      {
        x: 600,
        opacity: 1
      },
      {
        x: 0,
        ease: Expo.easeOut
      }
    )

    // カード
    TweenMax.fromTo(
      '#mv-card',
      0.6,
      {
        x: 600,
        opacity: 1
      },
      {
        x: 0,
        ease: Expo.easeOut,
        delay: 0.06
      }
    )

    // タイトル
    TweenMax.fromTo(
      '#mv-title',
      0.6,
      {
        opacity: 1,
        x: -600,
        skewX: 60
      },
      {
        x: 100,
        skewX: -40,
        delay: 0.6,
        ease: Power3.easeOut,
        onComplete: () => {
          TweenMax.to('#mv-title', 0.4, {
            x: 0,
            skewX: 0,
            ease: Bounce.easeOut
          })
        }
      }
    )

    // 背景
    TweenMax.fromTo(
      '#mv-bg',
      0.6,
      {
        opacity: 0,
        scale: 0.5
      },
      {
        opacity: 1,
        scale: 1,
        delay: 1.35,
        ease: Elastic.easeOut.config(1, 0.3)
      }
    )

    // スクロールとテキスト
    TweenMax.fromTo(
      ['#mv-text', '#mv-scroll'],
      0.3,
      {
        opacity: 0
      },
      {
        opacity: 1,
        delay: 2,
        ease: Power2.easeOut
      }
    )
  }

  // MVの画像読み込み完了後アニメーション
  imagesLoaded('#mv', { background: true }, () => {
    setTimeout(() => anime(), 300)
  })

  // スクロール
  document.getElementById('mv-scroll').addEventListener('click', () => {
    TweenMax.to(window, 0.8, { scrollTo: '#intro', ease: Expo.easeOut })
  })
}
