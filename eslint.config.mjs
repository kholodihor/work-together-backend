// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'off',
    'no-process-env': 'off',
    'node/prefer-global/process': 'off',
  },
})
