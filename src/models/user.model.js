import jsonwebtoken from "jsonwebtoken";
import mongoose, {schema} from "mongoose";


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,  //cloudinery url
            required: true
        },
        coverImage: {
            type: atring, //cloudinery url
        },
        watchHistory: [
            {
                type: schema.Type.ObjectId,
                ref: "video"
            }
        ],
        password: {
            type: String,
            required: [true, 'password is required']
        },
        refreshToken: {
            type: string,

        }


},

{
    timestamps:true
}

) 

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    returnjsonwebtoken.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            EXPIRESiN: ProcessingInstruction.ENV.ACCESS_TOKEN_SECRET
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
      returnjsonwebtoken.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            EXPIRESiN: ProcessingInstruction.ENV.REFRESH_TOKEN_SECRET
        }
    )
}



export const User = mongoose.model("user", userSchema)