import sequelize from "../db"
import {DataTypes, Model} from "sequelize"

interface UserInstance extends Model {
    id: number,
    email: string,
    password: string,
    role: string
}

interface TrainInstance extends Model {
    id: number,
    number: number,
    from: string,
    to: string,
    departure: string,
    arrival: string,
    price: number
}

interface WagonInstance extends Model {
    id: number,
    number: string,
    type: string
}

interface TicketInstance extends Model {
    id: number,
    name: string,
    surname: string,
    date: string,
    place: number,
    discount: string,
    price: number
}

interface SeatInstance extends Model {
    id: number,
    number: number,
    coachId: number
}


const City = sequelize.define('city', {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING}
})

const City2 = sequelize.define<UserInstance>('city2', {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name2:{type:DataTypes.STRING}
})

const Route = sequelize.define('route', {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true}
})

const Seat_type = sequelize.define<UserInstance>('seat_type', {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING}
})

const User = sequelize.define<UserInstance>('user', {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    email:{type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Train = sequelize.define<TrainInstance>('train', {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    number:{type:DataTypes.INTEGER},
    departure:{type:DataTypes.TIME},
    arrival:{type:DataTypes.TIME}
})

const Coach = sequelize.define<WagonInstance>('coach', {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    number:{type:DataTypes.INTEGER},
    price:{type:DataTypes.INTEGER}
})

const Ticket = sequelize.define<TicketInstance>('ticket', {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING},
    surname:{type:DataTypes.STRING},
    date:{type:DataTypes.DATE},
    price:{type:DataTypes.INTEGER},
    UID:{type:DataTypes.STRING}
})

const Seat = sequelize.define<SeatInstance>('seat', {
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    number:{type:DataTypes.STRING}
})

User.hasMany(Ticket)
Ticket.belongsTo(User)

Seat.hasOne(Ticket)
Ticket.belongsTo(Seat)

City.hasMany(Route)
Route.belongsTo(City)

City2.hasMany(Route)
Route.belongsTo(City2)

Coach.hasMany(Seat)
Seat.belongsTo(Coach)

Train.hasMany(Coach)
Coach.belongsTo(Train)

Route.hasMany(Train)
Train.belongsTo(Route)

Seat_type.hasMany(Coach)
Coach.belongsTo(Seat_type)



export {
    User,
    Train,
    Coach,
    Ticket,
    Seat,
    City,
    City2,
    Route,
    Seat_type
}

