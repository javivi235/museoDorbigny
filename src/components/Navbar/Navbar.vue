<template>
  <div>
    <v-app-bar fixed :color="color" :dark="dark">
      <v-btn color="transparent" text to="/">
        <v-img class="mx-2" src="@/assets/logo.jpg" max-height="60" max-width="60" contain></v-img>
      </v-btn>

      <v-toolbar-title>Museo Alcide d'Orbigny</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="item in items" v-bind:key="item.text" @click="navigateTo(item.to)">
          <span class="btn-text">{{ item.text }}</span>
        </v-btn>
        <v-btn icon @click="changeTheme">
          <v-icon>mdi-compare</v-icon>
        </v-btn>
      </v-toolbar-items>

      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn class="hidden-md-and-up" v-on="on" icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item.text">
            <v-btn text @click="navigateTo(item.to)">
              <span class="btn-text">{{ item.text }}</span>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      color: 'white',
      dark: false,
      lastScrollPosition: 0,
      transparentNavbarViews: ['home', 'about'],
      items: [
        {
          text: 'Publicaciones',
          to: '/'
        },
        {
          text: 'Secciones',
          to: '/'
        },
        {
          text: 'Acerca de',
          to: '/about'
        },
        {
          text: 'Contáctanos',
          to: '/contact'
        }
      ]
    }
  },
  mounted: function () {
    if (this.transparentNavbarViews.includes(this.$route.name)) {
      window.addEventListener('scroll', this.onScroll)

      this.setTheme('transparent', true)
    }
  },
  beforeDestroy () {
    if (this.transparentNavbarViews.includes(this.$route.name)) {
      window.removeEventListener('scroll', this.onScroll)
    }
  },
  methods: {
    onScroll: function () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

      if (currentScrollPosition > window.innerHeight) {
        this.setTheme('white', false)
      } else {
        this.setTheme('transparent', true)
      }
    },
    setTheme: function (color, dark) {
      this.color = color
      this.dark = dark
    },
    changeTheme: function () {
      this.color = this.color === 'white' ? 'transparent' : 'white'
      this.dark = !this.dark
    },
    navigateTo (to) {
      this.$router.push(to)
    }
  },
  watch: {
    $route (to, from) {
      if (this.transparentNavbarViews.includes(this.$route.name)) {
        window.addEventListener('scroll', this.onScroll)

        this.setTheme('transparent', true)
      } else {
        window.removeEventListener('scroll', this.onScroll)

        this.setTheme('white', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $black: #000000;

  $duration: 0.4s;
  $distance: 15px;
  $easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  .btn-text {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;

    &:before,
    &:after {
      content: "";
      position: absolute;
      bottom: 1px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: $black;
    }

    &:before {
      opacity: 0;
      transform: translateY(-$distance);
      transition: transform 0s $easeOutBack, opacity 0s;
    }

    &:after {
      opacity: 0;
      transform: translateY($distance/2);
      transition: transform $duration $easeOutBack, opacity $duration;
    }

    &:hover,
    &:focus {

      &:before,
      &:after {
        opacity: 1;
        transform: translateY(0);
      }

      &:before {
        transition: transform $duration $easeOutBack, opacity $duration;
      }

      &:after {
        transition: transform 0s $duration $easeOutBack, opacity 0s $duration;
      }
    }
  }
</style>
