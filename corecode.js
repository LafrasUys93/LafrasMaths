const body = document.body;
var lang = "English"

let files = {   "Afrikaans" : {
                            "Graad8" : {
                                        "Opsommings" : ["Gr 8 - Kwartaal 1&2 Wiskunde.pdf",
                                                        "Gr 8 Algebra (1).pdf",
                                                        "Gr 8 Algebra Bundle Kw 3 (1).pdf",
                                                        "Gr 8 Breuke Fractions (1) 8.1.5.pdf",
                                                        "Gr 8 Breuke Fractions (2) 8.1.6 (1).pdf",
                                                        "Gr 8 Breuke Fractions (2) 8.1.6 (1).pdf",
                                                        "Gr 8 Breuke Fractions (3) 8.1.7.pdf",
                                                        "Gr 8 Breuke Fractions (4) 8.1.8.pdf",
                                                        "Gr 8 Breuke Fractions (5) 8.1.9.pdf",
                                                        "Gr 8 Eksponente exponents (1) 8.2.1.pdf",
                                                        "Gr 8 Eksponente exponents (2) 8.2.2.pdf",
                                                        "Gr 8 Eksponente exponents (3) 8.2.3.pdf",
                                                        "Gr 8 Eksponente Exponents (4) 8.2.4.pdf",
                                                        "Gr 8 Eksponente Exponents (5) 8.2.5.pdf",
                                                        "Gr 8 Finansies Finance (1) 8.1.3 (1).pdf",
                                                        "Gr 8 Finansies Finance (2) 8.1.4.pdf",
                                                        "Gr 8 Getalpatrone Nr patterns (1) 8.2.6.pdf",
                                                        "Gr 8 Koers Rate 8.1.3b.pdf",
                                                        "Gr 8 Meetkunde 1 2024-07-19 12_58_23 (2).pdf",
                                                        "Gr 8 Meetkunde 2 Copy (1).pdf",
                                                        "Gr 8 Omtr Opp Per Area (2)8.3.8 (1).pdf",
                                                        "Gr 8 Telgetalle Whole nr (2) 8.1.2.pdf",
                                                        "Gr 8 Telgetalle Whole nrs (2) 8.1.2.pdf",
                                                        "Gr 8 Verhoudings ratios 8.1.3.pdf",
                                                        "Gr 8.1.1 Telgetalle Whole numbers (1) (1).pdf",
                                                        "Gr 8Algebra (2) 8.3.2.pdf",
                                                        "Note 14 Aug 2023.pdf"],
                                        "Werkkaarte" : ["Gr 8 - Kwartaal 1&2 Wiskunde.pdf",
                                                        "Gr 8 - Kwartaal 3 - Wiskunde.pdf",
                                                        "Gr 8 - Kwartaal 4 - Wiskunde hersiening.pdf"]
                                                    }
                                                },
                "English" : {
                            "Grade8" : {
                                        "Summaries" : [ "Gr 8 Algebra (1).pdf",
                                                        "Gr 8 Algebra Bundle Kw 3 (1).pdf",
                                                        "Gr 8 Breuke Fractions (1) 8.1.5.pdf",
                                                        "Gr 8 Breuke Fractions (2) 8.1.6 (1).pdf",
                                                        "Gr 8 Breuke Fractions (2) 8.1.6 (1).pdf",
                                                        "Gr 8 Breuke Fractions (3) 8.1.7.pdf",
                                                        "Gr 8 Breuke Fractions (4) 8.1.8.pdf",
                                                        "Gr 8 Breuke Fractions (5) 8.1.9.pdf",
                                                        "Gr 8 Eksponente exponents (1) 8.2.1.pdf",
                                                        "Gr 8 Eksponente exponents (2) 8.2.2.pdf",
                                                        "Gr 8 Eksponente exponents (3) 8.2.3.pdf",
                                                        "Gr 8 Eksponente Exponents (4) 8.2.4.pdf",
                                                        "Gr 8 Eksponente Exponents (5) 8.2.5.pdf",
                                                        "Gr 8 Finansies Finance (1) 8.1.3 (1).pdf",
                                                        "Gr 8 Finansies Finance (2) 8.1.4.pdf",
                                                        "Gr 8 Getalpatrone Nr patterns (1) 8.2.6.pdf",
                                                        "Gr 8 Koers Rate 8.1.3b.pdf",
                                                        "Gr 8 Meetkunde 1 2024-07-19 12_58_23 (2).pdf",
                                                        "Gr 8 Meetkunde 2 Copy (1).pdf",
                                                        "Gr 8 Omtr Opp Per Area (2)8.3.8 (1).pdf",
                                                        "Gr 8 Telgetalle Whole nr (2) 8.1.2.pdf",
                                                        "Gr 8 Telgetalle Whole nrs (2) 8.1.2.pdf",
                                                        "Gr 8 Verhoudings ratios 8.1.3.pdf",
                                                        "Gr 8.1.1 Telgetalle Whole numbers (1) (1).pdf",
                                                        "Gr 8Algebra (2) 8.3.2.pdf",
                                                        "Note 14 Aug 2023.pdf"],
                                        "Worksheets" : ["Gr 8 - Kwartaal 4 - Wiskunde hersiening.pdf",
                                                        "Grade 8 - Mathmatics.pdf"
                                        ]
                                            }
                                }
                };

