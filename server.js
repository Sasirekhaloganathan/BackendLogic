const app = require('./app');

app.listen(process.env.PORT || 3000, () => {
    console.log(`181 is listening to the port ${process.env.PORT}`);
})