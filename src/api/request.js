const request = async (method, url, data) => {

    try {
        let user = localStorage.getItem('auth')
      
        user = user == null ? "{}" : user

        const token = user != "{}" ? "Token " + JSON.parse(user).token : ""

        let builderRequest;

        if (method === 'GET') {
            builderRequest = fetch(url, {
                headers: {
                    'Authorization': token,
                }
            });
        }
        else {
            builderRequest = fetch(url, {
                method,
                headers: url.includes('profile') || url.includes('upload/cars/') ? {  
                    'Authorization': token,
                    
                }: {
                    'Content-Type':  'application/json',
                    'Authorization': token,

                },

                body: url.includes('profile') || url.includes('upload/cars/') ? data :JSON.stringify(data),
            });
        }

        const response = await builderRequest;

        const result = await response.json();

        if (result.detail === 'Invalid token.'){
            localStorage.setItem('auth', '{}')
            location.reload()
        };
        
        return {data: result, status: response.status}
    } catch (err) {
        return err
    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');

