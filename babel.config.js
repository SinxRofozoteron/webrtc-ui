const ENV = process.env.BABEL_ENV;

module.exports = {
  assumptions: {
    setPublicClassFields: true
  },
  env: {
    development: {
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              modules: './modules'
            }
          }
        ]
      ]
    },
    es: {
      ignore: ['**/*.test.js'],
      plugins: [
        'transform-react-constant-elements',
        'transform-dev-warning',
        ['react-remove-properties', { properties: ['data-mui-test'] }],
        ['transform-react-remove-prop-types', { mode: 'wrap' }]
      ]
    },
    production: {
      ignore: ['**/*.test.js', '**/*.stories.tsx', 'src/**/*.stories.ts'],
      plugins: [
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-transform-runtime',
        [
          'transform-imports',
          {
            'mui/material': {
              preventFullImport: true,
              transform: '@mui/material/${member}'
            }
          }
        ]
      ]
    }
  },
  ignore: ['**/*.d.ts'],
  plugins: [
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-runtime',
    [
      'transform-imports',
      {
        'mui/material': {
          preventFullImport: true,
          transform: '@mui/material/${member}'
        }
      }
    ]
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: ['modules', 'production-umd'].includes(ENV) ? false : 'commonjs',
        targets: {
          browsers: [
            '>0.2%',
            'not dead',
            'not op_mini all',
            'last 2 chrome version',
            'last 2 firefox version',
            'last 2 safari version',
            'last 2 edge version'
          ],
          node: 'current'
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ]
};
