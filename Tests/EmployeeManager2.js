module.exports = {
    before: browser => {
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementPresent('body')
            .pause(5000)
    },
    after: browser => {
        browser.end()
    },
    'Employee1 test': browser => {
        var person = { name: 'chase white', phone: '4803386333', title: 'imtheboss' }

        browser
            .click('li[name="employee1"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', person.name)
            .verify.valueContains('input[name="nameEntry"]', person.name)
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', person.phone)
            .verify.valueContains('input[name="phoneEntry"]', '4803386333')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', person.title)
            .verify.valueContains('input[name="titleEntry"]', person.title)
            .click('button[name="save"]')
            .click('button[name="cancel"]')
            .click('p[name="employeeName"')
            .pause(10000)
    },


    'Employee2 test': browser => {
        browser
            .click('li[name="employee2"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Chase White')
            .verify.valueContains('input[name="nameEntry"]', 'Chase White')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '4803386333')
            .verify.valueContains('input[name="phoneEntry"]', '4803386333')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Chase is the boss')
            .verify.valueContains('input[name="titleEntry"]', 'Chase is the boss')
            .click('button[name="save"]')
            .click('button[name="cancel"]')
            .click('p[name="employeeName"')
    },
    'Employee3 test': browser => {
        browser
            .click('li[name="employee3"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Chase White')
            .verify.valueContains('input[name="nameEntry"]', 'Chase White')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '4803386333')
            .verify.valueContains('input[name="phoneEntry"]', '4803386333')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Chase is the boss')
            .verify.valueContains('input[name="titleEntry"]', 'Chase is the boss')
            .click('button[name="save"]')
            .click('button[name="cancel"]')
            .click('p[name="employeeName"')
    },
    'Employee4 test': browser => {
        browser
            .click('li[name="employee4"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Chase White')
            .verify.valueContains('input[name="nameEntry"]', 'Chase White')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '4803386333')
            .verify.valueContains('input[name="phoneEntry"]', '4803386333')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Chase is the boss')
            .verify.valueContains('input[name="titleEntry"]', 'Chase is the boss')
            .click('button[name="save"]')
            .click('button[name="cancel"]')
            .click('p[name="employeeName"')
    },
    'Employee5 test': browser => {
        browser
            .click('li[name="employee5"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Chase White')
            .verify.valueContains('input[name="nameEntry"]', 'Chase White')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '4803386333')
            .verify.valueContains('input[name="phoneEntry"]', '4803386333')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Chase is the boss')
            .verify.valueContains('input[name="titleEntry"]', 'Chase is the boss')
            .click('button[name="save"]')
            .click('button[name="cancel"]')
            .click('p[name="employeeName"')
    },


    'Employee6 test': browser => {
        browser
            .click('li[name="employee6"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Chase White')
            .verify.valueContains('input[name="nameEntry"]', 'Chase White')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '4803386333')
            .verify.valueContains('input[name="phoneEntry"]', '4803386333')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Chase is the boss')
            .verify.valueContains('input[name="titleEntry"]', 'Chase is the boss')
            .click('button[name="save"]')
            .click('button[name="cancel"]')
            .click('p[name="employeeName"')
    },
    'Employee7 test': browser => {
        browser
            .click('li[name="employee7"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Chase White')
            .verify.valueContains('input[name="nameEntry"]', 'Chase White')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '4803386333')
            .verify.valueContains('input[name="phoneEntry"]', '4803386333')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Chase is the boss')
            .verify.valueContains('input[name="titleEntry"]', 'Chase is the boss')
            .click('button[name="save"]')
            .click('button[name="cancel"]')
            .click('p[name="employeeName"')
    },


    'Employee8 test': browser => {
        browser
            .click('li[name="employee8"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Chase White')
            .verify.valueContains('input[name="nameEntry"]', 'Chase White')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '4803386333')
            .verify.valueContains('input[name="phoneEntry"]', '4803386333')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Chase is the boss')
            .verify.valueContains('input[name="titleEntry"]', 'Chase is the boss')
            .click('button[name="save"]')
            .click('button[name="cancel"]')
            .click('p[name="employeeName"')
    },
    'Employee9 test': browser => {
        browser
            .click('li[name="employee9"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Chase White')
            .verify.valueContains('input[name="nameEntry"]', 'Chase White')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '4803386333')
            .verify.valueContains('input[name="phoneEntry"]', '4803386333')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Chase is the boss')
            .verify.valueContains('input[name="titleEntry"]', 'Chase is the boss')
            .click('button[name="save"]')
            .click('button[name="cancel"]')
            .click('p[name="employeeName"')
    },


    'Employee10 test': browser => {
        browser
            .click('li[name="employee10"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Chase White')
            .verify.valueContains('input[name="nameEntry"]', 'Chase White')
            .click('input[name="phoneEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '4803386333')
            .verify.valueContains('input[name="phoneEntry"]', '4803386333')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Chase is the boss')
            .verify.valueContains('input[name="titleEntry"]', 'Chase is the boss')
            .click('button[name="save"]')
            .click('button[name="cancel"]')
            .click('p[name="employeeName"')

    },

    'Click Employee test': browser => {
        browser
            .click('li[name="employee1"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'wazzzzz uhhhhhh')
            .click('button[class="save"]')
            .click('button[class="cancel"]')
            .click('button[class="save"]')
            .click('button[class="cancel"]')
            .click('button[class="save"]')
            .click('button[class="cancel"]')
            .click('button[class="save"]')
            .click('button[class="cancel"]')
            .click('button[class="save"]')
            .click('button[class="cancel"]')




    },
    'Save and cancel test': browser => {
        browser
            .click('li[name="employee1"]')
            .clearValue('input[name="nameEntry"]')
            .clearValue('input[name="phoneEntry"]')
            .clearValue('input[name="titleEntry"]')
            .click('button[name="save"]')
            .click('button[name="cancel"]')
            .verify.valueContains('input[name="nameEntry"]', '')
            .pause(10000)

    },
    'Click spam Test': browser => {
        browser
            .click('li[name="employee1"]')
            .click('li[name="employee2"]')
            .click('li[name="employee3"]')
            .click('li[name="employee4"]')
            .click('li[name="employee5"]')
            .click('li[name="employee6"]')
            .click('li[name="employee7"]')
            .click('li[name="employee8"]')
            .click('li[name="employee9"]')
            .click('li[name="employee10"]')
            .click('li[name="employee11"]')
            .click('li[name="employee1"]')
            .pause(6000)

    }
}