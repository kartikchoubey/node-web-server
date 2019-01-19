const express=require('express');
const hbs=require('hbs');

var app =express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('setYear',()=>{
     return new Date().getFullYear();
});
hbs.registerHelper('upperCase',(text)=>{
    return text.toUpperCase();
});
app.set('view engine','hbs');


app.use((req,res,next)=>{
     var now =new Date().toString();
     var log =`${now} ${req.method} ${req.url}`;
     console.log(log);
     next(); 
});

app.use((req,res,next)=>{
    res.render('hold.hbs');
    
});
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        title:'Home Page',
        Mesg:"welcome to home page",
    
    });
    });
   

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title:'About Page',
    
    });
});

app.listen(3000); 