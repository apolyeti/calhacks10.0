export const getUsers = async () => {
    try {
        const req = await fetch("http://127.0.0.1:5000/provide_logins");
        const data = await req.json();
        console.log(data)
        return data;
    } catch (err) {
        console.error(err);
    }
}