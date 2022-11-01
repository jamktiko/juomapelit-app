import * as cypress from "cypress"

describe('Testataan peliin liitymistä', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/MainMenu')
    cy.wait(1000)
    cy.get('button#play.button1').click()
    cy.wait(1000)
    cy.get('button#joinGame.button1').click()
    cy.wait(1000)
    cy.get('button#lobbyJoin').click()
    cy.wait(1000)
    cy.get('button#chooseGame.button2').click()
    cy.wait(1000)
    cy.get('button#vesiputous.button2').click()
    cy.wait(1000)
  })

})


describe('Testataan pelin luomista', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/MainMenu')
    cy.wait(1000)
    cy.get('button#play.button1').click()
    cy.wait(1000)
    cy.get('button#createGame.button1').click()
    cy.wait(1000)
    cy.get('button#vesiputous.button2').click()
    cy.wait(1000)

  })

})


describe('Testataan että kortteja voidaan klikata', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/GameOne')
<<<<<<< Updated upstream
    cy.wait(3000)
    cy.get('canvas#cardBack').click({multiple: true, force: true})
=======
    for(let i = 0; i <= 52; i++){
    cy.get('canvas#cardBack').click({force: true})
    }
>>>>>>> Stashed changes
  })
})