function header_div(){
    const sitenameheader_div = document.createElement("div");
    sitenameheader_div.style = ""
    sitenameheader_div.id = "siteNameHeaderDivID";
    body.appendChild(sitenameheader_div)

    const sitenameheader_title = document.createElement("h1");
    sitenameheader_title.id = "siteNameHeaderTitleID";
    sitenameheader_title.textContent = "Mr Uys Maths";
    const line = document.createElement("hr")
    sitenameheader_div.appendChild(sitenameheader_title);
    sitenameheader_div.appendChild(line)
    
}

///////////////
// Main Page //
///////////////

function language_div(){
    const language_div = document.createElement("div");
    language_div.id = "languageDivID";
    body.appendChild(language_div);

    const language_form = document.createElement("form");
    language_form.id = "languageFormID";
    language_div.appendChild(language_form);

    const english_label = document.createElement("label");
    const  english_radio = document.createElement("input");
    english_radio.type = "radio";
    english_radio.name = "language";
    english_radio.value = "English";
    english_radio.checked = true;
    english_radio.onclick = function() { chooseLanguage('English')};
    english_label.appendChild(english_radio);
    english_label.appendChild(document.createTextNode("English"));

    const afrikaans_label = document.createElement("label");
    const  afrikaans_radio = document.createElement("input");
    afrikaans_radio.type = "radio";
    afrikaans_radio.name = "language";
    afrikaans_radio.value = "Afrikaans";
    afrikaans_radio.checked = false;
    afrikaans_radio.onclick = function() { chooseLanguage('Afrikaans')};
    afrikaans_label.appendChild(afrikaans_radio)
    afrikaans_label.appendChild(document.createTextNode("Afrikaans"))

    language_form.appendChild(english_label);
    language_form.appendChild(afrikaans_label);

    //const br = document.createElement("br");
    const line = document.createElement("hr")
    //language_div.appendChild(br)
    language_div.appendChild(line)
}

function chooseLanguage(language){
    const titletext = document.getElementById("siteNameHeaderTitleID");
    const mainPageEnglish = document.getElementById("mainEnglishDivID");
    const mainPageAfrikaans = document.getElementById("mainAfrikaansDivID");
    const radios =document.querySelectorAll('input[name="language"]');
    radios.forEach(radio => {
        if (radio.value !== language) {
            radio.checked = false;
        }
    });
    if (language == "Afrikaans"){
        // Title
        titletext.textContent = "Mnr Uys Wiskunde"

        // Main Page Visibility
        mainPageAfrikaans.style = "display: block"
        mainPageEnglish.style = "display: none"

    }
    else if (language == "English"){
        // Title
        titletext.textContent = "Mr Uys Maths"

        // Main Page visibility
        mainPageAfrikaans.style = "display: none"
        mainPageEnglish.style = "display: block"
    };

}

