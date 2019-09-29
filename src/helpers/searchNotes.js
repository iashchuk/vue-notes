export const searchNotes = (notes, searchTerm) => {
    if (!searchTerm || !searchTerm.length) {
        return notes;
    }

    const normalized = searchTerm.trim().toLowerCase();

    return notes.filter(item => {
        return [item.title, item.description, item.date]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(normalized);
    });
};
