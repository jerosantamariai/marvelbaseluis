const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            baseUrl: 'http://gateway.marvel.com',
            ts: 1,
            privateKey: '',
            publicKey: '',
            apiKey: '',
            hash: '',
            characters: null,
        },
        actions: {
            getCharacters: (url, offset=0, limit=20) => {
                const store = getStore();
                let path = `${store.baseUrl}${url}?ts=${store.ts}&apikey=${store.apiKey}&hash=${store.hash}&limit=${limit}&offset=${offset}`; 
                fetch(path)
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data.data)
                        setStore({characters: {...data.data}})
                    })
            }
        }
    }
}

export default getState;