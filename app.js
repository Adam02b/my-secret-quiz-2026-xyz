// --- ΑΠΟΘΗΚΗ ΕΡΩΤΗΣΕΩΝ ---
const questionsDatabase = {
    "TOP 5": {
        3: [
            { 
                id: 1, 
                isTop5: true,
                text: "Βρείτε τους TOP 5 σκόρερ στην ιστορία της Εθνικής Αγγλίας:", 
                answers: [
                    { display: "Χάρι Κέιν (71 γκολ)", synonyms: ["χαρι κειν", "κειν", "kane", "harry kane", "harry"] },
                    { display: "Γουέιν Ρούνεϊ (53 γκολ)", synonyms: ["γουειν ρουνει", "ρουνει", "rooney", "wayne rooney", "wayne"] },
                    { display: "Μπόμπι Τσάρλτον (49 γκολ)", synonyms: ["μπομπι τσαρλτον", "τσαρλτον", "charlton", "bobby charlton", "bobby"] },
                    { display: "Γκάρι Λίνεκερ (48 γκολ)", synonyms: ["γκαρι λινεκερ", "λινεκερ", "lineker", "gary lineker", "gary"] },
                    { display: "Τζίμι Γκρίβς (44 γκολ)", synonyms: ["τζιμι γκριβς", "γκριβς", "greaves", "jimmy greaves", "jimmy"] }
                ]
            },
            { 
            id: 2, 
            isTop5: true,
            text: "Βρείτε τους 5 Έλληνες σκόρερ με τα περισσότερα γκολ στη Serie A συνολικά:", 
            answers: [
                { display: "Ζήσης Βρύζας (29 γκολ)", synonyms: ["ζησησ βρυζας", "βρυζας", "vryzas", "zisis vryzas"] },
                { display: "Παναγιώτης Κονέ (13 γκολ)", synonyms: ["παναγιωτης κονε", "κονε", "kone", "panagiotis kone"] },
                { display: "Κώστας Μανωλάς (13 γκολ)", synonyms: ["κωστας μανωλας", "μανωλας", "manolas", "kostas manolas"] },
                { display: "Μπάμπης Λυκογιάννης (11 γκολ)", synonyms: ["μπαμπης λυκογιαννης", "λυκογιαννης", "lykogiannis", "charalampos lykogiannis"] },
                { display: "Παναγιώτης Ταχτσίδης (10 γκολ)", synonyms: ["παναγιωτης ταχτσιδης", "ταχτσιδης", "tachtsidis", "panagiotis tachtsidis"] }
            ]
        },
        { 
            id: 3, 
            isTop5: true,
            text: "Βρείτε τους 5 παίκτες με τις περισσότερες συμμετοχές στην ιστορία της Εθνικής Ισπανίας:", 
            answers: [
                { display: "Σέρχιο Ράμος (180 συμμετοχές)", synonyms: ["σερχιο ραμος", "ραμος", "ramos", "sergio ramos"] },
                { display: "Ίκερ Κασίγιας (167 συμμετοχές)", synonyms: ["ικερ κασιγιας", "κασιγιας", "casillas", "iker casillas"] },
                { display: "Σέρχιο Μπουσκέτς (143 συμμετοχές)", synonyms: ["σερχιο μπουσκετς", "μπουσκετς", "busquets", "sergio busquets"] },
                { display: "Τσάβι (133 συμμετοχές)", synonyms: ["τσαβι", "xavi", "xavi hernandez"] },
                { display: "Αντρές Ινιέστα (131 συμμετοχές)", synonyms: ["αντρες ινιεστα", "ινιεστα", "iniesta", "andres iniesta"] }
            ]
        },
            { 
               id: 601, 
                  isTop5: true,
               text: "Βρείτε τους TOP 5 παίκτες με τις περισσότερες συμμετοχές στην ιστορία της Εθνικής Κύπρου:", 
                    answers: [
                 { display: "Γιάννης Οκκάς (106 συμμετοχές)", synonyms: ["γιαννης οκκας", "οκκας", "okkas", "ioannis okkas"] },
                  { display: "Κωνσταντίνος Χαραλαμπίδης (94 συμμετοχές)", synonyms: ["κωνσταντινος χαραλαμπιδης", "χαραλαμπιδης", "charalambidis", "constantinos charalambidis"] },
                  { display: "Μιχάλης Κωνσταντίνου (84 συμμετοχές)", synonyms: ["μιχαλης κωνσταντινου", "κωνσταντινου", "konstantinou", "michalis konstantinou"] },
                   { display: "Πάμπος Πίττας (83 συμμετοχές)", synonyms: ["παμπος πιττας", "πιττας", "pittas", "pambos pittas"] },
                   { display: "Κωστάκης Αρτυματάς (80 συμμετοχές)", synonyms: ["κωστακης αρτυματας", "αρτυματας", "artymatas", "kostakis artymatas"] }
                 ]
            },
            { 
            id: 801, 
            isTop5: true,
            text: "Βρείτε τους 5 παίκτες με τις περισσότερες συμμετοχές υπό τον Jürgen Klopp:", 
            answers: [
                { display: "Ρομπέρτο Φιρμίνο (355)", synonyms: ["φιρμινο", "firmino", "roberto firmino"] },
                { display: "Μοχάμεντ Σαλάχ (349)", synonyms: ["σαλαχ", "salah", "mohamed salah"] },
                { display: "Τζέιμς Μίλνερ (323)", synonyms: ["μιλνερ", "milner", "james milner"] },
                { display: "Τρεντ Αλεξάντερ-Άρνολντ (310)", synonyms: ["αρνολντ", "alexander-arnold", "trent alexander-arnold"] },
                { display: "Τζόρνταν Χέντερσον (304)", synonyms: ["χεντερσον", "henderson", "jordan henderson"] }
            ]
        },
        { 
            id: 802, 
            isTop5: true,
            text: "Βρείτε τους 5 παίκτες με τις περισσότερες συμμετοχές υπό τον Carlo Ancelotti:", 
            answers: [
                { display: "Φιλίππο Ιντζάγκι (332)", synonyms: ["ιντζαγκι", "inzaghi", "filippo inzaghi"] },
                { display: "Αντρέα Πίρλο (327)", synonyms: ["πιρλο", "pirlo", "andrea pirlo"] },
                { display: "Κλάρενς Ζέεντορφ (325)", synonyms: ["ζεεντορφ", "seedorf", "clarence seedorf"] },
                { display: "Λούκα Μόντριτς (276)", synonyms: ["μοντριτς", "modric", "luka modric"] },
                { display: "Τζενάρο Γκατούζο (αριθμός συμμετοχών)", synonyms: ["γκατουζο", "gattuso", "gennaro gattuso"] }
            ]
        },
            {
             id: 515, 
             isTop5: true, 
             text: "TOP 5 ακριβότερες μεταγραφές στην ιστορία της La Liga:", 
           answers: [
        { display: "Philippe Coutinho (€135M)", synonyms: ["philippe coutinho", "coutinho"] },
        { display: "João Félix (€127M)", synonyms: ["joao felix", "felix"] },
        { display: "Antoine Griezmann (€120M)", synonyms: ["antoine griezmann", "griezmann"] },
        { display: "Ousmane Dembélé (€105M)", synonyms: ["ousmane dembele", "dembele"] },
        { display: "Eden Hazard (€100M)", synonyms: ["eden hazard", "hazard"] }
    ] 
},
{ 
    id: 516, 
    isTop5: true, 
    text: "TOP 5 ακριβότερες μεταγραφές στην ιστορία της Premier League:", 
    answers: [
        { display: "Alexander Isak (£145M)", synonyms: ["alexander isak", "isak"] },
        { display: "Enzo Fernández (£121M)", synonyms: ["enzo fernandez", "enzo"] },
        { display: "Moisés Caicedo (£116M)", synonyms: ["moises caicedo", "caicedo"] },
        { display: "Florian Wirtz (£112.5M)", synonyms: ["florian wirtz", "wirtz"] },
        { display: "Declan Rice (£105M)", synonyms: ["declan rice", "rice"] }
    ] 
},
{ 
    id: 517, 
    isTop5: true, 
    text: "TOP 5 ομάδες με τις περισσότερες Χρυσές Μπάλες (Ballon d’Or):", 
    answers: [
        { display: "FC Barcelona – 12", synonyms: ["fc barcelona", "barcelona"] },
        { display: "Real Madrid – 12", synonyms: ["real madrid", "real"] },
        { display: "Juventus – 8", synonyms: ["juventus"] },
        { display: "AC Milan – 8", synonyms: ["ac milan", "milan"] },
        { display: "Bayern Munich – 5", synonyms: ["bayern munich", "bayern"] }
    ] 
},
            { 
                id: 2, 
                isTop5: true,
                text: "Βρείτε τους TOP 5 σκόρερ στην ιστορία της Εθνικής Γαλλίας:", 
                answers: [
                    { display: "Ολιβιέ Ζιρού (57 γκολ)", synonyms: ["ολιβιε ζιρου", "ζιρου", "giroud", "olivier giroud", "olivier"] },
                    { display: "Κιλιάν Εμπαπέ (56 γκολ)", synonyms: ["κιλιαν εμπαπε", "εμπαπε", "mbappe", "kylian mbappe", "kylian"] },
                    { display: "Τιερί Ανρί (51 γκολ)", synonyms: ["τιερι ανρι", "ανρι", "henry", "thierry henry", "thierry"] },
                    { display: "Αντουάν Γκριεζμάν (44 γκολ)", synonyms: ["αντουαν γκριεζμαν", "γκριεζμαν", "griezmann", "antoine griezmann", "antoine"] },
                    { display: "Μισέλ Πλατινί (41 γκολ)", synonyms: ["μισελ πλατινι", "πλατινι", "platini", "michel platini", "michel"] }
                ]
            },
            { 
                id: 3, 
                isTop5: true,
                text: "Βρείτε τις 5 ομάδες με τα περισσότερα πρωταθλήματα Premier League (από το 1992 και μετά):", 
                answers: [
                    { display: "Μάντσεστερ Γιουνάιτεντ (13)", synonyms: ["μαντσεστερ γιουναιτεντ", "manchester united", "manchester", "united", "γιουναιτεντ"] },
                    { display: "Μάντσεστερ Σίτι (8)", synonyms: ["μαντσεστερ σιτι", "manchester city", "city", "σιτι"] },
                    { display: "Τσέλσι (5)", synonyms: ["τσελσι", "chelsea"] },
                    { display: "Άρσεναλ (3)", synonyms: ["αρσεναλ", "arsenal"] },
                    { display: "Λίβερπουλ (1)", synonyms: ["λιβερπουλ", "liverpool"] }
                ]
            },
            { 
                id: 501, 
                isTop5: true,
                text: "Βρείτε τους TOP 5 σκόρερ στην ιστορία της Εθνικής Βραζιλίας:", 
                answers: [
                    { display: "Νεϊμάρ (79 γκολ)", synonyms: ["νειμαρ", "neymar", "νειμαρ τζουνιορ", "neymar jr"] },
                    { display: "Πελέ (77 γκολ)", synonyms: ["πελε", "pele"] },
                    { display: "Ρονάλντο το Φαινόμενο (62 γκολ)", synonyms: ["ροναλντο", "ronaldo", "r9"] },
                    { display: "Ρομάριο (55 γκολ)", synonyms: ["ρομαριο", "romario"] },
                    { display: "Ζίκο (48 γκολ)", synonyms: ["ζικο", "zico"] }
                ]
            },
            { 
                id: 502, 
                isTop5: true,
                text: "Βρείτε τις 5 ευρωπαϊκές ομάδες με τα περισσότερα διεθνή τρόπαια συνολικά (UCL, UEL, Cup Winners, Super Cup κλπ):", 
                answers: [
                    { display: "Ρεάλ Μαδρίτης (35)", synonyms: ["ρεαλ μαδριτης", "real madrid", "real", "ρεαλ"] },
                    { display: "Μπαρσελόνα (20)", synonyms: ["μπαρσελονα", "barcelona", "barca", "μπαρτσα"] },
                    { display: "Μίλαν (18)", synonyms: ["μιλαν", "milan", "ac milan"] },
                    { display: "Λίβερπουλ (14)", synonyms: ["λιβερπουλ", "liverpool"] },
                    { display: "Μπάγερν Μονάχου (14)", synonyms: ["μπαγερν μοναχου", "μπαγερν", "bayern", "bayern munich"] }
                ]
            },
            { 
                id: 503, 
                isTop5: true,
                text: "Βρείτε τις 5 ομάδες με τα περισσότερα πρωταθλήματα Βραζιλίας (Série A):", 
                answers: [
                    { display: "Παλμέιρας (12)", synonyms: ["παλμειρας", "palmeiras"] },
                    { display: "Φλαμένγκο (9)", synonyms: ["φλαμενγκο", "flamengo", "cr flamengo"] },
                    { display: "Σάντος (8)", synonyms: ["σαντος", "santos"] },
                    { display: "Κορίνθιανς (7)", synonyms: ["κορινθιανς", "corinthians"] },
                    { display: "Σάο Πάολο (6)", synonyms: ["σαο παολο", "sao paulo"] }
                ]
            },
            { 
                id: 504, 
                isTop5: true,
                text: "Βρείτε τις 5 ομάδες με τα περισσότερα γκολ στην ιστορία του UEFA Champions League:", 
                answers: [
                    { display: "Ρεάλ Μαδρίτης (1137 γκολ)", synonyms: ["ρεαλ μαδριτης", "real madrid", "real", "ρεαλ"] },
                    { display: "Μπάγερν Μονάχου (899 γκολ)", synonyms: ["μπαγερν μοναχου", "μπαγερν", "bayern", "bayern munich"] },
                    { display: "Μπαρσελόνα (762 γκολ)", synonyms: ["μπαρσελονα", "barcelona", "barca", "μπαρτσα"] },
                    { display: "Μάντσεστερ Γιουνάιτεντ (545 γκολ)", synonyms: ["μαντσεστερ γιουναιτεντ", "manchester united", "united", "γιουναιτεντ"] },
                    { display: "Μπενφίκα (516 γκολ)", synonyms: ["μπενφικα", "benfica"] }
                ]
            },
            { 
                id: 505, 
                isTop5: true,
                text: "Βρείτε τις 5 χώρες με τις περισσότερες συμμετοχές σε τελικούς Μουντιάλ (FIFA World Cup):", 
                answers: [
                    { display: "Γερμανία (8 τελικοί)", synonyms: ["γερμανια", "germany"] },
                    { display: "Βραζιλία (7 τελικοί)", synonyms: ["βραζιλια", "brazil"] },
                    { display: "Ιταλία (6 τελικοί)", synonyms: ["ιταλια", "italy"] },
                    { display: "Αργεντινή (6 τελικοί)", synonyms: ["argentina", "αργεντινη"] },
                    { display: "Γαλλία (4 τελικοί)", synonyms: ["γαλλια", "france"] }
                ]
            },
            { 
                id: 506, 
                isTop5: true,
                text: "Βρείτε τις ομάδες με τις περισσότερες συμμετοχές σε τελικούς ΜΟΝΟ στην εποχή του Champions League (από το 1992-93 και μετά):", 
                answers: [
                    { display: "Ρεάλ Μαδρίτης (9)", synonyms: ["ρεαλ μαδριτης", "real madrid", "real", "ρεαλ"] },
                    { display: "Μίλαν (6)", synonyms: ["μιλαν", "milan"] },
                    { display: "Μπάγερν Μονάχου (6)", synonyms: ["μπαγερν μοναχου", "μπαγερν", "bayern", "bayern munich"] },
                    { display: "Γιουβέντους (6)", synonyms: ["γιουβεντους", "juventus", "juve", "γιουβε"] },
                    { display: "Μπαρσελόνα / Λίβερπουλ (5)", synonyms: ["μπαρσελονα", "barcelona", "barca", "λιβερπουλ", "liverpool"] }
                ]
            },
            { 
                id: 507, 
                isTop5: true,
                text: "Βρείτε τις 5 εθνικές ομάδες με τα περισσότερα τρόπαια Μουντιάλ (FIFA World Cup) στην ιστορία:", 
                answers: [
                    { display: "Βραζιλία (5)", synonyms: ["βραζιλια", "brazil"] },
                    { display: "Γερμανία (4)", synonyms: ["γερμανια", "germany"] },
                    { display: "Ιταλία (4)", synonyms: ["ιταλια", "italy"] },
                    { display: "Αργεντινή (3)", synonyms: ["αργεντινη", "argentina"] },
                    { display: "Γαλλία / Ουρουγουάη (2)", synonyms: ["γαλλια", "france", "ουρουγουαη", "uruguay"] }
                ]
            },
            { 
                id: 509, 
                isTop5: true,
                text: "Βρείτε τους 5 κορυφαίους σκόρερ όλων των εποχών στην ιστορία της Εθνικής Ισπανίας:", 
                answers: [
                    { display: "Νταβίντ Βίγια (59 γκολ)", synonyms: ["βιγια", "villa", "david villa", "νταβιντ βιγια"] },
                    { display: "Ραούλ (44 γκολ)", synonyms: ["ραουλ", "raul", "raul gonzalez"] },
                    { display: "Φερνάντο Τόρες (38 γκολ)", synonyms: ["τορες", "torres", "fernando torres", "fernando", "φερναντο τορες"] },
                    { display: "Άλβαρο Μοράτα (37+ γκολ)", synonyms: ["μορατα", "morata", "alvaro morata", "alvaro", "αλβαρο μορατα"] },
                    { display: "Νταβίντ Σίλβα (35 γκολ)", synonyms: ["σιλβα", "silva", "david silva", "νταβιντ σιλβα"] }
                ]
            },
            { 
                id: 510, 
                isTop5: true,
                text: "Βρείτε τις 5 ακριβότερες μεταγραφές ποδοσφαιριστών στην ιστορία (Συνολικό κόστος σε ευρώ):", 
                answers: [
                    { display: "Νεϊμάρ (222 εκ. € - Παρί)", synonyms: ["νειμαρ", "neymar"] },
                    { display: "Κιλιάν Εμπαπέ (180 εκ. € - Παρί)", synonyms: ["εμπαπε", "mbappe", "kylian mbappe", "κιλιαν εμπαπε"] },
                    { display: "Ουσμάν Ντεμπελέ (135 εκ. € - Μπάρτσα)", synonyms: ["ντεμπελε", "dembele", "ousmane dembele", "ουσμαν ντεμπελε"] },
                    { display: "Φιλίπε Κοουτίνιο (135 εκ. € - Μπάρτσα)", synonyms: ["κοουτινιο", "coutinho", "philippe coutinho", "φιλιπε κοουτινιο"] },
                    { display: "Ζοάο Φέλιξ (127 εκ. € - Ατλέτικο)", synonyms: ["φελιξ", "felix", "joao felix", "ζοαο φελιξ"] }
                ]
            },
            { 
                id: 511, 
                isTop5: true,
                text: "Βρείτε τους 5 παίκτες με τις περισσότερες κατακτήσεις Χρυσής Μπάλας (Ballon d'Or) στην ιστορία:", 
                answers: [
                    { display: "Λιονέλ Μέσι (8)", synonyms: ["μεσι", "messi", "lionel messi", "λιονελ μεσι"] },
                    { display: "Κριστιάνο Ρονάλντο (5)", synonyms: ["ροναλντο", "ronaldo", "cristiano ronaldo", "κριστιανο ροναλντο", "cr7"] },
                    { display: "Μισέλ Πλατινί (3)", synonyms: ["πλατινι", "platini", "michel platini", "μισελ πλατινι"] },
                    { display: "Γιόχαν Κρόιφ (3)", synonyms: ["κροιφ", "cruyff", "johan cruyff", "γιοχαν κροιφ"] },
                    { display: "Μάρκο φαν Μπάστεν (3)", synonyms: ["φαν μπαστεν", "van basten", "marco van basten", "μαρκο φαν μπαστεν"] }
                ]
            },
            { 
                id: 512, 
                isTop5: true,
                text: "Βρείτε τις 5 γαλλικές ομάδες με τα περισσότερα πρωταθλήματα Γαλλίας (Ligue 1):", 
                answers: [
                    { display: "Παρί Σεν Ζερμέν (12)", synonyms: ["παρι", "psg", "parissg", "parissaintgermain", "παρι σεν ζερμεν"] },
                    { display: "Σεντ Ετιέν (10)", synonyms: ["σεντ ετιεν", "saint etienne", "st etienne"] },
                    { display: "Μαρσέιγ (9)", synonyms: ["μαρσειγ", "marseille", "olympiquedemarseille"] },
                    { display: "Μονακό (8)", synonyms: ["μονακο", "monaco"] },
                    { display: "Ναντ (8)", synonyms: ["ναντ", "nantes"] }
                ]
            },
            { 
                id: 513, 
                isTop5: true,
                text: "Βρείτε τους 5 κορυφαίους σκόρερ όλων των εποχών στην ιστορία της Εθνικής Αργεντινής:", 
                answers: [
                    { display: "Λιονέλ Μέσι (100+ γκολ)", synonyms: ["μεσι", "messi", "lionel mesh", "λιονελ μεσι"] },
                    { display: "Γκαμπριέλ Μπατιστούτα (56 γκολ)", synonyms: ["μπατιστουτα", "batistuta", "gabriel batistuta", "γκαμπριελ μπατιστουτα"] },
                    { display: "Σέρχιο Αγουέρο (41 γκολ)", synonyms: ["αγουερο", "aguero", "sergio aguero", "kun aguero", "κουν αγουερο", "σερχιο αγουερο"] },
                    { display: "Ερνάν Κρέσπο (35 γκολ)", synonyms: ["κρεσπο", "crespo", "hernan crespo", "ερναν κρεσπο"] },
                    { display: "Ντιέγκο Μαραντόνα (34 γκολ)", synonyms: ["μαραντονα", "maradona", "diego maradona", "ντιεγκο μαραντονα"] }
                ]
            },
            {
    id: 2,
    isTop5: true,
    text: "Βρείτε τους 5 παίκτες με τις περισσότερες συμμετοχές ως συμπαίκτες του Luka Modrić:",
    answers: [
        { display: "Καρίμ Μπενζεμά", synonyms: ["καριμ μπενζεμα", "μπενζεμα", "benzema", "karim benzema", "karim"] },
        { display: "Τόνι Κρόος", synonyms: ["τονι κροος", "κροος", "kroos", "toni kroos", "toni"] },
        { display: "Ντάνι Καρβαχάλ", synonyms: ["ντανι καρβαχαλ", "καρβαχαλ", "carvajal", "dani carvajal", "dani"] },
        { display: "Γκάρεθ Μπέιλ", synonyms: ["γκαρεθ μπειλ", "μπειλ", "bale", "gareth bale", "gareth"] },
        { display: "Σέρχιο Ράμος", synonyms: ["σερχιο ραμος", "ραμος", "ramos", "sergio ramos", "sergio"] }
    ]
},
{
    id: 3,
    isTop5: true,
    text: "Βρείτε τους 5 παίκτες με τις περισσότερες συμμετοχές ως συμπαίκτες του Thomas Müller:",
    answers: [
        { display: "Μάνουελ Νόιερ", synonyms: ["μανουελ νοιερ", "νοιερ", "neuer", "manuel neuer", "manuel"] },
        { display: "Τζόσουα Κίμιχ", synonyms: ["τζοσουα κιμιχ", "κιμιχ", "kimmich", "joshua kimmich", "joshua"] },
        { display: "Φίλιπ Λαμ", synonyms: ["φιλιπ λαμ", "λαμ", "lahm", "philipp lahm", "philipp"] },
        { display: "Ζερόμ Μπόατενγκ", synonyms: ["ζερομ μποατενγκ", "μποατενγκ", "boateng", "jerome boateng", "jerome"] },
        { display: "Νταβίντ Αλάμπα", synonyms: ["νταβιντ αλαμπα", "αλαμπα", "alaba", "david alaba", "david"] }
    ]
            },
            { 
                id: 514, 
                isTop5: true,
                text: "Βρείτε τις 5 ιταλικές ομάδες με τα περισσότερα πρωταθλήματα Ιταλίας (Serie A):", 
                answers: [
                    { display: "Γιουβέντους (36)", synonyms: ["γιουβεντους", "juventus", "juve", "γιουβε"] },
                    { display: "Ίντερ (20)", synonyms: ["ιντερ", "inter", "internazionale"] },
                    { display: "Μίλαν (19)", synonyms: ["μιλαν", "milan", "ac milan"] },
                    { display: "Τζένοα (9)", synonyms: ["τζενοα", "genoa"] },
                    { display: "Τορίνο / Μπολόνια / Ρόμα (7)", synonyms: ["τορινο", "torino", "μπολονια", "bologna", "ρομα", "roma"] }
                ]
            }
        ]
    },
    
    "ΠΟΙΟΣ ΛΕΙΠΕΙ": {
        3: [
            { 
                id: 101, 
                text: "Ποιος λείπει από την ενδεκάδα της Γιουβέντους από το παιχνίδι ενάντια στη Μπαρσελόνα στον τελικό του Champions League το 2015;", 
                image: "leipei1.jpg", 
                correct: "Αρτούρο Βιδάλ", 
                synonyms: ["βιδαλ", "vidal", "αρτουρο βιδαλ", "arturo vidal", "arturo", "αρτουρο"] 
            },
            { 
               id: 102, 
               text: "Ποιος λείπει από την ενδεκάδα του ΑΠΟΕΛ στον αγώνα ενάντια στη Μπαρτσελόνα για τους ομίλους του Champions League το 2014;", 
                image: "leipei26.jpg", 
                correct: "Κίλιαν Σέρινταν", 
                synonyms: ["σερινταν", "sheridan", "kilian sheridan", "κιλιαν σερινταν"] 
            },
            { 
              id: 103, 
               text: "Ποιος λείπει από την ενδεκάδα του ΑΠΟΕΛ στον αγώνα ενάντια στη Ρεάλ Μαδρίτης για τα προημιτελικά του Champions League το 2012;", 
               image: "leipei24.jpg", 
              correct: "Ιβάν Τρισκόφσκι", 
              synonyms: ["τρισκοφσκι", "trickovski", "ivan trickovski", "ιβαν τρισκοφσκι"] 
            },
            { 
             id: 104, 
              text: "Ποιος λείπει από την ενδεκάδα της Ανόρθωσης στον αγώνα ενάντια στον Ολυμπιακό για τα προκριματικά του Champions League το 2008;", 
               image: "leipei23.jpg", 
              correct: "Γιάννης Σκοπελίτης", 
              synonyms: ["σκοπελιτης", "skopelitis", "giannis skopelitis", "yiannis skopelitis", "γιαννης σκοπελιτης"] 
            },
            { 
              id: 105, 
               text: "Ποιος λείπει από την ενδεκάδα του Απόλλωνα στον αγώνα ενάντια στον Ολυμπιακό για τα προκριματικά του Europa League το 2022;", 
              image: "leipei25.jpg", 
                correct: "Ιωάννης Πίττας", 
               synonyms: ["πιττας", "pittas", "ioannis pittas", "γιωργος πιττας", "pittas i"] 
            },
            { 
               id: 106, 
                text: "Ποιος λείπει από την ενδεκάδα της Ομόνοιας στον αγώνα ενάντια στη Μάντσεστερ Γιουνάιτεντ για τους ομίλους του Europa League το 2022;", 
                image: "leipei27.jpg", 
                correct: "Μπράντον Μπάρκερ", 
               synonyms: ["μπαρκερ", "barker", "brandon barker", "μπραντον μπαρκερ"] 
            },
            { 
               id: 16, 
                text: "Ποιος λείπει από την ενδεκάδα της Αγγλίας στον τελικό του Euro 2024 ενάντια στην Ισπανία;", 
               image: "leipei16.jpg", 
               correct: "Τζουντ Μπέλινγκχαμ", 
               synonyms: ["μπέλινγκχαμ", "bellingham", "jude bellingham", "τζουντ μπέλινγκχαμ", "τζουντ"] 
            },
            { 
             id: 18, 
              text: "Ποιος λείπει από την ενδεκάδα της Ισπανίας στον ημιτελικό του Euro 2024 ενάντια στη Γαλλία;", 
              image: "leipei18.jpg", 
              correct: "Χεσούς Νάβας", 
               synonyms: ["ναβας", "navas", "jesus navas", "χεσους ναβας"] 
            },
            { 
              id: 17, 
              text: "Ποιος λείπει από την ενδεκάδα της Αγγλίας στον ημιτελικό του Euro 2024 ενάντια στην Ολλανδία;", 
               image: "leipei17.jpg", 
             correct: "Κίραν Τρίπιερ", 
              synonyms: ["τριπιερ", "trippier", "kieran trippier", "κιραν τριπιερ"] 
            },
            { 
              id: 20, 
              text: "Ποιος λείπει από την ενδεκάδα της Γαλλίας στον τελικό του Euro 2016 ενάντια στην Πορτογαλία;", 
                image: "leipei20.jpg", 
              correct: "Μουσά Σισοκό", 
              synonyms: ["σισοκο", "sissoko", "moussa sissoko", "μουσα σισοκο"] 
            },
            { 
              id: 19, 
              text: "Ποιος λείπει από την ενδεκάδα της Γερμανίας στον ημιτελικό του Euro 2016 ενάντια στη Γαλλία;", 
               image: "leipei19.jpg", 
              correct: "Γιούλιαν Ντράξλερ", 
             synonyms: ["ντραξλερ", "draxler", "julian draxler", "γιουλιαν ντραξλερ"] 
            },
            { 
             id: 21, 
             text: "Ποιος λείπει από την ενδεκάδα της Αγγλίας στον τελικό του Euro 2021 ενάντια στην Ιταλία;", 
               image: "leipei21.jpg", 
              correct: "Ραχίμ Στέρλινγκ", 
            synonyms: ["στερλινγκ", "sterling", "raheem sterling", "ραχιμ στερλινγκ"] 
            },
            { 
              id: 22, 
                text: "Ποιος λείπει από την ενδεκάδα της Ισπανίας στον ημιτελικό του Euro 2021 ενάντια στην Ιταλία;", 
                image: "leipei22.jpg", 
                correct: "Ντάνι Όλμο", 
               synonyms: ["ολμο", "olmo", "dani olmo", "ντανι ολμο"] 
            },
            { 
                id: 102, 
                text: "Ποιος λείπει από την ενδεκάδα της Μάντσεστερ Γιουνάιτεντ από το παιχνίδι ενάντια στη Μπαρσελόνα στον τελικό του Champions League το 2011;", 
                image: "leipei2.jpg", 
                correct: "Παρκ Τζι-Σουνγκ", 
                synonyms: ["παρκ", "park", "ji sung park", "παρκ τζι σουνγκ", "park ji sung"] 
            },
            { 
                id: 103, 
                text: "Ποιος λείπει από την ενδεκάδα της Φιορεντίνα από το παιχνίδι ενάντια στον Ολυμπιακό στον τελικό του Europa Conference League το 2024;", 
                image: "leipei6.jpg", 
                correct: "Νίκολα Μιλένκοβιτς", 
                synonyms: ["μιλεγκοβιτς", "μιλενκοβιτς", "milegkovic", "milenkovic", "νικολα μιλενκοβιτς", "nikola milenkovic"] 
            },
            { 
                id: 104, 
                text: "Ποιος λείπει από την ενδεκάδα της Αργεντινής στο παιχνίδι ενάντια στη Κροατία στα ημιτελικά του Παγκοσμίου Κυπέλλου το 2022;", 
                image: "leipei12.jpg", 
                correct: "Λεάντρο Παρέδες", 
                synonyms: ["παρεδες", "paredes", "λεαντρο παρεδες", "leandro paredes", "leandro"] 
            },
            { 
                id: 105, 
                text: "Ποιος λείπει από την ενδεκάδα της Γαλλίας στο παιχνίδι ενάντια στο Μαρόκο στα ημιτελικά του Παγκοσμίου Κυπέλλου το 2022;", 
                image: "leipei10.jpg", 
                correct: "Γιουσούφ Φοφανά", 
                synonyms: ["φοφανα", "fofana", "γιουσουφ φοφανα", "youssouf fofana", "youssouf"] 
            },
            { 
                id: 106, 
                text: "Ποιος λείπει από την ενδεκάδα της Αργεντινής στο παιχνίδι ενάντια στη Γερμανία στον τελικό του Παγκοσμίου Κυπέλλου το 2014;", 
                image: "leipei13.jpg", 
                correct: "Εζέκιελ Λαβέτσι", 
                synonyms: ["λαβετσι", "lavezzi", "εζεκιελ λαβετσι", "ezequiel lavezzi", "pocho", "ποτσο"] 
            },
            { 
                id: 201, 
                text: "Ποιος λείπει από την ενδεκάδα του Παναθηναϊκού από το παιχνίδι ενάντια στη Μπαρσελόνα στον 2ο γύρο των ομίλων του Champions League το 2010;", 
                image: "leipei15.jpg", 
                correct: "Λάζαρος Χριστοδουλόπουλος", 
                synonyms: ["χριστοδουλοπουλος", "christodoulopoulos", "λαζαρος χριστοδουλοπουλος", "lazaros christodoulopoulos", "λαζαρος", "lazaros"] 
            },
            { 
                id: 202, 
                text: "Ποιος λείπει από την ενδεκάδα της Κροατίας ενάντια στη Γαλλία στον τελικό του Παγκοσμίου Κυπέλλου το 2018;", 
                image: "leipei9.jpg", 
                correct: "Άντε Ρέμπιτς", 
                synonyms: ["ρεμπιτς", "rebic", "αντε ρεμπιτς", "ante rebic", "ante", "αντε"] 
            },
            { 
                id: 203, 
                text: "Ποιος λείπει από την ενδεκάδα της Ισπανίας ενάντια στην Ολλανδία στον τελικό του Παγκοσμίου Κυπέλλου το 2010;", 
                image: "leipei8.jpg", 
                correct: "Χοάν Καπντεβίλα", 
                synonyms: ["καπντεβιλα", "capdevila", "χοαν καπντεβιλα", "joan capdevila", "joan"] 
            },
            { 
                id: 204, 
                text: "Ποιος λείπει από την ενδεκάδα της Λίβερπουλ ενάντια στη Ρεάλ Μαδρίτης στον τελικό του Champions League το 2022;", 
                image: "leipei3.jpg", 
                correct: "Τιάγκο Αλκάνταρα", 
                synonyms: ["τιαγκο", "thiago", "αλκανταρα", "alcantara", "τιαγκο αλκανταρα", "thiago alcantara"] 
            },
            { 
                id: 205, 
                text: "Ποιος λείπει από την ενδεκάδα της Άρσεναλ από το παιχνίδι ενάντια στον Ολυμπιακό στα knock out για τους 16 του Europa League το 2020;", 
                image: "leipei5.jpg", 
                correct: "Μπουκάγιο Σάκα", 
                synonyms: ["σακα", "saka", "μπουκαγιο σακα", "bukayo saka", "bukayo"] 
            },
            { 
                id: 206, 
                text: "Ποιος λείπει από την ενδεκάδα της Μάντσεστερ Σίτι στο τελικό του Champions League το 2023;", 
                image: "leipei4.jpg", 
                correct: "Τζον Στόουνς", 
                synonyms: ["στοουνς", "stones", "τζον στοουνς", "john stones", "john"] 
            },
            { 
                id: 207, 
                text: "Ποιος λείπει από την ενδεκάδα της Ομόνοιας στο τελικό κυπέλλου ενάντια στον Εθνικό Άχνας το 2022;", 
                image: "leipei7.jpg", 
                correct: "Γιούστε", 
                synonyms: ["γιουστε", "yuste", "alberto yuste", "αλμπερτο γιουστε"] 
            },
            { 
                id: 208, 
                text: "Ποιος λείπει από την ενδεκάδα της Ομόνοιας στο τελικό κυπέλλου ενάντια στη Πάφο το 2024;", 
                image: "leipei11.jpg", 
                correct: "Μίλετιτς", 
                synonyms: ["μιλετιτς", "miletic", "nemanja miletic", "νεμανια μιλετιτς"] 
            },
            { 
                id: 209, 
                text: "Ποιος λείπει από την ενδεκάδα της ΑΕΚ στο τελικό κυπέλλου ενάντια στη Πάφο το 2025;", 
                image: "leipei14.jpg", 
                correct: "Αϊτόρ", 
                synonyms: ["αιτορ", "aitor", "aitor cantarero", "αιτορ κανταρερο"] 
            }

        ]
    },
    "ΙΣΤΟΡΙΑ": {
        1: [
            { 
            id: 401, 
            text: "Ποια εθνική ομάδα κατέκτησε το πρώτο Ευρωπαϊκό Πρωτάθλημα (Euro) στην ιστορία το 1960;", 
            correct: "Σοβιετική Ένωση", 
            synonyms: ["σοβιετικη ενωση", "εσσδ", "ussr", "ρωσια"] 
        },
        { 
            id: 408, 
            text: "Ποια ομάδα έχει το προσωνύμιο 'Οι Καναρίνια' (The Canaries);", 
            correct: "Νόριτς Σίτι", 
            synonyms: ["νοριτς σιτι", "νοριτς", "norwich city", "norwich"] 
        },
        { id: 401, text: "Ποια εθνική ομάδα κατέκτησε το πρώτο Ευρωπαϊκό Πρωτάθλημα (Euro) στην ιστορία το 1960;", correct: "Σοβιετική Ένωση", synonyms: ["σοβιετικη ενωση", "εσσδ", "ussr", "ρωσια"] },
          { id: 408, text: "Ποιος προπονητής προσέλαβε «λοποδύτες» ώστε να κλέψουν τα κινητά τηλέφωνα και τα πορτοφόλια των ποδοσφαιριστών του για να τους διδάξει εγρήγορση;", correct: "Μικέλ Αρτέτα", synonyms: ["μικελ αρτετα", "arteta", "mikel arteta"] },
       { id: 409, text: "Ποιος ποδοσφαιριστής κατέκτησε τη Χρυσή Μπάλα το 2003;", correct: "Πάβελ Νέντβεντ", synonyms: ["παβελ νεντβεντ", "pavel nedved", "nedved"] },
          { id: 403, text: "Σε ποια πόλη διεξήχθη ο τελικός του Μουντιάλ 2006 (Ιταλία - Γαλλία);", correct: "Βερολίνο", synonyms: ["βερολινο", "berlin"] },
            { id: 404, text: "Πριν αναλάβει την Εθνική Ελλάδος, σε ποια ομάδα ήταν προπονητής ο Ότο Ρεχάγκελ;", correct: "Καϊζερσλάουτερν", synonyms: ["καιζερσλαουτερν", "kaiserslautern"] },
            { 
            id: 402, 
            text: "Από ποια ομάδα αγόρασε η Μπορντό τον Ζινεντίν Ζιντάν το 1992;", 
            correct: "Κάννες", 
            synonyms: ["καννες", "cannes", "as cannes", "ασ καννες"] 
        },
        { 
            id: 403, 
            text: "Σε ποια ομάδα έκλεισε την καριέρα του ο Ντιέγκο Αρμάντο Μαραντόνα;", 
            correct: "Μπόκα Τζούνιορς", 
            synonyms: ["μποκα τζουνιορς", "boca juniors", "μποκα", "boca"] 
        }
           
        ],
        2: [
            { id: 416, text: "Ποιος ποδοσφαιριστής έχει πετύχει τα περισσότερα γκολ σε μία σεζόν στη φάση ομίλων/League Phase του UEFA Champions League;", correct: "Kylian Mbappé", synonyms: ["κιλιαν εμπαπε", "kylian mbappe", "εμπαπε"] },
            { id: 413, text: "Ποιος προπονητής οδήγησε την Athletic Bilbao στον τελικό του Europa League το 2012;", correct: "Marcelo Bielsa", synonyms: ["μαρσελο μπιελσα", "marcelo bielsa", "μπιελσα"] },
            { id: 412, text: "Ποια είναι η τελευταία ομάδα που κατέκτησε το UEFA Europa League στη διαδικασία των πέναλτι (στον τελικό του 2023);", correct: "Sevilla", synonyms: ["σεβιλλη", "sevilla"] },
            { id: 405, text: "Από ποια ομάδα ξεκίνησε την επαγγελματική του καριέρα ο Άλαν Σίρερ;", correct: "Σαουθάμπτον", synonyms: ["σαουθαμπτον", "southampton"] },
           { 
            id: 404, 
            text: "Από ποια ομάδα αγόρασε η PSV τον Ρουντ φαν Νίστελροϊ το 1998;", 
            correct: "Χέρενφεν", 
            synonyms: ["χερενφεν", "heerenveen", "sc heerenveen"] 
        },
        { 
            id: 406, 
            text: "Ποια είναι η ομάδα της Premier League που κατέχει το ρεκόρ για τη συγκομιδή των λιγότερων βαθμών σε μία σεζόν (11 βαθμοί);", 
            correct: "Ντέρμπι Κάουντι", 
            synonyms: ["ντερμπι καουντι", "ντερμπι", "derby county", "derby"] 
        },
        { 
            id: 405, 
            text: "Ποια χώρα έχει τους περισσότερους «εμφύλιους» τελικούς στο Europa League/Κύπελλο UEFA;", 
            correct: "Ιταλία", 
            synonyms: ["ιταλια", "italy", "ιταλική"] 
        } 
        ],
       3: [
        { id: 414, text: "Ποιος ποδοσφαιριστής κατέχει το ρεκόρ για τα περισσότερα συνεχόμενα ματς στην ιστορία της La Liga (251 αγώνες);", correct: "Iñaki Williams", synonyms: ["ινακι ουιλιαμς", "inaki williams", "williams"] },
            { id: 415, text: "Ποιος ποδοσφαιριστής έχει σημειώσει χατ-τρικ σε έναν τελικό UEFA Super Cup;", correct: "Radamel Falcao", synonyms: ["ραδαμελ φαλκαο", "radamel falcao", "φαλκαο"] },
        { 
            id: 402, 
            text: "Σε ποια πόλη διεξήχθη ο πρώτος τελικός του UEFA Europa League το 2010;", 
            correct: "Αμβούργο", 
            synonyms: ["αμβουργο", "hamburg"] 
        },
        { 
            id: 407, 
            text: "Ποιος είναι ο Γερμανός ποδοσφαιριστής με τις περισσότερες συμμετοχές στο ελληνικό πρωτάθλημα;", 
            correct: "Ντένις Έπσταϊν", 
            synonyms: ["ντενις επσταιν", "επσταιν", "dennis eptstein", "epstein"] 
        },
          { id: 410, text: "Ποιος ποδοσφαιριστής αγωνίστηκε σε Borussia Dortmund και Juventus τις σεζόν 1996-1997;", correct: "Paulo Sousa", synonyms: ["παουλο σοουζα", "paulo sousa"] },
            { id: 411, text: "Ποιος είναι ο τελευταίος ποδοσφαιριστής που κατέκτησε το UEFA Champions League σε δύο διαδοχικές σεζόν (2009 & 2010) με διαφορετικές ομάδες (Barcelona & Inter);", correct: "Samuel Eto'o", synonyms: ["σαμουελ ετο", "samuel eto'o", "eto'o"] },
        { id: 406, text: "Ποιος ήταν ο πρώτος ποδοσφαιριστής που έφτασε τα 50+ γκολ σε τρία από τα πέντε κορυφαία πρωταθλήματα της Ευρώπης;", correct: "Κριστιάνο Ρονάλντο", synonyms: ["κριστιανο ροναλντο", "cristiano ronaldo", "ronaldo"] },
            { id: 407, text: "Ποιος ήταν ο τελευταίος Ισπανός παίκτης που αναδείχθηκε πρώτος σκόρερ στη La Liga (σεζόν 2007-08);", correct: "Ντάνι Γκουίθα", synonyms: ["ντανι γκουιθα", "dani guiza", "guiza"] },
          { 
            id: 406, 
            text: "Ποιος ποδοσφαιριστής έχει πετύχει το γρηγορότερο γκολ σε τελικό Champions League;", 
            correct: "Πάολο Μαλντίνι", 
            synonyms: ["παολο μαλντινι", "paolo maldini", "μαλντινι", "maldini"] 
        },
        { 
            id: 409, 
            text: "Ποιος παίκτης κατέχει το ρεκόρ των περισσότερων γκολ σε ένα Παγκόσμιο Κύπελλο (13 γκολ το 1958);", 
            correct: "Ζιστ Φοντέν", 
            synonyms: ["ζιστ φοντεν", "φοντεν", "just fontaine", "fontaine"] 
        },
        { 
            id: 407, 
            text: "Ποιος Βραζιλιάνος έχει καταγράψει τις περισσότερες συμμετοχές στο Champions League;", 
            correct: "Ρομπέρτο Κάρλος", 
            synonyms: ["ρομπερτο καρλος", "roberto carlos"] 
        }

        ]
    },
    "PLAYER ID": {
        3: [
            { 
                id: 321, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2006–2008: Παρτιζάν<br>• 2008–2013: Φιορεντίνα<br>• 2013–2016: Μάντσεστερ Σίτι<br>• 2015–2017: Ίντερ (Δανεικός)<br>• 2016–2017: Ίντερ<br>• 2017: Σεβίλλη (Δανεικός)<br>• 2017–2021: Μονακό<br>• 2021–2023: Χέρτα Βερολίνου<br>• 2023–2024: Ολυμπιακός<br>• 2024–σήμερα: Ομόνοια", 
                correct: "Στέβαν Γιόβετιτς", 
                synonyms: ["στεβαν γιοβετιτς", "γιοβετιτς", "jovetic", "stefan jovetic", "stevan jovetic"] 
            },
            { 
                id: 322, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2006–2010: Μίλαν<br>• 2009–2010: Πάντοβα (δανεικός)<br>• 2010–2011: Παλέρμο<br>• 2011–2015: Τορίνο<br>• 2015–2019: Μάντσεστερ Γιουνάιτεντ<br>• 2019–2021: Πάρμα<br>• 2020–2021: Ίντερ (δανεικός)<br>• 2021–σήμερα: Ίντερ", 
                correct: "Ματέο Νταρμιάν", 
                synonyms: ["ματεο νταρμιαν", "νταρμιαν", "matteo darmian", "darmian"] 
            },
            { 
               id: 323, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2019–2023: Σαχτάρ Ντονέτσκ<br>• 2022–2023: Λυών (δανεικός)<br>• 2023: Λέστερ Σίτι<br>• 2023–2024: Γαλατασαράι<br>• 2024–2026: Παναθηναϊκός<br>• 2026–σήμερα: Γκρέμιο", 
               correct: "Τετέ", 
              synonyms: ["τετε", "tete", "mateus cardoso lemos martins"] 
            },
            { 
               id: 324, 
               text: "Βρες τον παίκτη από την καριέρα του:<br>• 2014–2016: Ερυθρός Αστέρας<br>• 2016–2019: Μπενφίκα<br>• 2017–2019: Άιντραχτ Φρανκφούρτης (δανεικός)<br>• 2019: Άιντραχτ Φρανκφούρτης<br>• 2019–2022: Ρεάλ Μαδρίτης<br>• 2021: Άιντραχτ Φρανκφούρτης (δανεικός)<br>• 2022–2023: Φιορεντίνα<br>• 2023–2025: Μίλαν<br>• 2025–σήμερα: ΑΕΚ", 
                correct: "Λούκα Γιόβιτς", 
                synonyms: ["λουκα γιοβιτς", "γιοβιτς", "luka jovic", "jovic"] 
            },
            { 
                 id: 325, 
                 text: "Βρες τον παίκτη από την καριέρα του:<br>• 2011–2016: Σπόρτινγκ Λισαβόνας<br>• 2014: Βιτόρια Σετουμπάλ (δανεικός)<br>• 2016–2021: Ίντερ<br>• 2018: Γουέστ Χαμ (δανεικός)<br>• 2019–2020: Λοκομοτίβ Μόσχας (δανεικός)<br>• 2020–2021: Σπόρτινγκ Λισαβόνας (δανεικός)<br>• 2021–2025: Μπενφίκα<br>• 2024–2025: Μπεσίκτας (δανεικός)<br>• 2025–σήμερα: Μπεσίκτας<br>• 2025–σήμερα: ΑΕΚ (δανεικός)", 
                 correct: "Ζοάο Μάριο", 
                 synonyms: ["ζοαο μαριο", "ζοαο μαριο ναβαλ κοστα εδουαρντο", "joao mario", "joao mario naval costa eduardo"] 
            },
            { 
               id: 322, 
                 text: "Βρες τον παίκτη από την καριέρα του:<br>• 2004–2008: Λιόν<br>• 2008–2011: Ολιμπίκ Μαρσέιγ<br>• 2010–2011: Νιούκασλ Γιουνάιτεντ (Δανεικός)<br>• 2011–2015: Νιούκασλ Γιουνάιτεντ<br>• 2014–2015: Χαλ Σίτι (Δανεικός)<br>• 2015–2016: ΟΖΚ Νις<br>• 2016–2018: Παρί Σεν Ζερμέν<br>• 2018–2020: Σταντ Ρενναί<br>• 2020: Ρεάλ Βαγιαδολίδ<br>• 2020–2021: Ζιροντέν Μπορντώ<br>• 2022: Λιλ", 
               correct: "Ατέμ Μπεν Αρφά", 
               synonyms: ["ατεμ μπεν αρφα", "μπεν αρφα", "hatem ben arfa", "ben arfa"] 
            },
            { 
              id: 323, 
             text: "Βρες τον παίκτη από την καριέρα του:<br>• 2012–2015: Λίβερπουλ<br>• 2015–2022: Μάντσεστερ Σίτι<br>• 2022–2026: Τσέλσι<br>• 2024–2025: Άρσεναλ (Δανεικός)<br>• 2026–σήμερα: Φέγενορντ", 
             correct: "Ραχίμ Στέρλινγκ", 
             synonyms: ["ραχιμ στερλινγκ", "στερλινγκ", "raheem sterling", "sterling"] 
            },
            { 
              id: 324, 
               text: "Βρες τον παίκτη από την καριέρα του:<br>• 2012–2013: Χέρενφεν Β' <br>• 2012–2014: Χέρενφεν<br>• 2014–2016: Τβέντε<br>• 2016–2020: Άγιαξ<br>• 2020–2023: Τσέλσι<br>• 2023–2025: Γαλατασαράι<br>• 2025: Αλ-Ντουχαΐλ<br>• 2025–σήμερα: Γουιντάντ", 
               correct: "Χακίμ Ζιγιέκ", 
                synonyms: ["χακιμ ζιγιεκ", "ζιγιεκ", "hakim ziyech", "ziyech"] 
            },
            { 
               id: 325, 
               text: "Βρες τον παίκτη από την καριέρα του:<br>• 2011–2013: Μπαρτσελόνα Β<br>• 2011–2020: Μπαρτσελόνα<br>• 2013–2014: Θέλτα (Δανεικός)<br>• 2018: Ίντερ (Δανεικός)<br>• 2019: Θέλτα (Δανεικός)<br>• 2020–2022: Παρί Σεν Ζερμέν<br>• 2022: Ρεάλ Σοσιεδάδ (Δανεικός)<br>• 2022–σήμερα: Αλ Αραμπί", 
               correct: "Ραφίνια", 
               synonyms: ["ραφινια", "rafinha", "rafinha alcantara", "ραφινια αλκανταρα"] 
            },
            { 
               id: 326, 
               text: "Βρες τον παίκτη από την καριέρα του:<br>• 1989–1994: Σάο Πάολο<br>• 1994–1995: Ρεάλ Σαραγόσα<br>• 1995: Ζουβεντούδε<br>• 1996–1997: Παλμέιρας<br>• 1997–2003: Ρόμα<br>• 2003–2008: ΑΚ Μίλαν", 
                correct: "Καφού", 
              synonyms: ["καφου", "cafu", "marcos evangelista de morais"] 
            },
            { 
               id: 327, 
               text: "Βρες τον παίκτη από την καριέρα του:<br>• 2015–2017: Τσάρλτον Αθλέτικ<br>• 2017–2019: Έβερτον<br>• 2018: Λειψία (Δανεικός)<br>• 2019–2022: Λειψία<br>• 2020–2021: Φούλαμ (Δανεικός)<br>• 2021–2022: Λέστερ (Δανεικός)<br>• 2022–2026: Αταλάντα<br>• 2026–σήμερα: Ατλέτικο Μαδρίτης", 
                correct: "Αντεμόλα Λούκμαν", 
               synonyms: ["αντεμολα λουκμαν", "λουκμαν", "ademola lookman", "lookman"] 
            },
            { 
              id: 328, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2002–2003: RS Futebol<br>• 2004: Ζουβεντούδε<br>• 2004–2005: Πόρτο Β<br>• 2005–2006: Ντιναμό Μόσχας<br>• 2006–2008: Φλουμινένσε<br>• 2009–2012: ΑΚ Μίλαν<br>• 2012–2020: Παρί Σεν Ζερμέν<br>• 2020–2024: Τσέλσι<br>• 2024–2025: Φλουμινένσε<br>• 2026–σήμερα: Πόρτο", 
                correct: "Τιάγκο Σίλβα", 
               synonyms: ["τιαγκο σιλβα", "σιλβα", "thiago silva", "thiago emiliano da silva"] 
            },
            { 
               id: 329, 
                   text: "Βρες τον παίκτη από την καριέρα του:<br>• 2010–2013: Ρεάλ Μαδρίτης Β<br>• 2010–2014: Ρεάλ Μαδρίτης<br>• 2014–2016: Γιουβέντους<br>• 2016–2017: Ρεάλ Μαδρίτης<br>• 2017–2020: Τσέλσι<br>• 2019–2020: Ατλέτικο Μαδρίτης (Δανεικός)<br>• 2020–2024: Ατλέτικο Μαδρίτης<br>• 2020–2022: Γιουβέντους (Δανεικός)<br>• 2024–σήμερα: Μίλαν<br>• 2025: Γαλατασαράι (Δανεικός)<br>• 2025–σήμερα: Κόμο (Δανεικός)", 
               correct: "Άλβαρο Μοράτα", 
               synonyms: ["αλβαρο μορατα", "μορατα", "alvaro morata", "morata"] 
            },
            { 
              id: 330, 
              text: "Βρες τον παίκτη από την καριέρα του:<br>• 2014–2017: ΦΚ Ουτρέχτη<br>• 2017–2018: Φέγενορντ<br>• 2018–2020: Κλαμπ Μπρυζ<br>• 2019–2020: Ελλάς Βερόνα (Δανεικός)<br>• 2020–σήμερα: Φιορεντίνα<br>• 2023–2024: Μάντσεστερ Γιουνάιτεντ (Δανεικός)<br>• 2024–2025: Φενέρμπαχτσε (Δανεικός)<br>• 2025: Φενέρμπαχτσε<br>• 2025–σήμερα: Ρεάλ Μπέτις (Δανεικός)", 
                 correct: "Σοφιάν Άμραμπατ", 
              synonyms: ["σοφιαν αμραμπατ", "αμραμπατ", "sofyan amrabat", "amrabat"] 
            },
            { 
              id: 331, 
              text: "Βρες τον παίκτη από την καριέρα του:<br>• 2011–2022: Μάντσεστερ Γιουνάιτεντ<br>• 2012–2013: Λέστερ Σίτι (Δανεικός)<br>• 2013–2014: Μπέρμιγχαμ Σίτι (Δανεικός)<br>• 2014: Μπράιτον εντ Χόουβ Άλμπιον (Δανεικός)<br>• 2015: Ντέρμπι Κάουντι (Δανεικός)<br>• 2021: Γουέστ Χαμ Γιουνάιτεντ (Δανεικός)<br>• 2022–2023: Νότιγχαμ Φόρεστ<br>• 2024–2025: ΦΚ Σεούλ<br>• 2026–σήμερα: Κορίνθιανς", 
             correct: "Τζέσι Λίνγκαρντ", 
              synonyms: ["τζεσι λινγκαρντ", "λινγκαρντ", "jesse lingard", "lingard"] 
            },
            { 
              id: 332, 
             text: "Βρες τον παίκτη από την καριέρα του:<br>• 2014–2017: Σπόρτινγκ Λισαβόνας Β<br>• 2015–2016: Μορεϊρένσε (Δανεικός)<br>• 2016–2022: Σπόρτινγκ Λισαβόνας<br>• 2016–2017: Μπελενένσες (Δανεικός)<br>• 2018–2020: Μπράγκα (Δανεικός)<br>• 2022–2024: Φούλαμ<br>• 2024–σήμερα: Μπάγερν Μονάχου<br>• 2025–σήμερα: Τότεναμ (Δανεικός)", 
             correct: "Ζοάο Παλίνια", 
             synonyms: ["ζοαο παλινια", "παλινια", "joao palhinha", "palhinha"] 
            },
            { 
             id: 333, 
             text: "Βρες τον παίκτη από την καριέρα του:<br>• 2012–2015: Στουτγκάρδη Β<br>• 2013–2016: Στουτγκάρδη<br>• 2016–2018: Παναθηναϊκός<br>• 2018–2023: Μπενφίκα<br>• 2023–2024: Νότιγχαμ Φόρεστ<br>• 2024–σήμερα: Νιούκασλ Γιουνάιτεντ<br>• 2025–σήμερα: Σεβίλλη (Δανεικός)", 
               correct: "Οδυσσέας Βλαχοδήμος", 
             synonyms: ["οδυσσεας βλαχοδημος", "βλαχοδημος", "odysseas vlachodimos", "vlachodimos"] 
            },  
            { 
              id: 334, 
             text: "Βρες τον παίκτη από την καριέρα του:<br>• 2004–2005: Εξελσιόρ<br>• 2005–2007: ΦΚ Ναντ<br>• 2007–2011: ΑΣ Σαιντ-Ετιέν<br>• 2011–2013: Λιλ<br>• 2013–2015: Ολιμπίκ Μαρσέιγ<br>• 2015–2017: Γουέστ Χαμ<br>• 2017–2023: Ολιμπίκ Μαρσέιγ<br>• 2023–2025: Βάσκο ντα Γκάμα", 
              correct: "Ντιμίτρι Παγέτ", 
             synonyms: ["διμιτρι παγετ", "παγετ", "dimitri payet", "payet"] 
            },
            { 
            id: 335, 
              text: "Βρες τον παίκτη από την καριέρα του:<br>• 2014–2015: Μάντσεστερ Γιουνάιτεντ<br>• 2014–2015: Βοϊβοντίνα (Δανεικός)<br>• 2016–2017: Λέχια Γκντανσκ<br>• 2017–σήμερα: Τορίνο<br>• 2018–2019: ΣΠΑΛ (Δανεικός)<br>• 2019: Άσκολι (Δανεικός)<br>• 2019–2020: Σταντάρ Λιέγης (Δανεικός)<br>• 2025–σήμερα: Νάπολι (Δανεικός)", 
             correct: "Βάνια Μιλίνκοβιτς-Σάβιτς", 
             synonyms: ["βανια μιλινκοβιτς-σαβιτς", "μιλινκοβιτς-σαβιτς", "vanja milinkovic-savic", "milinkovic-savic"] 
            },
            { 
              id: 336, 
              text: "Βρες τον παίκτη από την καριέρα του:<br>• 2000–2005: Ομόνοια Λευκωσίας<br>• 2005–2007: Α.Ε. Λάρισας<br>• 2007–2008: ΦΚ Ενεργκί Κότμπους<br>• 2008–2012: Ομόνοια Λευκωσίας<br>• 2012–2020: ΑΠΟΕΛ", 
                 correct: "Στάθης Αλωνεύτης", 
            synonyms: ["σταθης αλωνευτης", "αλωνευτης", "stathis aloneftis", "aloneftis"] 
            },
            { 
                id: 322, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2004–2005:Le Harve <br>• 2005–2007:Τσελσι <br>• 2007–2008: Άρσεναλ<br>• 2008–2009: Πόρτσμουθ<br>• 2009–2012: Ρεάλ Μαδρίτης<br>• 2012–2013: Ανζί<br>• 2013–2015: Λοκομοτιβ Μοσχας <br>• 2015–2017: Μαρσειγ <br>• 2017–2018: Αλ ζαζιρα <br>• 2018–2019: Παρι",
                correct: "Λασανά Ντιαρά", 
                synonyms: ["λασανα ντιαρα", "ντιαρα", "diarra", "lassana diarra"] 
            },
            
            { 
                id: 324, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2009–2011: Λιλ<br>• 2011–2013: Άρσεναλ<br>• 2013–2016: Ρόμα<br>• 2016–2017: Χεμπέι Φόρτσουν <br>• 2018–2021: Πάρμα<br>• 2021–2022: Τραμπζονσπόρ <br>• 2022: Αρης Θεσσαλονικης", 
                correct: "Ζερβίνιο", 
                synonyms: ["ζερβινιο", "gervinho"] 
            },
            { 
                id: 325, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 1999–2003: Αουξέρ<br>• 2004–2006: Λίβερπουλ<br>• 2007–2008: Μαρσέιγ <br>• 2008–2009: Σάντερλαντ (Δανεικος)<br>• 2009–2011: Παναθηναϊκός<br>• 2011–2012: Λατσιο <br>• 2012-2013: Κουινς Παρκ Ρειντζερς <br>• 2013–2014: Κουμπαν Κρασνοταρ <br>•2014-2015: Μπαστια ", 
                correct: "Τζιμπρίλ Σισέ", 
                synonyms: ["τζιμπριλ σισε", "σισε", "cisse", "djibril cisse"] 
            },
            { 
                id: 326, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2007–2011: Ρίβερ Πλέιτ<br>• 2011–2012: Πόρτο<br>• 2012–2013: Ατλέτικο Μαδρίτης<br>• 2013–2015: Μονακό<br>• 2015–2016: Τσέλσι (Δανεικός)<br>• 2016–2017: Μάντσεστερ Γιουνάιτεντ<br>• 2017–2018: Μονακό<br>• 2018–2022: Γαλατασαράι<br>• 2022–2023: Ράγιο Βαγιεκάνο<br>• 2024–σήμερα: Μιγιονάριος", 
                correct: "Ρανταμέλ Φαλκάο", 
                synonyms: ["ρανταμελ φαλκαο", "φαλκαο", "falcao", "radamel falcao"] 
            },
            { 
                id: 327, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2004–2010: Βέρντερ Βρέμης<br>• 2010–2013: Ρεάλ Μαδρίτης<br>• 2013–2020: Άρσεναλ<br>• 2021–2022: Φενέρμπαχτσε<br>• 2022–2023: Μπασακσεχίρ", 
                correct: "Μεσούτ Οζίλ", 
                synonyms: ["μεσουτ οζιλ", "οζιλ", "ozil", "mesut ozil"] 
            },
            { 
                id: 328, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2005–2007: Χερτα <br>• 2007–2009: Τοτεναμ <br>• 2009: Ντορτμουντ (Δανεικος) <br>• 2009–2010: Πορτσμουθ <br>• 2010–2011: Τζεν0α <br>• 2010: Μίλαν (Δανεικος)<br>• 2011–2013: Μιλαν <br>• 2013–2015: Σαλκε <br>• 2016: Μιλαν <br>• 2016 Καλοκαιρι: Λασ Παλμας<br>• 2017–2018: Αιντραχτ Φρανκφουρτησ <br>• 2018-2019: Σασουολο <br>• 2019: Μπαρσελόνα (Δανεικός) <br>• 2020: Μπεσίκτας<br>• 2020–2021: Μόντσα<br>• 2021–2023: Χέρτα Βερολίνου", 
                correct: "Κέβιν-Πρινς Μπόατενγκ", 
                synonyms: ["μποατενγκ", "boateng", "kevin prince boateng", "κεβιν πρινς μποατενγκ"] 
            },
            { 
                id: 329, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2007–2008: Κάρντιφ Σίτι <br>• 2008–2019: Άρσεναλ  <br>• 2010: Φορεστ(Δανεικός)  <br>• 2019–2012: Γιουβέντους <br>• 2022: Ρέιντζερς (Δανεικός)<br>• 2022–2023: Νις<br>• 2023–2025: Κάρντιφ Σίτι", 
                correct: "Άαρον Ράμσεϊ", 
                synonyms: ["ααρον ραμσει", "ραμσει", "ramsey", "aaron ramsey"] 
            },
            { 
                id: 330, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2010-13: Δυναμο Ζαγκρεπτ <br>• 2013–2015: Ίντερ<br>• 2015–2019: Ρεάλ Μαδρίτης<br>• 2018: Τσέλσι (Δανεικος) <br>• 2019: Τσελσι <br>• 2023–σήμερα: Μάντσεστερ Σίτι", 
                correct: "Ματέο Κόβασιτς", 
                synonyms: ["ματεο κοβασιτς", "κοβασιτς", "kovacic", "mateo kovacic"] 
            },
            { 
                id: 331, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2011–2013: Μάλαγα<br>• 2013–2022: Ρεάλ Μαδρίτης<br>• 2022–2023: Σεβίλλη<br>• 2023: Μπετις", 
                correct: "Ίσκο", 
                synonyms: ["ισκο", "isco"] 
            },
            { 
                id: 332, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2010–2015: Σαχτάρ Ντόνετσκ<br>• 2015–2017: Μπάγερν Μονάχου<br>• 2017–2020: Γιουβέντους<br>• 2020–2022: Γκρέμιο<br>• 2022–2023: LA Galaxy<br>• 2023–2024: Φλουμινένσε <br>• 2024-2026: Συντει", 
                correct: "Ντάγκλας Κόστα", 
                synonyms: ["νταγκλας κοστα", "douglas costa", "κοστα"] 
            },
            { 
                id: 333, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2005–2011: Σεβίλλη<br>• 2011–2016: Μπαρσελόνα<br>• 2016–2018: Γιουβέντους<br>• 2018: Παρί Σεν Ζερμέν<br>• 2018–2019: Σάο Πάολο<br>• 2021–2022: Μπαρσελόνα<br>• 2022–2023: Πούμας", 
                correct: "Ντάνι Άλβες", 
                synonyms: ["ντανι αλβες", "αλβες", "alves", "dani alves"] 
            },
            { 
                id: 334, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2007–2010: Ντινάμο Ζάγκρεμπ<br>• 2010–2015: Λιόν<br>• 2015–2020: Λίβερπουλ<br>• 2020–2023: Ζενίτ Αγίας Πετρούπολης<br>• 2023–σήμερα: Λυών", 
                correct: "Ντέγιαν Λόβρεν", 
                synonyms: ["ντεγιαν λοβρεν", "λοβρεν", "lovren", "dejan lovren"] 
            },
            { 
                id: 335, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2010–2015: Βασιλεία<br>• 2015–2018: Μπορούσια Μενχενγκλάντμπαχ<br>• 2018–2023: Άρσεναλ<br>• 2023–2025: Λεβερκούζεν<br>• 2025–σήμερα: Σαντερλαν ", 
                correct: "Γκρανίτ Τζάκα", 
                synonyms: ["γκρανιτ τζακα", "τζακα", "xhaka", "granit xhaka"] 
            },
            { 
                 id: 602, 
                text: "Ποιος παίκτης έχει το παρακάτω ιστορικό καριέρας;<br><b>Stoke (2014-17) -> PSG (2018-20) -> Bayern (2020-24)</b>", 
                correct: "Ερίκ Μαξίμ Τσούπο-Μοτίνγκ", 
                synonyms: ["ερικ μαξιμ τσουπο μοτινγκ", "τσουπο μοτινγκ", "eric maxim choupo-moting", "choupo-moting", "choupo"] 
            },
            {
                  id: 601, 
                text: "Ποιος παίκτης έχει το παρακάτω ιστορικό καριέρας;<br><b>Southampton (2005-06) -> Arsenal (2006-18) -> Everton (2018-21) -> Southampton (2021-23)</b>", 
                 correct: "Θίο Γουόλκοτ", 
                synonyms: ["θεο γουολκοτ", "γουολκοτ", "theo walcott", "walcott", "theo"] 
            },
            { 
                id: 336, 
                text: "Βρες τον παίκτη από την καριέρα του:<br>• 2010–2015: Ατλέτικο Μαδρίτης<br>• 2015–2018: Μάρτσεστερ Γιουνάιτεντ<br>• 2018–2019: Τορίνο (Δανεικός)<br>• 2019–2020: Πάρμα<br>• 2020–2024: Ίντερ", 
                correct: "Ματέο Νταρμιάν", 
                synonyms: ["ματεο νταρμιαν", "νταρμιαν", "darmian", "mateo darmian"] 
            }
        ]
    
    },
    "CLUB COMBO": {

        1: [
            { 
                id: 501, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Ολυμπιακός + Γιουβέντους</b>", 
                correct: "Ντάρκο Κοβάσεβιτς", 
                synonyms: ["κοβασεβιτς", "kovacevic", "darko kovacevic", "νταρκο", "ολισε", "oliseh", "μαρεσκα", "maresca", "ενζο μαρεσκα"] 
            },
        
            { 
                id: 201, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Inter + Sevilla</b>", 
                correct: "Ζοφρέ Κοντογκμπιά", 
                synonyms: ["κοντογκμπια", "kondogbia", "geoffrey kondogbia"] 
            },
            { 
                id: 202, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Lille + Everton</b>", 
                correct: "Αντρέ Γκόμες", 
                synonyms: ["αντρε γκομες", "andre gomes", "gomes"] 
            },
            { 
                id: 502, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Wolfsburg + Torino</b>", 
                correct: "Ρικάρντο Ροντρίγκες", 
                synonyms: ["ρικαρντο ροντριγκες", "ροντριγκες", "ricardo rodriguez", "rodriguez", "ricardo"] 
            },
            { 
               id: 503, 
               text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Marseille + Real Betis</b>", 
               correct: "Σεντρίκ Μπακαμπού", 
               synonyms: ["σεδρικ μπακαμπου", "μπακαμπου", "cedric bakambu", "bakambu", "cedric"] 
            },
            { 
                id: 502, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Ρεάλ Μαδρίτης + Άρσεναλ</b>", 
                correct: "Μεσούτ Οζίλ", 
                synonyms: ["οζιλ", "ozil", "mesut ozil", "ανελκα", "anelka", "ρεγιες", "reyes", "θεμπάγιος", "ceballos", "οντεγκαρντ", "odegaard"] 
            },
            { 
                id: 503, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Ίντερ + Μπαρσελόνα</b>", 
                correct: "Σαμουέλ Ετό", 
                synonyms: ["ετο", "etoo", "samuel etoo", "ρονάλντο", "ronaldo", "ιμπραιμοβιτς", "ibrahimovic", "κουαρεσμα", "quaresma", "βινταλ", "vidal", "αλέξις σάντσες", "sanchez"] 
            },
            { 
                id: 504, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Παναθηναϊκός + Ίντερ</b>", 
                correct: "Γιώργος Καραγκούνης", 
                synonyms: ["καραγκουνης", "karagounis", "γιωργος καραγκουνης", "τυπαρας", "κονσεισαο", "conceicao", "λουκανκου", "sherrif toure"] 
            },
            { 
                id: 505, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Μπαρσελόνα + Λίβερπουλ</b>", 
                correct: "Λουίς Σουάρες", 
                synonyms: ["σουαρες", "suarez", "luis suarez", "μασκερανο", "mascherano", "κουτινιο", "coutinho", "λιτμανεν", "litmanen", "γαμπριελ ζεντεν", "zenden"] 
            },
            { 
                id: 506, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Μάντσεστερ Σίτι + Μίλαν</b>", 
                correct: "Μάριο Μπαλοτέλι", 
                synonyms: ["μπαλοτελι", "balotelli", "mario balotelli", "ρομπινιο", "robinho", "βιερα", "vieira", "κολάροφ", "kolarov", "ντε γιονγκ", "de jong"] 
            },
            { 
                id: 507, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>ΑΕΚ + Ρόμα</b>", 
                correct: "Κώστας Μανωλάς", 
                synonyms: ["μανωλας", "manolas", "κωστας μανωλας", "kostas manolas", "δλλας", "dellas", "τραϊανος δελλας", "λιβαγια", "livaja"] 
            },
            { 
                id: 508, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Άρσεναλ + Μπάγερν Μονάχου</b>", 
                correct: "Λούκας Ποντόλσκι", 
                synonyms: ["ποντολσκι", "podolski", "lucas podolski", "γκναμπρι", "gnabry", "σαντσες", "renato sanches", "λεμαν", "lehmann"] 
            },
            { 
                id: 509, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>ΠΑΟΚ + Άρσεναλ</b>", 
                correct: "Λούκας Πέρεθ", 
                synonyms: ["περεθ", "perez", "lucas perez", "λουκας περεθ", "τσουμπα ακπομ", "ακπομ", "akpom", "chuba akpom"] 
            },
            { 
                id: 510, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Μπαρσελόνα + Ατλέτικο Μαδρίτης</b>", 
                correct: "Αντουάν Γκριεζμάν", 
                synonyms: ["γκριεζμαν", "griezmann", "σουαρες", "suarez", "βίγια", "david villa", "ντεπάι", "depay", "αρντα τουραν", "turan"] 
            },
            { 
                id: 511, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Γιουβέντους + Τσέλσι</b>", 
                correct: "Γκονσάλο Ιγκουαΐν", 
                synonyms: ["ιγκουαιν", "higuain", "morata", "μορατα", "ανελκα", "anelka", "κουαδραδο", "cuadrado", "βιαλι", "vialli", "ζακαρια", "zakaria"] 
            },
            { 
                id: 512, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Άρης + Μάντσεστερ Σίτι</b>", 
                correct: "Γιώργος Σαμαράς", 
                synonyms: ["σαμαρας", "samaras", "γιωργος σαμαρας", "georgios samaras", "καστίγιο", "castillo", "νέρι καστίγιο", "neri castillo"] 
            },
            { 
                id: 513, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Ατλέτικο Μαδρίτης + Μάντσεστερ Γιουνάιτεντ</b>", 
                correct: "Νταβίντ Ντε Χέα", 
                synonyms: ["ντε χεα", "de gea", "david de gea", "φαλκαο", "falcao", "φορλαν", "forlan", "ρεγκιλον", "reguilon"] 
            },
            { 
                id: 514, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Λίβερπουλ + Μπάγερν Μονάχου</b>", 
                correct: "Σαντιό Μανέ", 
                synonyms: ["μανε", "mane", "sadio mane", "τιαγκο", "thiago", "σακίρι", "shaqiri", "αλόνσο", "alonso", "κουτίνιο", "coutinho", "χαμαν", "hamann"] 
            },
            { 
                id: 515, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Ολυμπιακός + Λίβερπουλ</b>", 
                correct: "Κώστας Τσιμίκας", 
                synonyms: ["τσιμικας", "tsimikas", "κωστας τσιμικας", "ριερα", "riera", "αλμπερτο ριερα", "alberto riera", "παγιέ", "panyiotis"] 
            },
            { 
                id: 516, 
                text: "Ποιος παίκτης έχει αγωνιστεί και στις 2 αυτές ομάδες;<br><b>Τσέλσι + Παρί Σεν Ζερμέν</b>", 
                correct: "Τιάγκο Σίλβα", 
                synonyms: ["τιαγκο σιλβα", "thiago silva", "σιλβα", "λουιζ", "david luiz", "νταβιντ λουιζ", "ανελκα", "anelka", "μπουφον", "buffon"] 
            }
        ]

    },

        "ΓΕΩΓΡΑΦΙΑ": {
        1: [
            { id: 601, text: "Σε ποια ευρωπαϊκή πρωτεύουσα βρίσκεται το περίφημο στάδιο 'Santiago Bernabeu';", correct: "Μαδρίτη", synonyms: ["μαδριτη", "madrid"] },
            { id: 602, text: "Σε ποια πόλη της Ουγγαρίας εδρεύει η ποδοσφαιρική ομάδα Φερεντσβάρος;", correct: "Βουδαπέστη", synonyms: ["βουδαπεστη", "budapest"] },
            { id: 603, text: "Σε ποια πόλη βρίσκεται το στάδιο της ομάδας Ζιρόνα, η οποία αγωνίστηκε στο Champions League 2024-25;", correct: "Ζιρόνα", synonyms: ["ζιρονα", "girona"] },
          { 
            id: 608, 
            text: "Ποια ομάδα έχει το προσωνύμιο 'Οι Σιδεράδες' (The Hammers);", 
            correct: "Γουέστ Χαμ", 
            synonyms: ["γουεστ χαμ", "west ham", "westham"] 
        },
            { id: 606, text: "Ονομάστε μία από τις δύο ομάδες της Κορσικής που έχουν αγωνιστεί στη Ligue 1.", correct: "Αζαξιό", synonyms: ["αζαξιο", "ajaccio", "μπαστια", "bastia"] },
            { 
            id: 501, 
            text: "Ποια χώρα θα φιλοξενήσει τον τελικό του Champions League το 2026;", 
            correct: "Ουγγαρία", 
            synonyms: ["ουγγαρια", "hungary", "magyarorszag"] 
        }
        ],
        2: [
            { id: 610, text: "Σε ποια πόλη της Αργεντινής γεννήθηκε ο Lionel Messi;", correct: "Ροζάριο", synonyms: ["ροζάριο", "rosario"] },
            { id: 611, text: "Σε ποια πόλη βρίσκεται το στάδιο Ένιο Ταρντίνι (Stadio Ennio Tardini);", correct: "Πάρμα", synonyms: ["παρμα", "parma"] },
            { id: 608, text: "Σε ποια πόλη διεξάγεται το ντέρμπι του ποταμού Hudson;", correct: "Νέα Υόρκη", synonyms: ["νεα υορκη", "new york"] },
            { id: 609, text: "Σε ποια πόλη της Βραζιλίας εδρεύει η ομάδα Internacional;", correct: "Porto Alegre", synonyms: ["πορτο αλεγκρε", "porto alegre"] },
           { 
            id: 605, 
            text: "Από ποια χώρα κατάγεται ο ποδοσφαιριστής του ΠΑΟΚ, Μαντί Καμαρά;", 
            correct: "Γουινέα", 
            synonyms: ["γουινεα", "guinea"] 
        },
            { id: 607, text: "Ποια είναι η βορειότερη ομάδα της Αγγλίας που έχει κατακτήσει την Premier League;", correct: "Μπλάκμπερν", synonyms: ["μπλακμπερν", "blackburn"] },
            { id: 604, text: "Σε ποια χώρα γεννήθηκε ο Ντέμης Νικολαΐδης;", correct: "Γερμανία", synonyms: ["γερμανια", "germany"] }
        ],
        3: [
            { 
            id: 602, 
            text: "Σε ποια πόλη της Ουγγαρίας εδρεύει η ποδοσφαιρική ομάδα Φερεντσβάρος;", 
            correct: "Βουδαπέστη", 
            synonyms: ["βουδαπεστη", "budapest"] 
        },
        { 
            id: 606, 
            text: "Σε ποια χώρα αγωνίζεται η Ζούλτε Βάρεγκεμ;", 
            correct: "Βέλγιο", 
            synonyms: ["βελγιο", "belgium"] 
        },
        { 
            id: 607, 
            text: "Σε ποια χώρα εδρεύει η ομάδα της Βαντούζ (Vaduz);", 
            correct: "Λίχτενσταϊν", 
            synonyms: ["λιχτενσταιν", "liechtenstein"] 
        },
        { id: 605, text: "Σε ποια χώρα εδρεύει η ομάδα Ρίζα Σπάρτακ (σύμφωνα με το κουίζ);", correct: "Ουγγαρία", synonyms: ["ουγγαρια", "hungary"] },
        { 
            id: 502, 
            text: "Ποιο ντέρμπι είναι γνωστό ως το «ντέρμπι της Κοιλάδας του Ρουρ» (Revierderby);", 
            correct: "Σάλκε - Ντόρτμουντ", 
            synonyms: [
                "σαλκε - ντορτμουντ", 
                "σαλκε ντορτμουντ", 
                "schalke - dortmund", 
                "schalke dortmund", 
                "ντορτμουντ - σαλκε", 
                "dortmund - schalke"
            ] 
        }
            
        ]
    },
    "LOGO": {
        1: [
            { id: 21, text: "Ποια αγγλική ομάδα έχει ένα κανόνι στο σήμα της;", correct: "Άρσεναλ", synonyms: ["αρσεναλ", "arsenal"] },
            { id: 22, text: "Ποια αγγλική ομάδα έχει έναν κόκκινο διάβολο στο σήμα της;", correct: "Μάντσεστερ Γιουναιτεντ", synonyms: ["μαντσεστερ γιουναιτεντ", "manchester united", "manchester", "μαντσεστερ"] }
        ],
        2: [
            { id: 23, text: "Ποια γερμανική ομάδα έχει ένα κριάρι στο σήμα της;", correct: "Κολωνία", synonyms: ["κολωνια", "koln", "cologne"] },
            { id: 24, text: "Ποια εθνική ομάδα έχει τρία λιοντάρια στο σήμα της;", correct: "Αγγλία", synonyms: ["αγγλια", "england"] }
        ]
    },
        "RETRO TRANSFER": {
        1: [
            { id: 701, text: "Ποιος παίκτης πήγε από την Ντόρτμουντ στην Άρσεναλ το καλοκαίρι του 2006;", correct: "Τόμας Ροσίτσκι", synonyms: ["ροσιτσκι", "rosicky", "tomas rosicky", "τομας ροσιτσκι"] },
            { id: 701, text: "Ποιος παίκτης πήγε από την Ντόρτμουντ στην Άρσεναλ το καλοκαίρι του 2006;", correct: "Τόμας Ροσίτσκι", synonyms: ["ροσιτσκι", "rosicky", "tomas rosicky", "τομας ροσιτσκι"] },
            { id: 702, text: "Ποιος παίκτης πήγε από την Μίλαν στη Γιουβέντους το καλοκαίρι του 2011;", correct: "Αντρέα Πίρλο", synonyms: ["πιρλο", "pirlo", "andrea pirlo", "αντρεα πιρλο"] },
            { id: 703, text: "Ποιος παίκτης πήγε από την Μπάγερν Μονάχου στη Μάντσεστερ Γιουνάιτεντ το καλοκαίρι του 2015;", correct: "Μπάστιαν Σβαϊνστάιγκερ", synonyms: ["σβαϊνσταϊγκερ", "schweinsteiger", "bastian schweinsteiger", "μπαστιαν σβαϊνσταϊγκερ"] },
            { id: 704, text: "Ποιος παίκτης πήγε από την Ατλέτικο Μαδρίτης στη Μονακό το καλοκαίρι του 2013;", correct: "Ραδαμέλ Φαλκάο", synonyms: ["φαλκαο", "falcao", "radamel falcao", "ραδαμελ φαλκαο"] },
            { id: 702, text: "Ποιος παίκτης πήγε από την Μίλαν στη Γιουβέντους το καλοκαίρι του 2011;", correct: "Αντρέα Πίρλο", synonyms: ["πιρλο", "pirlo", "andrea pirlo", "αντρεα πιρλο"] },
            { id: 703, text: "Ποιος παίκτης πήγε από την Μάντσεστερ Γιουνάιτεντ στη Ρεάλ Μαδρίτης το καλοκαίρι του 2003;", correct: "Ντέιβιντ Μπέκαμ", synonyms: ["μπεκαμ", "beckham", "david beckham", "ντειβιντ μπεκαμ"] },
            { id: 704, text: "Ποιος παίκτης πήγε από την Ίντερ στη Μπαρσελόνα το καλοκαίρι του 2009;", correct: "Ζλάταν Ιμπραΐμοβιτς", synonyms: ["ιμπραιμοβιτς", "ibrahimovic", "zlatan", "ζλαταν"] },
            { id: 705, text: "Ποιος παίκτης πήγε από την Άρσεναλ στη Μπαρσελόνα το καλοκαίρι του 2007;", correct: "Τιερί Ανρί", synonyms: ["ανρι", "henry", "thierry henry", "τιερι ανρι"] },
            { id: 706, text: "Ποιος παίκτης πήγε από την Λίβερπουλ στην Τσέλσι τον Ιανουάριο του 2011;", correct: "Φερνάντο Τόρες", synonyms: ["τορες", "torres", "fernando torres", "φερναντο τορες"] },
            { id: 707, text: "Ποιος παίκτης πήγε από την Τότεναμ στη Ρεάλ Μαδρίτης το καλοκαίρι του 2013;", correct: "Γκάρεθ Μπέιλ", synonyms: ["μπειλ", "bale", "gareth bale", "γκαρεθ μπειλ"] },
            { id: 708, text: "Ποιος παίκτης πήγε από την Ρεάλ Μαδρίτης στην Άρσεναλ το καλοκαίρι του 2013;", correct: "Μεσούτ Οζίλ", synonyms: ["οζιλ", "ozil", "mesut ozil", "μεσουτ οζιλ"] },
            { id: 709, text: "Ποιος παίκτης πήγε από την Μάντσεστερ Γιουνάιτεντ στην Άρσεναλ το καλοκαίρι του 2012;", correct: "Ρόμπιν φαν Πέρσι", synonyms: ["φαν περσι", "van persie", "robin van persie", "ρομπιν φαν περσι"] },
            { id: 710, text: "Ποιος παίκτης πήγε από την Γιουβέντους στη Μάντσεστερ Γιουνάιτεντ το καλοκαίρι του 2016;", correct: "Πολ Πογκμπά", synonyms: ["πογκμπα", "pogba", "paul pogba", "πολ πογκμπα"] },
            { id: 711, text: "Ποιος παίκτης πήγε από την Μάντσεστερ Σίτι στην Άρσεναλ το καλοκαίρι του 2017;", correct: "Γκαμπριέλ Ζεσούς", synonyms: ["ζεσους", "jesus", "gabriel jesus", "γκαμπριελ ζεσους"] },
            { id: 712, text: "Ποιος παίκτης πήγε από την Μπενφίκα στην Ρεάλ Μαδρίτης το καλοκαίρι του 2011;", correct: "Φάμπιο Κοεντράο", synonyms: ["κοεντραο", "coentrao", "fabio coentrao", "φαμπιο κοεντραο"] },
            { id: 713, text: "Ποιος παίκτης πήγε από την Άγιαξ στη Λίβερπουλ το καλοκαίρι του 2011;", correct: "Λουίς Σουάρες", synonyms: ["σουαρες", "suarez", "luis suarez", "λουις σουαρες"] },
            { id: 714, text: "Ποιος παίκτης πήγε από την Τσέλσι στην Άρσεναλ το καλοκαίρι του 2015;", correct: "Πετρ Τσεχ", synonyms: ["τσεχ", "cech", "petr cech", "πετρ τσεχ"] },
            { id: 715, text: "Ποιος παίκτης πήγε από την Μπαρσελόνα στην Ίντερ το καλοκαίρι του 2004;", correct: "Σάμουελ Ετό", synonyms: ["ετο", "etoo", "samuel etoo", "σαμουελ ετο"] },
            { id: 716, text: "Ποιος παίκτης πήγε από την Γιουβέντους στην Μπαρσελόνα το καλοκαίρι του 2004;", correct: "Τζιανλούκα Τζαμπρότα", synonyms: ["τζαμπροτα", "zambrotta", "gianluca zambrotta", "τζιανλουκα τζαμπροτα"] }
        ],

        2: [
            { id: 717, text: "Ποιος παίκτης πήγε από την Ρεάλ Μαδρίτης στην Τσέλσι το καλοκαίρι του 2003;", correct: "Κλοντ Μακελελέ", synonyms: ["μακελελε", "makelele", "claude makelele", "κλοντ μακελελε"] },
            { id: 718, text: "Ποιος παίκτης πήγε από την Μπαρσελόνα στην Ίντερ το καλοκαίρι του 2004;", correct: "Εντγκάρ Ντάβιντς", synonyms: ["νταβιντς", "davids", "edgar davids", "εντγκαρ νταβιντς"] },
            { id: 719, text: "Ποιος παίκτης πήγε από την Λίβερπουλ στην Ρεάλ Μαδρίτης το καλοκαίρι του 2009;", correct: "Τσάμπι Αλόνσο", synonyms: ["αλονσο", "alonso", "xabi alonso", "τσαμπι αλονσο"] },
            { id: 720, text: "Ποιος παίκτης πήγε από την Μίλαν στην Τσέλσι το καλοκαίρι του 2003;", correct: "Ερνάν Κρέσπο", synonyms: ["κρεσπο", "crespo", "hernan crespo", "ερναν κρεσπο"] },
            { id: 721, text: "Ποιος παίκτης πήγε από την Μάντσεστερ Γιουνάιτεντ στην Μίλαν το καλοκαίρι του 2007;", correct: "Έμερσον", synonyms: ["εμερσον", "emerson", "emerson ferreira"] },
            { id: 722, text: "Ποιος παίκτης πήγε από την Μπαρσελόνα στην Άρσεναλ το καλοκαίρι του 2011;", correct: "Σεσκ Φάμπρεγας", synonyms: ["φαμπρεγας", "fabregas", "cesc fabregas", "σεσκ φαμπρεγας"] },
            { id: 723, text: "Ποιος παίκτης πήγε από την Μάντσεστερ Σίτι στην Άρσεναλ το καλοκαίρι του 2014;", correct: "Μπακαρί Σανιά", synonyms: ["σανια", "sagna", "bacary sagna", "μπακαρι σανια"] },
            { id: 724, text: "Ποιος παίκτης πήγε από την Τσέλσι στην Άρσεναλ το καλοκαίρι του 2014;", correct: "Ντάνι Γουέλμπεκ", synonyms: ["γουελμπεκ", "welbeck", "danny welbeck", "ντανι γουελμπεκ"] },
            { id: 725, text: "Ποιος παίκτης πήγε από την Μπάγερν στην Μάντσεστερ Γιουνάιτεντ το καλοκαίρι του 2001;", correct: "Όουεν Χάργκριβς", synonyms: ["χαργκριβς", "hargreaves", "owen hargreaves", "οουεν χαργκριβς"] },
            { id: 726, text: "Ποιος παίκτης πήγε από την Άρσεναλ στη Μάντσεστερ Σίτι το καλοκαίρι του 2011;", correct: "Σαμίρ Νασρί", synonyms: ["νασρι", "nasri", "samir nasri", "σαμιρ νασρι"] },
            { id: 727, text: "Ποιος παίκτης πήγε από την Ρεάλ Μαδρίτης στην Γιουβέντους το καλοκαίρι του 2006;", correct: "Φάμπιο Καναβάρο", synonyms: ["καναβαρο", "cannavaro", "fabio cannavaro", "φαμπιο καναβαρο"] },
            { id: 728, text: "Ποιος παίκτης πήγε από την Λίβερπουλ στην Μάντσεστερ Σίτι το καλοκαίρι του 2010;", correct: "Τζέιμς Μίλνερ", synonyms: ["μιλνερ", "milner", "james milner", "τζεημς μιλνερ"] },
            { id: 729, text: "Ποιος παίκτης πήγε από την Άρσεναλ στην Τσέλσι το καλοκαίρι του 2014;", correct: "Σεσκ Φάμπρεγας", synonyms: ["φαμπρεγας", "fabregas", "cesc fabregas"] },
            { id: 730, text: "Ποιος παίκτης πήγε από την Μίλαν στην Ρεάλ Μαδρίτης το καλοκαίρι του 2007;", correct: "Ρονάλντο", synonyms: ["ροναλντο", "ronaldo", "r9"] },
            { id: 731, text: "Ποιος παίκτης πήγε από την Τσέλσι στην Ρεάλ Μαδρίτης το καλοκαίρι του 2019;", correct: "Εντέν Αζάρ", synonyms: ["αζαρ", "hazard", "eden hazard", "εντεν αζαρ"] },
            { id: 732, text: "Ποιος παίκτης πήγε από την Μάντσεστερ Γιουνάιτεντ στην Άρσεναλ το καλοκαίρι του 2001;", correct: "Μίκαελ Σιλβέστρ", synonyms: ["σιλβεστρ", "silvestre", "mikael silvestre", "μικαελ σιλβεστρ"] }
        ]
    },
    "ΠΑΝΩ ΚΑΤΩ": {
        1: [
            { id: 801, text: "Ποιος έχει περισσότερα γκολ στο Champions League;<br>Α) Καρίμ Μπενζεμά<br>Β) Ρόμπερτ Λεβαντόφσκι", correct: "Καρίμ Μπενζεμά", synonyms: ["μπενζεμα", "benzema", "α", "α)"] },
            { id: 802, text: "Ποιος έχει περισσότερες συμμετοχές στην Premier League;<br>Α) Φρανκ Λάμπαρντ<br>Β) Στίβεν Τζέραρντ", correct: "Φρανκ Λάμπαρντ", synonyms: ["λαμπαρντ", "lampard", "α", "α)"] },
            { id: 803, text: "Ποιος έχει περισσότερα γκολ στην καριέρα του (club);<br>Α) Ζλάταν Ιμπραΐμοβιτς<br>Β) Σαμουέλ Ετό", correct: "Ζλάταν Ιμπραΐμοβιτς", synonyms: ["ιμπραιμοβιτς", "ibrahimovic", "α", "α)"] },
            { id: 804, text: "Ποιος έχει περισσότερες συμμετοχές στη Serie A;<br>Α) Τζιανλουίτζι Μπουφόν<br>Β) Φραντσέσκο Τότι", correct: "Τζιανλουίτζι Μπουφόν", synonyms: ["μπουφον", "buffon", "α", "α)"] },
            { id: 805, text: "Ποιος έχει περισσότερα γκολ στην Εθνική Ομάδα;<br>Α) Νεϊμάρ<br>Β) Λουίς Σουάρες", correct: "Νεϊμάρ", synonyms: ["νειμαρ", "neymar", "α", "α)"] },
            { id: 806, text: "Ποιος έχει περισσότερες συμμετοχές στην Premier League;<br>Α) Γουέιν Ρούνεϊ<br>Β) Χάρι Κέιν", correct: "Γουέιν Ρούνεϊ", synonyms: ["ρουνεϊ", "rooney", "α", "α)"] },
            { id: 807, text: "Ποιος έχει περισσότερα γκολ στο Champions League;<br>Α) Ραούλ<br>Β) Τιερί Ανρί", correct: "Ραούλ", synonyms: ["ραουλ", "raul", "α", "α)"] },
            { id: 808, text: "Ποιος έχει περισσότερες συμμετοχές στην Εθνική Ισπανίας;<br>Α) Σέρχιο Ράμος<br>Β) Ίκερ Κασίγιας", correct: "Σέρχιο Ράμος", synonyms: ["ραμος", "ramos", "α", "α)"] },
            { id: 809, text: "Ποιος έχει περισσότερα γκολ στην Premier League;<br>Α) Σέρχιο Αγουέρο<br>Β) Ντιντιέ Ντρογκμπά", correct: "Σέρχιο Αγουέρο", synonyms: ["αγουερο", "aguero", "α", "α)"] },
            { id: 810, text: "Ποιος έχει περισσότερες συμμετοχές στη La Liga;<br>Α) Αντρές Ινιέστα<br>Β) Τσάβι", correct: "Τσάβι", synonyms: ["τσαβι", "xavi", "β", "β)"] },
            { id: 811, text: "Ποιος έχει περισσότερα γκολ στην καριέρα του (club);<br>Α) Αντρέι Σεβτσένκο<br>Β) Φίλιππο Ιντζάγκι", correct: "Αντρέι Σεβτσένκο", synonyms: ["σεβτσενκο", "shevchenko", "α", "α)"] },
            { id: 812, text: "Ποιος έχει περισσότερες συμμετοχές στην Εθνική Γαλλίας;<br>Α) Ούγκο Γιορίς<br>Β) Λιλιάν Τιράμ", correct: "Ούγκο Γιορίς", synonyms: ["γιορις", "lloris", "α", "α)"] },
            { id: 813, text: "Ποιος έχει περισσότερα γκολ στην Premier League;<br>Α) Ρόμπιν φαν Πέρσι<br>Β) Ντένις Μπέργκαμπ", correct: "Ρόμπιν φαν Πέρσι", synonyms: ["φαν περσι", "van persie", "α", "α)"] },
            { id: 814, text: "Ποιος έχει περισσότερες συμμετοχές στη Serie A;<br>Α) Πάολο Μαλντίνι<br>Β) Χαβιέρ Ζανέτι", correct: "Πάολο Μαλντίνι", synonyms: ["μαλντινι", "maldini", "α", "α)"] },
            { id: 815, text: "Ποιος έχει περισσότερα γκολ στο Champions League;<br>Α) Τόμας Μίλερ<br>Β) Ντιντιέ Ντρογκμπά", correct: "Τόμας Μίλερ", synonyms: ["μιλερ", "muller", "α", "α)"] },
            { id: 816, text: "Ποιος έχει περισσότερες συμμετοχές στην Εθνική Ολλανδίας;<br>Α) Γουέσλι Σνάιντερ<br>Β) Έντβιν φαν ντερ Σαρ", correct: "Γουέσλι Σνάιντερ", synonyms: ["σναιντερ", "sneijder", "α", "α)"] }
        ]
    },
}


