import * as cypress from "cypress"

describe('Testataan peliin liitymistä', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/MainMenu')
    cy.wait(1000)
    cy.get('button.button1').click({multiple: true})
    cy.wait(1000)
    cy.get('button.button1').click({multiple: true, force: true})
    cy.wait(1000)
    cy.get('button.button1').click({multiple: true, force: true})
    cy.wait(1000)
    cy.get('button.button2').click({multiple:true, force: true})
    cy.wait(1000)
    cy.get('button.button2').click({multiple:true, force: true})
    
  })

})

describe('Testataan pelin luomista', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/MainMenu')
  })

})

describe('Testataan että kortteja voidaan klikata', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/GameOne')
    cy.wait(1000)
    cy.get('canvas#cardBack').click({multiple: true, force: true})
  })
})
