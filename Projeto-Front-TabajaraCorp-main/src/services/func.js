import client from './config';

const funcPath = '/func';

const ClientFunc = {
    async createFunc(data) {
        try {
            console.log(data)
            const response = await client.post(`${funcPath}/create`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
    
    async updateFunc(data) {
        try {
            const response = await client.put(`${funcPath}/update`, data);
            return response;
        } catch (e) {
            return e;
        }
    },

    async deleteFunc(data) {
        try {
            const response = await client.delete(`${funcPath}/delete/${data.email}`);
            return response;
        } catch (e) {
            return e;
        }
    },

    async listFunc(data){
        try {
            const response = await client.get(`${funcPath}/list`, data);
            return response;
        } catch (e) {
            return e;
        }
    },

    async listEmailFunc(data){
        try {
            const response = await client.patch(`${funcPath}/listFunc/`,data);
            return response;
        } catch (e) {
            return e;
        }
    },
    
};

export default ClientFunc;