// Κατάσταση Παιχνιδιού
let scoreA = 0;
let scoreB = 0;
let currentTurn = 'A';
let currentPoints = 0;
let currentActiveButtonId = null;
let currentQuestionId = null;
let currentQuestionObj = null;

// Μεταβλητές για το TOP 5
let top5FoundCount = 0;
let top5WrongCount = 0;
let top5Status = [];

function updateTurnDisplay() {
    const titleContainer = document.querySelector('.main-title h1');
    if (titleContainer) {
        titleContainer.innerHTML = `FOOTBALL QUIZ <br><span style="color: ${currentTurn === 'A' ? '#ef4444' : '#3b82f6'}; font-size: 24px; font-weight: bold;">ΣΕΙΡΑ: ΟΜΑΔΑ ${currentTurn}</span>`;
    }
}

function changeScore(team, val) {
    if (team === 'A') { scoreA = Math.max(0, scoreA + val); document.getElementById('scoreA').innerText = scoreA; }
    if (team === 'B') { scoreB = Math.max(0, scoreB + val); document.getElementById('scoreB').innerText = scoreB; }
}

function getPlayedQuestions() { return JSON.parse(localStorage.getItem('playedQuestions')) || []; }
function savePlayedQuestion(id) {
    let played = getPlayedQuestions();
    if (!played.includes(id)) { played.push(id); localStorage.setItem('playedQuestions', JSON.stringify(played)); }
}
function resetPlayedQuestions() { localStorage.removeItem('playedQuestions'); alert("Η μνήμη καθαρίστηκε!"); location.reload(); }

