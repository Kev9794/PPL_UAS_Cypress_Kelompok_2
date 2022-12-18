describe('Reply Pertanyaan Kontak Oleh Admin', () => {
    // Data Login Admin
    const email = 'k.natanael88@gmail.com';
    const password = '123456';
    // Data Jawaban
    const judul = 'Mohon Ditunggu';
    const pesan = 'Stok darah sedang diusahakan akan dikirim segera setelah stok ready';
    it('Reply Kontak dengan Form Terisi Sempurna', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(4) > a').click()
        cy.get('[href="http://localhost:8000/admin/view/support/1"]').click()
        cy.get(':nth-child(2) > .form-control').type(judul)
        cy.get(':nth-child(3) > .form-control').type(pesan)
        cy.get('.btn').click()
    })

    it('Reply Kontak dengan Field Judul Kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(4) > a').click()
        cy.get('[href="http://localhost:8000/admin/view/support/1"]').click()
        cy.get(':nth-child(3) > .form-control').type(pesan)
        cy.get('.btn').click()
    })

    it('Reply Kontak dengan Field Pesan Kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(4) > a').click()
        cy.get('[href="http://localhost:8000/admin/view/support/1"]').click()
        cy.get(':nth-child(2) > .form-control').type(judul)
        cy.get('.btn').click()
    })

    it('Reply Kontak dengan Semua Field Kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(4) > a').click()
        cy.get('[href="http://localhost:8000/admin/view/support/1"]').click()
        cy.get('.btn').click()
    })
})