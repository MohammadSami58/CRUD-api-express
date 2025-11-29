const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://mohammadsami:samingn6500@cluster0.yhxrhlo.mongodb.net/crudapp?retryWrites=true&w=majority').then(()=> console.log('Mongodb Connected')).catch(err => console.log(err));

const User = mongoose.model('User', {
    name : String,
    email: String,
    age: Number,
    address : String
})

app.post('/users', async (req,res)=>{
    const user =  new User(req.body);
    await user.save();
    res.send(user);
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(user || { message: 'User not found' });
});

app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(user || { message: 'User not found' });
});

app.delete('/users/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(user ? { message: 'Deleted successfully' } : { message: 'User not found' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
