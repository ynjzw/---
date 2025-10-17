<template>
  <header :style="headerStyle" class="app-header">
    <slot name="right">
        <nav v-if="navItems && navItems.length" class="nav">
          <a v-for="(item, idx) in navItems" :key="idx" href="#" @click.prevent="onNavClick(item)">{{ item.label }}</a>
        </nav>
      </slot>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    navItems: { type: Array, default: () => [] },
    showSearch: { type: Boolean, default: false },
    background: { type: String, default: 'transparent' },
    height: { type: [String, Number], default: '40px' }
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
.nav a{margin:0 8px;color:#fff;text-decoration:none}
.nav a:hover{text-decoration:underline}
.search input{padding:6px 8px;border-radius:4px;border:1px solid #ddd}
.search button{margin-left:8px;padding:6px 10px}
</style>
