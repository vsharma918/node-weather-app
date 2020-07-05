const path = require('path');
const express = require('express');
const hbs= require('hbs');
const geoCode=require('./utils/geocode');
const forcast=require('./utils/forcast');



const app = express();

//define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath=path.join(__dirname,'../templates/views');
const partialViewPath=path.join(__dirname,'../templates/partials')

//set hanlder engine and views locations
app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialViewPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name:'vishal sharma'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About App',
        name:'vishal sharma'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help App',
        name:'vishal sharma'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help App',
        name:'vishal sharma',
        errorText:'Help text not found'
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.address)
    {
        return res.send({error:'Please provide address'});
    }
    geoCode(req.query.address, (error, {latitude,longitude,location}={}) => {
        if (error) {
            return res.send({error});           
        }
        forcast(latitude, longitude, (error, forCastData) => {
            if (error) {
                return res.send({error}); 
            }
            res.send({
                forcast:`It  is currently ${forCastData.temperature} degree out. There is a ${forCastData.precip}% chance of rain.`,
                location,
                longitude,
                latitude,
                address:req.query.address
            });            
        });
    });
    
});

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Help App',
        name:'vishal sharma',
        errorText:'Page not found'
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});