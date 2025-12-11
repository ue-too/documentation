import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: '/documentation/',
  
  title: "uē-tôo",
  description: "Everything about uē-tôo",
  
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'API',
        items: [
          { text: 'v0.9.x', link: '/0.9.x' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: 'Board',
        items: [
          { text: 'Overview', link: '/board' },
          { text: 'Globals', link: '/board/globals' },
          { text: 'Classes', link: '/board/classes/Board' },
          { text: 'Camera', link: '/board/classes/DefaultBoardCamera' },
          { text: 'Camera Rig', link: '/board/classes/CameraRig' },
          { text: 'Camera Input Multiplexer', link: '/board/classes/CameraInputMultiplexer' },
          { text: 'User Input Interpreter', link: '/board/classes/VanillaKMTEventParser' },
          { text: 'Camera Mux', link: '/board/classes/CameraMuxWithAnimationAndLock' },
          { text: 'Camera Update Publisher', link: '/board/classes/CameraPositionUpdateBatcher' },
          { text: 'Camera Rig With Update Batcher', link: '/board/classes/CameraRigWithUpdateBatcher' },
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ue-too/ue-too' }
    ]
  }
})
