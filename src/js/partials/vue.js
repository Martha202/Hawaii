//import Vue from 'vue/dist/vue.js'
const Vue = require('vue/dist/vue.js')
const axios = require('axios').default
import Splide from '@splidejs/splide'

let app = new Vue({
  el: '#app',
  data: function () {
    return {
      images: []
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(response => {
        this.images = response.data
        // Create and mount the thumbnails slider.
        setTimeout(function() {
          var secondarySlider = new Splide( '#secondary-slider', {
            rewind      : true,
            fixedWidth  : 100,
            fixedHeight : 64,
            isNavigation: true,
            gap         : 10,
            focus       : 'center',
            pagination  : false,
            cover       : true,
            breakpoints : {
              '600': {
                fixedWidth  : 66,
                fixedHeight : 40,
              }
            }
          } ).mount()

          // Create the main slider.
          var primarySlider = new Splide( '#primary-slider', {
            type       : 'fade',
            heightRatio: 0.5,
            pagination : false,
            arrows     : false,
            cover      : true,
          } )

          primarySlider.sync( secondarySlider ).mount()
        },300)
      })
  }
})
