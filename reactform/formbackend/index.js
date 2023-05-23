import express from "express"
import cors from "cors"
import mongoose from "mongoose"

// configuration

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/formdb" , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () =>{
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    fname: String,
    mname: String,
    lname: String,
    phone: String,
    email: String,
    address: String,
    education: String,
    skill: String,
    dob: String,
    gender: String
})

const User= new mongoose.model("User",userSchema)
     


// Routes
app.post("/form",(req,res)=>{
    console.log(req.body)
    const {fname,mname,lname,phone,email,address,education,skill,dob,gender } = req.body
    User.findOne({email:email},(err, user) => {
        if(user){
            res.send({massage:"user already registered"})
        } else{
            const user= new User({
                fname:fname,
                mname:mname,
                lname:lname,
                phone:phone,
                email:email,
                address:address,
                education:education,
                skill:skill,
                dob:dob,
                gender:gender
            })
            user.save( err => {
                if(err) {
                    res.send(err)
                } else{
                    res.send({massage:"Successfully Registered" })
                }
            })
        }
    })

})

app.get("/getAllUser",async(req,res)=>{
    try {
        const allUser =await User.find({});
        res.send({status: "ok",data:allUser});
    } catch (error) {
        console.log(error)
    }
})

app.listen(9002,() =>{
    console.log("BE started at port 9002")
})