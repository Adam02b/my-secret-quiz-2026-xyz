const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQqszG4WF7oGNRR-2QOhb67pwfv1gwGHGJ4FDX6J6tNE-cGr5-jXsj3vsr4kMvfTcmg7xh3p_gZ3faR/pub?output=csv';

let questionsDatabase = [];

async function loadQuestions() {
    try {
        const response = await fetch(SPREADSHEET_URL);
        const data = await response.text();
        
        // Μετατροπή του CSV σε πίνακα (array)
        const rows = data.split('\n').slice(1); // Παίρνουμε τις γραμμές εκτός από την πρώτη (headers)
        
        questionsDatabase = rows.map(row => {
            const cols = row.split(','); // Χωρίζουμε τη γραμμή σε στήλες
            return {
                id: cols[0],
                category: cols[1],
                text: cols[2],
                answers: cols[3], // Εδώ θα φτιάξουμε τη λογική αργότερα
                synonyms: cols[4]
            };
        });
        
        console.log("Τα δεδομένα φορτώθηκαν επιτυχώς:", questionsDatabase);
    } catch (error) {
        console.error("Σφάλμα φόρτωσης:", error);
    }
}

// Κάλεσε αυτή τη συνάρτηση μόλις φορτώσει η σελίδα
loadQuestions();