function initBoard() {
    const fixedCategories = ["TOP 5", "ΠΟΙΟΣ ΛΕΙΠΕΙ", "ΙΣΤΟΡΙΑ", "PLAYER ID", "CLUB COMBO"];
    const poolCategories = ["ΓΕΩΓΡΑΦΙΑ", "LOGO", "RETRO TRANSFER", "ΠΑΝΩ ΚΑΤΩ"];
    let shuffledPool = poolCategories.sort(() => 0.5 - Math.random());
    let selectedPool = shuffledPool.slice(0, 3);
    let finalCategories = [...fixedCategories, ...selectedPool];
    const board = document.getElementById('quizBoard');
    board.innerHTML = "";

    finalCategories.forEach(cat => {
        let col = document.createElement('div'); col.className = 'category-column';
        let header = document.createElement('div'); header.className = 'category-header'; header.innerText = cat; col.appendChild(header);

        if (cat === "TOP 5" || cat === "PLAYER ID" || cat === "ΠΟΙΟΣ ΛΕΙΠΕΙ") {
            col.appendChild(createButton(cat, 3, "3 Πόντοι (1)", `btn-${cat}-3-1`));
            col.appendChild(createButton(cat, 3, "3 Πόντοι (2)", `btn-${cat}-3-2`));
        } else if (cat === "CLUB COMBO") {
            col.appendChild(createButton(cat, 1, "1 Πόντος (1)", `btn-${cat}-1-1`));
            col.appendChild(createButton(cat, 1, "1 Πόντος (2)", `btn-${cat}-1-2`));
        } else if (cat === "ΙΣΤΟΡΙΑ" || cat === "ΓΕΩΓΡΑΦΙΑ") {
            col.appendChild(createButton(cat, 1, "1 Πόντος", `btn-${cat}-1`));
            col.appendChild(createButton(cat, 2, "2 Πόντοι", `btn-${cat}-2`));
            col.appendChild(createButton(cat, 3, "3 Πόντοι", `btn-${cat}-3`));
        } else if (cat === "LOGO" || cat === "RETRO TRANSFER") {
            col.appendChild(createButton(cat, 1, "1 Πόντος", `btn-${cat}-1`));
            col.appendChild(createButton(cat, 2, "2 Πόντοι", `btn-${cat}-2`));
        } else if (cat === "ΠΑΝΩ ΚΑΤΩ") {
            col.appendChild(createButton(cat, 1, "1 Πόντος (1)", `btn-${cat}-1-1`));
            col.appendChild(createButton(cat, 1, "1 Πόντος (2)", `btn-${cat}-1-2`));
        }
        board.appendChild(col);
    });
    updateTurnDisplay();
}

