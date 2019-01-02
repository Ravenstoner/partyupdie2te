const URI = 'http://192.168.7.200/db.json';

export default {
    async fetchUsers() {
        try {
                let response = await fetch(URI);
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}