import { getUniqueId } from "../helpers";

export default [
    {
        id: getUniqueId(),
        title: "First Note",
        description: "Description for first note",
        date: new Date(Date.now()).toLocaleString(),
        priority: "high"
    },
    {
        id: getUniqueId(),
        title: "Second Note",
        description: "Description for second note",
        date: new Date(Date.now()).toLocaleString(),
        priority: "medium"
    },
    {
        id: getUniqueId(),
        title: "Third Note",
        description: "Description for third note",
        date: new Date(Date.now()).toLocaleString(),
        priority: "low"
    }
];
