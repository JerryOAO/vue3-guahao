import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

//引入node提供的内置模块path 可以获取绝对路径
import path from 'path'

const pathSrc = path.resolve(__dirname, './')

export default defineConfig({
  plugins: [vue(),
  AutoImport({
    // Auto import functions from Vue, e.g. ref, reactive, toRef...
    // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    imports: ['vue'],
    dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
  }),
  Components({
    resolvers: [ElementPlusResolver(),
    // 自动导入图标组件
    IconsResolver({
      // 修改Icon组件前缀，不设置则默认为i,禁用则设置为false
      // prefix: 'icon',
      // 指定collection，即指定为elementplus图标集ep
      enabledCollections: ['ep']
    })
    ],
    dts: path.resolve(pathSrc, 'components.d.ts'),
  }),
  Icons({
    autoInstall: true,
  }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
