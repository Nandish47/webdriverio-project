const { After, Status } = require('cucumber')

After(function() {
    //logout from application
    if ($('#ctl00_logout').isExisting()) {
        $('#ctl00_logout').click()
    }
})