function main_page_english_div(){
    const main_div = document.createElement("div");
    main_div.id = "mainEnglishDivID";
    main_div.style = "display: block;";
    body.appendChild(main_div);

    const gr8_link = document.createElement("button");
    gr8_link.id = "grade8LinkID";
    gr8_link.textContent ="Grade 8";
    gr8_link.onclick = function(){
        const gr8_page = document.getElementById("grade8DivID");
        const language = document.getElementById("languageDivID");
        gr8_page.style = "display: block;";
        main_div.style = "display: none;";
        language.style = "display: none;";
    }
    main_div.appendChild(gr8_link);

    const br1 = document.createElement("br")
    main_div.appendChild(br1)

    const gr10_link = document.createElement("button");
    gr10_link.id = "grade10LinkID";
    gr10_link.textContent ="Grade 10";
    gr10_link.onclick = function(){
        const gr10_page = document.getElementById("grade10DivID");
        const language = document.getElementById("languageDivID");
        gr10_page.style = "display: block;";
        main_div.style = "display: none;";
        language.style = "display: none;"
    }
    main_div.appendChild(gr10_link);
}

function main_page_afrikaans_div(){
    const main_div = document.createElement("div");
    main_div.id = "mainAfrikaansDivID";
    main_div.style = "display: none;";
    body.appendChild(main_div);

    const gr8_link = document.createElement("button");
    gr8_link.id = "graad8LinkID";
    gr8_link.textContent ="Graad 8";
    gr8_link.onclick = function(){
        const gr8_page = document.getElementById("graad8DivID");
        const language = document.getElementById("languageDivID");
        gr8_page.style = "display: block;";
        main_div.style = "display: none;";
        language.style = "display: none;"
    }
    main_div.appendChild(gr8_link);

    const br1 = document.createElement("br")
    main_div.appendChild(br1)

    const gr10_link = document.createElement("button");
    gr10_link.id = "graad10LinkID";
    gr10_link.textContent ="Graad 10";
    gr10_link.onclick = function(){
        const gr10_page = document.getElementById("graad10DivID");
        const language = document.getElementById("languageDivID");
        gr10_page.style = "display: block;";
        main_div.style = "display: none;";
        language.style = "display: none;"
    }
    main_div.appendChild(gr10_link);
}

/////////////
// English //
/////////////

function grade_8_div(){
    const mainpage = document.getElementById("mainEnglishDivID")
    const language = document.getElementById("languageDivID")
    const grade_8_div = document.createElement("div");
    grade_8_div.id = "grade8DivID";
    grade_8_div.style = "display: none";

    // Lesson Plans
    const lesson_plans = document.createElement("button");
    lesson_plans.id = "grade8LessonPlansID";
    lesson_plans.textContent = "Lesson Plans";
    grade_8_div.appendChild(lesson_plans);

    const br1 = document.createElement("br")
    grade_8_div.appendChild(br1)

    // Worksheets
    const worksheets = document.createElement("button");
    worksheets.id = "grade8WorksheetsID";
    worksheets.textContent = "Worksheets";
    worksheets.onclick = function() {
        grade_8_div.style = "display: none";
        document.getElementById("grade8WorksheetsDivID").style = "display: block";
    }
    grade_8_div.appendChild(worksheets);

    const br2 = document.createElement("br")
    grade_8_div.appendChild(br2);

    // Summaries
    const summaries = document.createElement("button");
    summaries.id = "grade8SummariesID";
    summaries.textContent = "Summaries";
    summaries.onclick = function(){
        grade_8_div.style = "display: none";
        document.getElementById("grade8SummariesDivID").style = "display: block"
    }
    grade_8_div.append(summaries);

    const br3 = document.createElement("br")
    grade_8_div.appendChild(br3);

    // Test Papers
    const test_papers = document.createElement("button");
    test_papers.id = "grade8TestPapersID";
    test_papers.textContent = "Test Papers";
    grade_8_div.appendChild(test_papers);

    const br4 = document.createElement("br");
    grade_8_div.appendChild(br4);

    // Videos
    const videos = document.createElement("button");
    videos.id = "grade8Videos";
    videos.textContent = "Videos"
    grade_8_div.appendChild(videos)

    const br5 = document.createElement("br");
    grade_8_div.appendChild(br5);
    const br6 = document.createElement("br");
    grade_8_div.appendChild(br6);

    // Back Button
    const back = document.createElement("button");
    back.id = "grade8BackID";
    back.textContent = "Back";
    back.onclick = function(){
        grade_8_div.style = "display: none";
        language.style = "display: block";
        mainpage.style = "display: block";
    };
    grade_8_div.appendChild(back)

    body.appendChild(grade_8_div)
}

