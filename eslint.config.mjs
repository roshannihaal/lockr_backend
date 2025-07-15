import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores([
        'node_modules',
        'dist',
        'build',
        '*.log',
        'coverage',
        '*.tsbuildinfo',
        '.vscode',
        '.idea',
        '.env',
        '.env.*',
        'prisma/generated',
        'prisma/migrations'
    ]),
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: { js },
        extends: ['js/recommended']
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        languageOptions: { globals: globals.browser }
    },
    {
        rules: {
            'no-console': 'warn',
            'no-unused-vars': ['warn', { varsIgnorePattern: 'Express' }],
            'no-empty': 'error',
            'no-var': 'error',
            'prefer-const': [
                'error',
                {
                    destructuring: 'any'
                }
            ],
            'prefer-spread': 'error',
            'require-await': 'error',
            'yoda': ['error', 'never'],
            'no-class-assign': 'error',
            'no-compare-neg-zero': 'error',
            'no-const-assign': 'error',
            'no-constant-condition': 'error',
            'no-constructor-return': 'error',
            'no-dupe-args': 'error',
            'no-dupe-class-members': 'error',
            'no-dupe-keys': 'error',
            'no-duplicate-case': 'error',
            'no-duplicate-imports': 'error',
            'no-ex-assign': 'error',
            'no-self-assign': 'error',
            'no-unsafe-negation': 'error',
            'consistent-return': 'error'
        }
    },
    tseslint.configs.recommended
])
