import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    
      // implement node event listeners here
      baseUrl: "http://localhost:4200/",

    },
})