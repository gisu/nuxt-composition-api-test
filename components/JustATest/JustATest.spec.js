import { mount } from '@cypress/vue'
import JustATest from './JustATest.vue'
import '@/test/e2e/css/app.css'

describe('Testing with Tailwind', () => {
  beforeEach(() => {
    mount(JustATest, {})
  })

  it('should first test success', () => {
    cy.get('[data-cy=blubb]').contains('Hello World')
  })
})