// Grade 8 Summaries
function grade_8_summaries_div(){
    const div = document.createElement("div")
    div.id = "grade8SummariesDivID"
    div.style = "display: none"
    for (let i = 0; i < files["English"]["Grade8"]["Summaries"].length; i++){
        if (i > 0){
            const br = document.createElement("br")
            div.appendChild(br)
        }
        const a = document.createElement("a")
        a.textContent = files["English"]["Grade8"]["Summaries"][i]
        a.href = "English/Grade8/Summaries/" + files["English"]["Grade8"]["Summaries"][i]
        div.appendChild(a)
    }
    const br = document.createElement("br");
    div.appendChild(br)
    const br2 = document.createElement("br");
    div.appendChild(br2)

    const back = document.createElement("button")
    back.textContent = "Back"
    back.onclick = function() {
        div.style = "display: none"
        document.getElementById("grade8DivID").style = "display: block"
    }
    div.appendChild(back)
    body.appendChild(div)
}

// Grade 8 Worksheets
function grade_8_worksheets_div(){
    const div = document.createElement("div")
    div.id = "grade8WorksheetsDivID"
    div.style = "display: none"
    for (let i = 0; i < files["English"]["Grade8"]["Worksheets"].length; i++){
        if (i > 0){
            const br = document.createElement("br")
            div.appendChild(br)
        }
        const a = document.createElement("a")
        a.textContent = files["English"]["Grade8"]["Worksheets"][i]
        a.href = "English/Grade8/Worksheets/" + files["English"]["Grade8"]["Worksheets"][i]
        div.appendChild(a)
    }
    const br = document.createElement("br");
    div.appendChild(br)
    const br2 = document.createElement("br");
    div.appendChild(br2)

    const back = document.createElement("button")
    back.textContent = "Back"
    back.onclick = function() {
        div.style = "display: none"
        document.getElementById("grade8DivID").style = "display: block"
    }
    div.appendChild(back)
    body.appendChild(div)
}

function grade_10_div(){
    const mainpage = document.getElementById("mainEnglishDivID")
    const language = document.getElementById("languageDivID")
    const grade_10_div = document.createElement("div");
    grade_10_div.id = "grade10DivID";
    grade_10_div.style = "display: none";

    // Lesson Plans
    const lesson_plans = document.createElement("button");
    lesson_plans.id = "grade10LessonPlansID";
    lesson_plans.textContent = "Lesson Plans";
    grade_10_div.appendChild(lesson_plans);

    const br1 = document.createElement("br")
    grade_10_div.appendChild(br1)

    // Worksheets
    const worksheets = document.createElement("button");
    worksheets.id = "grade8WorksheetsID";
    worksheets.textContent = "Worksheets";
    grade_10_div.appendChild(worksheets);

    const br2 = document.createElement("br")
    grade_10_div.appendChild(br2);

    // Summaries
    const summaries = document.createElement("button");
    summaries.id = "grade10SummariesID";
    summaries.textContent = "Summaries";
    grade_10_div.append(summaries);

    const br3 = document.createElement("br")
    grade_10_div.appendChild(br3);

    // Test Papers
    const test_papers = document.createElement("button");
    test_papers.id = "grade10TestPapersID";
    test_papers.textContent = "Test Papers";
    grade_10_div.appendChild(test_papers);

    const br4 = document.createElement("br");
    grade_10_div.appendChild(br4);
    
    // Videos
    const videos = document.createElement("button");
    videos.id = "grade10Videos";
    videos.textContent = "Videos"
    grade_10_div.appendChild(videos)

    const br5 = document.createElement("br");
    grade_10_div.appendChild(br5);
    const br6 = document.createElement("br");
    grade_10_div.appendChild(br6);

    // Back Button
    const back = document.createElement("button");
    back.id = "grade10BackID";
    back.textContent = "Back";
    back.onclick = function(){
        grade_10_div.style = "display: none";
        language.style = "display: block";
        mainpage.style = "display: block";
    };
    grade_10_div.appendChild(back)

    body.appendChild(grade_10_div)
}



