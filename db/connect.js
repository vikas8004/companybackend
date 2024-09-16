import mongoose from "mongoose";

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.URI);
        if (conn) {
            console.log(conn.connection.host);

        }
    } catch (error) {
        console.log(error);
        process.exit(1)

    }
}

export default connect;