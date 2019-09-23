type Port = string;

const getPort = (p:NodeJS.Process):(Port | 3000) => p && p.env && p.env.PORT ? p.env.PORT : 3000;


export default getPort;