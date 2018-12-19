import Employee from "./model";

async function getDoc(body) {
    let name = body.name;
    let id = body.empId;
    const doc = await Employee.findOne({ name : name, id: id });

    return doc;
}

export default getDoc;
