import mongoose from 'mongoose';

const dbConnector = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI ? process.env.MONGODB_URI : "");
        console.log('database conected');
    } catch (error) {
        console.log(error);
    }
};

export default dbConnector;