///////////////
// Afrikaans //
///////////////

function graad_8_div(){
    const mainpage = document.getElementById("mainAfrikaansDivID")
    const language = document.getElementById("languageDivID")
    const graad_8_div = document.createElement("div");
    graad_8_div.id = "graad8DivID";
    graad_8_div.style = "display: none";

    // Les Planne
    const lesson_plans = document.createElement("button");
    lesson_plans.id = "graad8LesPlanneID";
    lesson_plans.textContent = "Les Planne";
    graad_8_div.appendChild(lesson_plans);

    const br1 = document.createElement("br")
    graad_8_div.appendChild(br1)

    // Werkkaarte
    const werkkaarte = document.createElement("button");
    werkkaarte.id = "werkKaarteID";
    werkkaarte.textContent = "Werkkaarte";
    werkkaarte.onclick = function() {
        graad_8_div.style = "display: none";
        document.getElementById("graad8WerkkaarteDivID").style = "display: block";
    }
    graad_8_div.appendChild(werkkaarte);

    const br2 = document.createElement("br")
    graad_8_div.appendChild(br2);

    // Opsommings
    const summaries = document.createElement("button");
    summaries.id = "graad8OpsommingsID";
    summaries.textContent = "Opsommings";
    summaries.onclick = function(){
        graad_8_div.style = "display: none";
        document.getElementById("graad8OpsommingsDivID").style = "display: block";
    }
    graad_8_div.append(summaries);

    const br3 = document.createElement("br")
    graad_8_div.appendChild(br3);

    // Toetse
    const test_papers = document.createElement("button");
    test_papers.id = "graad8ToetseID";
    test_papers.textContent = "Toetse";
    graad_8_div.appendChild(test_papers);

    const br4 = document.createElement("br");
    graad_8_div.appendChild(br4);
    
    // Videos
    const videos = document.createElement("button");
    videos.id = "graad8Videos";
    videos.textContent = "Videos"
    graad_8_div.appendChild(videos)

    const br5 = document.createElement("br");
    graad_8_div.appendChild(br5);
    const br6 = document.createElement("br");
    graad_8_div.appendChild(br6);

    // Terug Button
    const back = document.createElement("button");
    back.id = "graad8TerugID";
    back.textContent = "Terug";
    back.onclick = function(){
        graad_8_div.style = "display: none";
        language.style = "display: block";
        mainpage.style = "display: block";
    };
    graad_8_div.appendChild(back)

    body.appendChild(graad_8_div)
}

// Graad 8 Opsommings
function graad_8_opsommings_div(){
    const div = document.createElement("div")
    div.id = "graad8OpsommingsDivID"
    div.style = "display: none"
    for (let i = 0; i < files["Afrikaans"]["Graad8"]["Opsommings"].length; i++){
        if (i > 0){
            const br = document.createElement("br")
            div.appendChild(br)
        }
        const a = document.createElement("a")
        a.textContent = files["Afrikaans"]["Graad8"]["Opsommings"][i]
        a.href = "Afrikaans/Graad8/Opsommings/" + files["Afrikaans"]["Graad8"]["Opsommings"][i]
        div.appendChild(a)
    }
    const br = document.createElement("br");
    div.appendChild(br)
    const br2 = document.createElement("br");
    div.appendChild(br2)

    const back = document.createElement("button")
    back.textContent = "Terug"
    back.onclick = function() {
        div.style = "display: none"
        document.getElementById("graad8DivID").style = "display: block"
    }
    div.appendChild(back)
    body.appendChild(div)
}

