const mongoose = require('mongoose')

module.exports = () => {
    const WIRYASTORESERVER = `mongodb://localhost/WiryaStore`
    mongoose.connect(WIRYASTORESERVER, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    const db = mongoose.connection
    db.once('open', () => {
        console.log('connect mongoose on ', WIRYASTORESERVER)
    })
}