function createButton(category, points, text, id) {
    let btn = document.createElement('button'); btn.className = 'quiz-btn'; btn.id = id; btn.innerText = text;
    btn.onclick = () => openQuestion(category, points, id); return btn;
}

function openQuestion(category, points, btnId) {
    currentPoints = points; currentActiveButtonId = btnId;
    let played = getPlayedQuestions();
    let availableQuestions = questionsDatabase[category][points].filter(q => !played.includes(q.id));
    if (availableQuestions.length === 0) availableQuestions = questionsDatabase[category][points];
    
    currentQuestionObj = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestionId = currentQuestionObj.id;

    document.getElementById('modalContentBox').style.borderColor = "#f59e0b";
    document.getElementById('modalContentBox').style.background = "#1e293b";
    document.getElementById('questionArea').style.display = "block";
    document.getElementById('resultArea').style.display = "none";
    document.getElementById('userAnswerInput').value = "";

    document.getElementById('modalTitle').innerText = `ΕΡΩΤΗΣΗ ΓΙΑ ΤΗΝ ΟΜΑΔΑ ${currentTurn} (${points}π)`;
    document.getElementById('modalQuestionText').innerText = currentQuestionObj.text;
    
    let imgCont = document.getElementById('modalImageContainer'); imgCont.innerHTML = "";
    if (currentQuestionObj.image) {
        let img = document.createElement('img'); img.src = currentQuestionObj.image; imgCont.appendChild(img);
    }

    let top5Wrapper = document.getElementById('top5Wrapper');
    if (currentQuestionObj.isTop5) {
        top5Wrapper.style.display = "block";
        top5FoundCount = 0;
        top5WrongCount = 0;
        top5Status = [false, false, false, false, false];
        document.getElementById('top5Lives').innerHTML = "Λάθη: <span style='color:#22c55e;'>✔️ Καθαρό</span>";
        document.getElementById('stopTop5Btn').style.display = "none";
        renderTop5Rows();
    } else {
        top5Wrapper.style.display = "none";
    }

    document.getElementById('quizModal').style.display = 'flex';
    setTimeout(() => { document.getElementById('userAnswerInput').focus(); }, 100);
}

