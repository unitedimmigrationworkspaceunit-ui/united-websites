/**
 * PostCSS Configuration
 */
export default {
  plugins: [
    {
      postcssPlugin: 'discard-charset',
      AtRule(atRule) {
        if (atRule.name === 'charset') {
          atRule.remove();
        }
      }
    }
  ]
}
