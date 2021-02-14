import colors from "vuetify/es5/util/colors";
import { resolve } from 'path'
export default  {
  ssr: false,
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: "server",
  target: 'static',
  router: {
    // base: '/<repository-name>/'
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'y',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},

      /* <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css" integrity="sha384-JvExCACAZcHNJEc7156QaHXTnQL3hQBixvj5RV5buE7vgnNEzzskDtx9NQ4p6BJe" crossorigin="anonymous"> */
      // { rel:'stylesheet' , href:'https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.23/af-2.3.5/b-1.6.5/b-colvis-1.6.5/b-flash-1.6.5/b-html5-1.6.5/b-print-1.6.5/cr-1.5.3/fc-3.3.2/fh-3.1.8/kt-2.6.0/r-2.2.7/rg-1.1.2/rr-1.2.7/sc-2.0.3/sb-1.0.1/sp-1.2.2/sl-1.3.1/datatables.min.css'},
      // { rel:'stylesheet' ,  href:"https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css" , integrity:"sha384-JvExCACAZcHNJEc7156QaHXTnQL3hQBixvj5RV5buE7vgnNEzzskDtx9NQ4p6BJe" , crossorigin:"anonymous"},
     ],
    script:[
    /*
    <script src="js/dataTables.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>
    <script src="js/dataTables.buttons.min.js"></script>
    <script src="js/buttons.flash.min.js"></script>
    <script src="js/jszip.min.js"></script>
    <script src="js/pdfmake.min.js"></script>
    <script src="js/vfs_fonts.js"></script>
    <script src="js/buttons.html5.min.js"></script>
    <script src="js/buttons.print.min.js"></script>
    <script src="js/buttons.colVis.min.js"></script> */
      // {src:'https://code.jquery.com/jquery-3.5.1.js',integrity: 'sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=',crossorigin:'anonymous'},
      // {src:'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js'},
      // {src:'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js'},
      // {src:'https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.23/af-2.3.5/b-1.6.5/b-colvis-1.6.5/b-flash-1.6.5/b-html5-1.6.5/b-print-1.6.5/cr-1.5.3/fc-3.3.2/fh-3.1.8/kt-2.6.0/r-2.2.7/rg-1.1.2/rr-1.2.7/sc-2.0.3/sb-1.0.1/sp-1.2.2/sl-1.3.1/datatables.min.js'},
      // { src:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/js/all.min.js" , integrity:"sha512-UwcC/iaz5ziHX7V6LjSKaXgCuRRqbTp1QHpbOJ4l1nw2/boCfZ2KlFIqBUA/uRVF0onbREnY9do8rM/uT/ilqw==" , crossorigin:"anonymous"},
      // { src:"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" , integrity:"sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" , crossorigin:"anonymous"},
      // { src:"https://cdn.rtlcss.com/bootstrap/v4.5.3/js/bootstrap.min.js" , integrity:"sha384-VmD+lKnI0Y4FPvr6hvZRw6xvdt/QZoNHQ4h5k0RL30aGkR9ylHU56BzrE2UoohWK" , crossorigin:"anonymous"}
      { src: '/jquery.js' },
      { src: '/popper.min.js' },
      { src: '/bootstrap.min.js' },
      { src: '/dataTables.js' },
      { src: '/jquery.dataTables.min.js' },
      { src: '/dataTables.buttons.min.js' },
      { src: '/buttons.flash.min.js' },
      { src: '/jszip.min.js' },
      { src: '/pdfmake.min.js' },
      { src: '/buttons.html5.min.js' },
      { src: '/buttons.print.min.js' },
      { src: '/buttons.colVis.min.js' },
]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    /*
        <link rel="stylesheet" href="css/datatablefinal.css" />
        <link rel="stylesheet" href="css/buttons.dataTables.min.css">
        <link rel="stylesheet" href="css/select.dataTables.min.css">
        <link rel="stylesheet" href="css/editor.dataTables.min.css">
        <link rel="stylesheet" href="css/bootstrap-rtl.min.css">
        <link rel="stylesheet" href="css/all.min.css">

      */
    'bootstrap-v4-rtl/dist/css/bootstrap.css',
    '~/assets/style.css',
    '~/assets/datatablefinal.css',
    '~/assets/buttons.dataTables.min.css',
    '~/assets/select.dataTables.min.css',
    '~/assets/editor.dataTables.min.css',
    '~/assets/bootstrap-rtl.min.css',
    '~/assets/datatables.min.css',
    '~/assets/all.css',

  ],


  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // '~/plugins/jquery.js',
    // '~/plugins/popper.min.js',
    // '~/plugins/bootstrap.min.js',
    // '~/plugins/dataTables.js',
    // '~/plugins/jquery.dataTables.min.js',
    // '~/plugins/dataTables.buttons.min.js',
    // '~/plugins/buttons.flash.min.js',
    // '~/plugins/jszip.min.js',
    // '~/plugins/pdfmake.min.js',
    // '~/plugins/vfs_fonts.js',
    // '~/plugins/buttons.html5.min.js',
    // '~/plugins/buttons.print.min.js',
    // '~/plugins/buttons.colVis.min.js',
],
  alias: {
    'style': resolve(__dirname, './assets/style')
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    // customVariables: ["~/assets/variables.scss"],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    analyze: true,
    extractCSS: true,
  },
};
