$(function () {
  // ロード画面　ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  $('.js-loader').delay(600).fadeIn('fast');

  $(window).on('load', function () {
    $('.js-loader').delay(2000).fadeOut("slow");
    $('.js-loader-bg').delay(2000).fadeOut("slow");
  });

  //ページの読み込みが完了してなくても6秒後に非表示に
  setTimeout(function () {
    $('.js-loader-bg').fadeOut(600);
  }, 6000);

  // ハンバーガーメニュー　ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  $('.js-icon').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.l-header__navWrap').addClass('active');
    } else {
      $('.l-header__navWrap').removeClass('active');
    }
  });

  // 要素がスクロールでフェードインしてくるーーーーーーーーーーーーーーーーーーーー
  const fade_bottom = 100, // 画面下からどの位置でフェードさせるか(px)
    fade_move = 80, // どのぐらい要素を動かすか(px)
    fade_time = 1000; // フェードの時間(ms)
  $('.js-fadeUp').css({
    opacity: 0,
    transform: 'translateY(' + fade_move + 'px)',
    transition: fade_time + 'ms',
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function () {
    const scroll_top = $(this).scrollTop(),
      scroll_bottom = scroll_top + $(this).height(),
      fade_position = scroll_bottom - fade_bottom;

    $('.js-fadeUp').each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: 'translateY(0)',
        });
      }
    });
  });

  // 横方向に流れ続ける無限ループスライダーーーーーーーーーーーーーーーーーーーー
  $('.intro__sliderWrap').slick({
    autoplay: true, //自動スクロール
    autoplaySpeed: 0, //自動再生時のスライド切り替えの時間
    speed: 5000, //スライドが流れるスピード
    arrows: false, //左右の矢印を非表示
    swipe: false, //スワイプ禁止
    slidesToShow: 4, //表示するスライドの数
    cssEase: 'linear', //画像切り替えのアニメーション"linearは等速"
    pauseOnFocus: false, //フォーカスしても止めない
    pauseOnHover: false, //マウスホバーしても止めない
  });


  // FLOWが順にフェードアップ(PCのみ)ーーーー未実装ーーーコード要検討ーーーーーーーーーーーーー
  // 要素の位置を取得してクラスを付与する関数
  // function flowAnimation() {
  //   $(window).on('scroll', function () {
  //     $('.js-scroll-trigger').each(function () {
  //       let position = $(this).offset().top,
  //         scroll = $(window).scrollTop(),
  //         windowHeight = $(window).height();
  //       if (scroll > position - windowHeight + 200) {
  //         $(this).addClass('active');
  //       }
  //     });
  //   });
  // }
  // if ($('.js-scroll-trigger').length) {
  //   flowAnimation();
  // }
  // $(window).trigger('scroll');


  // アコーディオンーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  $('.faq__listQuestion').on('click', function () {
    $(this).next().slideToggle(300);
    $(this).toggleClass("open", 300);
  });

});