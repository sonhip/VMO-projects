import axios from 'axios';

export const getDataQuotes = async () => {
    const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    const respond = await axios.get(url);
    const data = await respond.status === 200 ? respond.data : {};
    return data; 
}