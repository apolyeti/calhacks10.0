export const getUsers = async () => {
    try {
        const req = await fetch("http://127.0.0.1:5000/provide_logins");
        const data = await req.json();
        console.log(data)
        return data;
    } catch (err) {
        console.error(err);
    }
}

export const postJournal = async({content, prompt, user}) => {
    try {
        const req = await fetch("http://127.0.0.1:5000/add_journal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({content, prompt, user})
        });
        const response = await req.json();

        if (req.ok) {
            console.log("Journal added successfully");
        } else {
            console.error("Failed to add journal", response.error);
        }
    } catch (err) {
        console.error(err);
    }
};

export const getJournal = async ({username}) => {
    try {
        const req = await fetch("http://127.0.0.1:5000/journal_get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username})
        });
        const response = await req.json();
        if (req.ok) {
            console.log('Grabbed all journals');
            return response;
        } else {
            console.error('Failed to grab journals of user', response.error);
        }
    } catch (err) {
        console.error(err);
    }
}

export const analyzeJournals = async () => {
    try {
        const req = await fetch("http://127.0.0.1:5000/journal_analysis");
        const response = await req.json();
        if (req.ok) {
            console.log('Analyzed all journals');
            return response;
        } else {
            console.error('Failed to analyze journals', response.error);
        }
    } catch (err) {
        console.error(err);
    }
}

export const updateJournal = async({name, content}) => {
    try {
        const req = await fetch("http://127.0.0.1:5000/journal_update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, content})
        });
        const response = await req.json();
        if (req.ok) {
            console.log('Updated journal');
            return response;
        } else {
            console.error('Failed to update journal', response.error);
        }
    } catch (err) {
        console.error(err);
    }
}