// Graad 8 Werkkaarte
function graad_8_werkkaarte_div(){
    const div = document.createElement("div")
    div.id = "graad8WerkkaarteDivID"
    div.style = "display: none"
    for (let i = 0; i < files["Afrikaans"]["Graad8"]["Werkkaarte"].length; i++){
        if (i > 0){
            const br = document.createElement("br")
            div.appendChild(br)
        }
        const a = document.createElement("a")
        a.textContent = files["Afrikaans"]["Graad8"]["Werkkaarte"][i]
        a.href = "Afrikaans/Graad8/Werkkaarte/" + files["Afrikaans"]["Graad8"]["Werkkaarte"][i]
        div.appendChild(a)
    }
    const br = document.createElement("br");
    div.appendChild(br)
    const br2 = document.createElement("br");
    div.appendChild(br2)

    const back = document.createElement("button")
    back.textContent = "Terug"
    back.onclick = function() {
        div.style = "display: none"
        document.getElementById("graad8DivID").style = "display: block"
    }
    div.appendChild(back)
    body.appendChild(div)
}

function graad_10_div(){
    const mainpage = document.getElementById("mainEnglishDivID")
    const language = document.getElementById("languageDivID")
    const graad_10_div = document.createElement("div");
    graad_10_div.id = "graad10DivID";
    graad_10_div.style = "display: none";

    // Les Planne
    const lesson_plans = document.createElement("button");
    lesson_plans.id = "graad10LessonPlansID";
    lesson_plans.textContent = "Les Planne";
    graad_10_div.appendChild(lesson_plans);

    const br1 = document.createElement("br")
    graad_10_div.appendChild(br1)

    // Werkkaarte
    const worksheets = document.createElement("button");
    worksheets.id = "graad8WorksheetsID";
    worksheets.textContent = "Werkkaarte";
    graad_10_div.appendChild(worksheets);

    const br2 = document.createElement("br")
    graad_10_div.appendChild(br2);

    // Opsommings
    const summaries = document.createElement("button");
    summaries.id = "graad10SummariesID";
    summaries.textContent = "Opsommings";
    graad_10_div.append(summaries);

    const br3 = document.createElement("br")
    graad_10_div.appendChild(br3);

    // Toetse
    const test_papers = document.createElement("button");
    test_papers.id = "graad10TestPapersID";
    test_papers.textContent = "Toetse";
    graad_10_div.appendChild(test_papers);

    const br4 = document.createElement("br");
    graad_10_div.appendChild(br4);
    
    // Videos
    const videos = document.createElement("button");
    videos.id = "graad10Videos";
    videos.textContent = "Videos"
    graad_10_div.appendChild(videos)

    const br5 = document.createElement("br");
    graad_10_div.appendChild(br5);
    const br6 = document.createElement("br");
    graad_10_div.appendChild(br6);

    // Terug Button
    const back = document.createElement("button");
    back.id = "graad10BackID";
    back.textContent = "Terug";
    back.onclick = function(){
        graad_10_div.style = "display: none";
        language.style = "display: block";
        mainpage.style = "display: block";
    };
    graad_10_div.appendChild(back)

    body.appendChild(graad_10_div)
}

function main(){
    header_div();
    language_div();
    main_page_english_div();
    main_page_afrikaans_div();

    grade_8_div();
    grade_8_summaries_div();
    grade_8_worksheets_div();

    graad_8_div();
    graad_8_opsommings_div();
    graad_8_werkkaarte_div();

    grade_10_div();

    graad_10_div();
}

main();
