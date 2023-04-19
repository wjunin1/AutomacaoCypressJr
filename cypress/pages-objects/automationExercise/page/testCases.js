export default class testCases{
    static testCase(){
        cy.contains('Test Cases').should('be.visible');
        cy.contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:').should('be.visible');
    }
}