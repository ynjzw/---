<template>
  <header :style="headerStyle" class="app-header">
    <div class="left">
      <slot name="left">
        <img v-if="logo" :src="logo" alt="logo" class="logo" />
        <span class="title">{{ title }}</span>
      </slot>
    </div>

    <div class="center">
      <slot name="center"></slot>
    </div>

    <div class="right">
      <slot name="right">
        <nav v-if="navItems && navItems.length" class="nav">
          <a v-for="(item, idx) in navItems" :key="idx" href="#" @click.prevent="onNavClick(item)">{{ item.label }}</a>
        </nav>

        <div v-if="showSearch" class="search">
          <input v-model="q" @keyup.enter="onSearch" placeholder="Search..." />
          <button @click="onSearch">Search</button>
        </div>
      </slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: { type: String, default: '网站标题' },
    logo: { type: String, default: '' },
    navItems: { type: Array, default: () => [] },
    showSearch: { type: Boolean, default: false },
    background: { type: String, default: 'transparent' },
    height: { type: [String, Number], default: '64px' }
  },
  data() {
    return { q: '' }
  },
  computed: {
    headerStyle() {
      return {
        background: this.background,
        height: typeof this.height === 'number' ? this.height + 'px' : this.height
      }
    }
  },
  methods: {
    onNavClick(item) {
      this.$emit('nav-click', item)
    },
    onSearch() {
      this.$emit('search', this.q)
    }
  }
}
</script>

<style scoped>
.app-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 16px;
  box-sizing:border-box;
  border-bottom:1px solid rgba(0,0,0,0.06);
}
.app-header .left{display:flex;align-items:center;gap:12px}
.logo{height:36px;width:auto}
.title{font-size:18px;font-weight:600}
.nav a{margin:0 8px;color:#333;text-decoration:none}
.nav a:hover{text-decoration:underline}
.search input{padding:6px 8px;border-radius:4px;border:1px solid #ddd}
.search button{margin-left:8px;padding:6px 10px}
</style>
