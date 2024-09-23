import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'path'
import type { Nuxt } from '@nuxt/schema'
import fs from 'fs'
import path from 'path'
export default defineNuxtModule({
  meta: {
    name: 'user-profile-module',
    configKey: 'user-profile',
  },

  setup(options: any, nuxt: Nuxt) {
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components'),
      })
    })

    // Auto register composables
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolve(__dirname, './composables'))
    })

    // Auto register pages
    // nuxt.hook('pages:extend', (pages) => {
    //   pages.push({
    //     name: 'user-profile',
    //     path: '/user-profile',
    //     file: resolve(__dirname, './pages/index.vue'),
    //   })
    // })
    nuxt.hook('pages:extend', (pages) => {
      const pagesDir = resolve(__dirname, './pages')
      
      function addPagesRecursively(dir: string, parentPath: string = '') {
        const files = fs.readdirSync(dir)
        
        files.forEach(file => {
          const filePath = path.join(dir, file)
          const stat = fs.statSync(filePath)
          
          if (stat.isDirectory()) {
            addPagesRecursively(filePath, path.join(parentPath, file))
          } else if (file.endsWith('.vue')) {
            let name = path.basename(file, '.vue')
            let routePath = path.join('/user-profile', parentPath)

            // Handle dynamic routes
            if (name.startsWith('[') && name.endsWith(']')) {
              name = name.slice(1, -1) // Remove brackets
              routePath = path.join(routePath, `:${name}`)
            } else if (name !== 'index') {
              routePath = path.join(routePath, name)
            }

            // Create a unique name for the route
            const routeName = `user-profile-${parentPath}-${name}`
              .replace(/\//g, '-')
              .replace(/\[|\]/g, '')
              .replace(/^-|-$/g, '') // Remove leading/trailing hyphens

            pages.push({
              name: routeName,
              path: routePath,
              file: filePath,
            })
          }
        })
      }


      addPagesRecursively(pagesDir)
    })
  }
})