import { mermaidWrapperPlugin } from 'vuepress-plugin-mermaid-wrapper'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Test app',
  plugins: [mermaidWrapperPlugin({
    themeVariables: {}
  })]
})