function renderTop5Rows() {
    let top5Box = document.getElementById('top5Container'); top5Box.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let item = document.createElement('div');
        item.className = "top5-item " + (top5Status[i] ? "revealed" : "hidden");
        item.innerText = top5Status[i] ? `${i+1}. ${currentQuestionObj.answers[i].display} ✔` : `${i+1}. ❓`;
        top5Box.appendChild(item);
    }
}

function removeAccents(str) { return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }

function checkTypedAnswer() {
    let userAns = document.getElementById('userAnswerInput').value.trim();
    if (userAns === "") return;
    let cleanUser = removeAccents(userAns.toLowerCase());

    // --- ΑΝ ΕΙΝΑΙ ΕΡΩΤΗΣΗ TOP 5 ---
    if (currentQuestionObj.isTop5) {
        let foundIndex = -1;
        for (let i = 0; i < 5; i++) {
            if (!top5Status[i]) {
                let match = currentQuestionObj.answers[i].synonyms.some(syn => removeAccents(syn.toLowerCase()) === cleanUser);
                if (match) { foundIndex = i; break; }
            }
        }

        if (foundIndex !== -1) {
            top5Status[foundIndex] = true;
            top5FoundCount++;
            renderTop5Rows();
            document.getElementById('userAnswerInput').value = "";

            if (top5FoundCount === 4) {
                document.getElementById('stopTop5Btn').style.display = "inline-block";
            }
            if (top5FoundCount === 5) {
                endQuestion(true, currentPoints, "⚽ ΜΠΡΑΒΟ! Βρήκατε και τις 5 απαντήσεις και παίρνετε 3 πόντους!");
            }
        } else {
            top5WrongCount++;
            document.getElementById('userAnswerInput').value = "";
            
            if (top5WrongCount === 1) {
                document.getElementById('top5Lives').innerHTML = "Λάθη: <span style='color:#ef4444; font-weight:bold;'>❌ 1ο Λάθος! (Έχετε άλλη 1 ευκαιρία)</span>";
                let sound = document.getElementById('wrongSound'); sound.currentTime = 0; sound.play();
            } else {
                let missingText = "<br><br>Οι απαντήσεις ήταν:<br>";
                currentQuestionObj.answers.forEach((ans, idx) => { missingText += `${idx+1}. <b>${ans.display}</b><br>`; });
                endQuestion(false, 0, `❌ 2ο ΛΑΘΟΣ! Κάηκατε. ${missingText}`);
            }
        }
    } 
    // --- ΚΑΝΟΝΙΚΗ ΕΡΩΤΗΣΗ ---
    else {
        let cleanCorrect = removeAccents(currentQuestionObj.correct.toLowerCase());
        let currentSynonyms = currentQuestionObj.synonyms || [];
        let isCorrect = (cleanUser === cleanCorrect) || currentSynonyms.some(syn => removeAccents(syn.toLowerCase()) === cleanUser);
        
        if (isCorrect) {
            endQuestion(true, currentPoints, `Σωστή απάντηση: ${currentQuestionObj.correct}`);
        } else {
            endQuestion(false, 0, `Εσείς γράψατε: <b style="color:#ef4444;">${userAns}</b> <br><br> Η σωστή απάντηση ήταν: <b style="color:#22c55e; font-size:24px;">${currentQuestionObj.correct}</b>`);
        }
    }
}

