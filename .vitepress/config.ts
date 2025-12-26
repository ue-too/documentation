import { defineConfig } from 'vitepress'
import { readFileSync } from 'fs'
import { join } from 'path'

// Helper function to load sidebar JSON
function loadSidebar(packageName: string): any[] {
  const filePath = join(process.cwd(), 'docs', packageName, 'typedoc-sidebar.json')
  const content = readFileSync(filePath, 'utf-8')
  return JSON.parse(content)
}

// Helper function to fix link paths (remove /docs prefix and ensure proper format)
function fixSidebarLinks(sidebar: any[]): any[] {
  return sidebar.map(item => {
    if (item.link) {
      // Remove /docs prefix if present, VitePress handles paths relative to srcDir
      item.link = item.link.replace(/^\/docs\//, '/')
    }
    if (item.items) {
      item.items = fixSidebarLinks(item.items)
    }
    return item
  })
}

// Helper function to add index link to sidebar
function addIndexToSidebar(sidebar: any[], packageName: string): any[] {
  const indexItem = {
    text: 'Overview',
    link: `/${packageName}/`
  }
  return [indexItem, ...sidebar]
}

// Load sidebars for each package
const animateSidebar = loadSidebar('animate')
const beingSidebar = loadSidebar('being')
const boardSidebar = loadSidebar('board')
const borderSidebar = loadSidebar('border')
const curveSidebar = loadSidebar('curve')
const dynamicsSidebar = loadSidebar('dynamics')
const ecsSidebar = loadSidebar('ecs')
const mathSidebar = loadSidebar('math')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: '/documentation/',
  
  title: "uē-tôo",
  description: "A modular TypeScript library for HTML canvas applications. Features include infinite canvas with pan/zoom/rotate, animation system, state machines, Bezier curves, 2D physics, geographic projections, and more. Framework-agnostic and works with vanilla JavaScript, Pixi.js, Fabric.js, and Konva.",
  
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Packages', items: [
        { text: 'animate', link: '/animate' },
        { text: 'being', link: '/being' },
        { text: 'board', link: '/board' },
        { text: 'border', link: '/border' },
        { text: 'curve', link: '/curve' },
        { text: 'dynamics', link: '/dynamics' },
        { text: 'ecs', link: '/ecs' },
        { text: 'math', link: '/math' },
      ] },
    ],
    sidebar: {
      // Different sidebar for each package
      '/animate/': addIndexToSidebar(fixSidebarLinks(animateSidebar), 'animate'),
      '/being/': addIndexToSidebar(fixSidebarLinks(beingSidebar), 'being'),
      '/board/': addIndexToSidebar(fixSidebarLinks(boardSidebar), 'board'),
      '/border/': addIndexToSidebar(fixSidebarLinks(borderSidebar), 'border'),
      '/curve/': addIndexToSidebar(fixSidebarLinks(curveSidebar), 'curve'),
      '/dynamics/': addIndexToSidebar(fixSidebarLinks(dynamicsSidebar), 'dynamics'),
      '/ecs/': addIndexToSidebar(fixSidebarLinks(ecsSidebar), 'ecs'),
      '/math/': addIndexToSidebar(fixSidebarLinks(mathSidebar), 'math'),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ue-too/ue-too' }
    ]
  }
})
