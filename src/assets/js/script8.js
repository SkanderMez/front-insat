/*<![CDATA[*/
if (setREVStartSize !== undefined) setREVStartSize({
  c: '#rev_slider_1_1',
  gridwidth: [1380],
  gridheight: [713],
  sliderLayout: 'auto'
});
var revapi1, tpj;
(function() {
  if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);
  else onLoad();

  function onLoad() {
    if (tpj === undefined) {
      tpj = jQuery;
      if ("off" == "on") tpj.noConflict();
    }
    if (tpj("#rev_slider_1_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_1_1");
    } else {
      revapi1 = tpj("#rev_slider_1_1").show().revolution({
        sliderType: "standard",
        jsFileLocation: "//demo.goodlayers.com/kingster/wp-content/plugins/revslider/public/assets/js/",
        sliderLayout: "auto",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          mouseScrollReverse: "default",
          onHoverStop: "off",
          touch: {
            touchenabled: "on",
            touchOnDesktop: "off",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          },
          arrows: {
            style: "uranus",
            enable: true,
            hide_onmobile: true,
            hide_under: 1500,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: '',
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 20,
              v_offset: 0
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 20,
              v_offset: 0
            }
          },
          bullets: {
            enable: true,
            hide_onmobile: false,
            hide_over: 1499,
            style: "uranus",
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            direction: "horizontal",
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 30,
            space: 7,
            tmp: '<span class="tp-bullet-inner"></span>'
          }
        },
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: 1380,
        gridheight: 713,
        lazyType: "none",
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        }
      });
    };
  };
}()); /*]]>*/
