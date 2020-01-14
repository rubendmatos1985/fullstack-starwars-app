import App from "./app";
import getPort from "./utils/port-getter";

App
.listen(getPort(process), () => console.log(`server started on port ${getPort(process)}`));