function stopWithOnePoint() {
    let missingText = "<br><br>Η 5η απάντηση που έλειπε ήταν:<br>";
    currentQuestionObj.answers.forEach((ans, idx) => {
        if (!top5Status[idx]) missingText += `${idx+1}. <b>${ans.display}</b>`;
    });
    endQuestion(true, 1, `🛑 Επιλέξατε να σταματήσετε! Παίρνετε **1 Πόντο**. ${missingText}`);
}

function endQuestion(isCorrect, pointsAwarded, infoText) {
    savePlayedQuestion(currentQuestionId);
    if (currentActiveButtonId) document.getElementById(currentActiveButtonId).disabled = true;

    document.getElementById('questionArea').style.display = "none";
    document.getElementById('resultArea').style.display = "block";
    let modalBox = document.getElementById('modalContentBox');

    // Απομονώνουμε τα στοιχεία των ήχων
    let goalSound = document.getElementById('goalSound');
    let wrongSound = document.getElementById('wrongSound');

    // Πριν παίξει οτιδήποτε, σταματάμε και μηδενίζουμε ΚΑΙ τους δύο ήχους
    goalSound.pause(); goalSound.currentTime = 0;
    wrongSound.pause(); wrongSound.currentTime = 0;

    if (isCorrect) {
        changeScore(currentTurn, pointsAwarded);
        goalSound.play(); // Παίζει το Goal
        
        // --- ΑΥΤΟΜΑΤΟ ΣΤΑΜΑΤΗΜΑ ΓΙΑ ΤΟ ΓΚΟΛ ---
        // Μετά από 3000ms (3 δευτερόλεπτα), ο ήχος του γκολ θα σταματήσει μόνος του!
        setTimeout(() => {
            goalSound.pause();
            goalSound.currentTime = 0;
        }, 3000); 
        
        modalBox.style.borderColor = "#22c55e";
        document.getElementById('resultStatusText').innerText = "⚽ ΤΕΛΟΣ ΕΡΩΤΗΣΗΣ";
        document.getElementById('resultStatusText').style.color = "#22c55e";
    } else {
        wrongSound.play(); // Παίζει το Wrong (αυτό σταματάει έτσι κι αλλιώς γρήγορα)
        modalBox.style.borderColor = "#ef4444";
        document.getElementById('resultStatusText').innerText = "❌ ΧΑΣΑΤΕ!";
        document.getElementById('resultStatusText').style.color = "#ef4444";
    }
    document.getElementById('resultInfoText').innerHTML = infoText;
}


function closeModalAndNext() {
    document.getElementById('goalSound').pause(); document.getElementById('wrongSound').pause();
    document.getElementById('quizModal').style.display = 'none';
    currentTurn = (currentTurn === 'A') ? 'B' : 'A';
    updateTurnDisplay();
}

window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && document.getElementById('quizModal').style.display === 'flex') {
        if (document.getElementById('questionArea').style.display !== "none") {
            checkTypedAnswer();
        } else {
            closeModalAndNext();
        }
    }
});

window.onload = initBoard;