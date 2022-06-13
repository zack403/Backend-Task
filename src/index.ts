import { Anniversary } from "./blueprints/anniversary";
import { Customers } from "./blueprints/customer";

const startApp = () => {
    const a = new Anniversary(new Customers);
    a.getExportedCustomers();
    console.log(a.eligibleCustomers);
}

startApp();
