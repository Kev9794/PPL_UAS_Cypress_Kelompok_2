describe('Hapus Akun User Oleh Admin', () => {
    // Data Login Admin
    const email = 'k.natanael88@gmail.com';
    const password = '123456';
    it('Hapus Data User dengan Menekan Button Hapus', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get('[href="http://localhost:8000/admin/delete/user/3"]').click()
    })
})