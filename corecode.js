const body = document.body;
var lang = "English"

function header_div(){
    const sitenameheader_div = document.createElement("div");
    sitenameheader_div.id = "siteNameHeaderDivID";
    body.appendChild(sitenameheader_div)

    const sitenameheader_title = document.createElement("h1");
    sitenameheader_title.id = "siteNameHeaderTitleID";
    sitenameheader_title.textContent = "Lafras Maths";
    sitenameheader_div.appendChild(sitenameheader_title);
    
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

    const br = document.createElement("br");
    language_div.appendChild(br)
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

    const gr8_link = document.createElement("a");
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

    const gr10_link = document.createElement("a");
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

    const gr8_link = document.createElement("a");
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

    const gr10_link = document.createElement("a");
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
    const lesson_plans = document.createElement("a");
    lesson_plans.id = "grade8LessonPlansID";
    lesson_plans.textContent = "Lesson Plans";
    grade_8_div.appendChild(lesson_plans);

    const br1 = document.createElement("br")
    grade_8_div.appendChild(br1)

    // Worksheets
    const worksheets = document.createElement("a");
    worksheets.id = "grade8WorksheetsID";
    worksheets.textContent = "Worksheets";
    grade_8_div.appendChild(worksheets);

    const br2 = document.createElement("br")
    grade_8_div.appendChild(br2);

    // Summaries
    const summaries = document.createElement("a");
    summaries.id = "grade8SummariesID";
    summaries.textContent = "Summaries";
    grade_8_div.append(summaries);

    const br3 = document.createElement("br")
    grade_8_div.appendChild(br3);

    // Test Papers
    const test_papers = document.createElement("a");
    test_papers.id = "grade8TestPapersID";
    test_papers.textContent = "Test Papers";
    grade_8_div.appendChild(test_papers);

    const br4 = document.createElement("br");
    grade_8_div.appendChild(br4);

    // Videos
    const videos = document.createElement("a");
    videos.id = "grade8Videos";
    videos.textContent = "Videos"
    grade_8_div.appendChild(videos)

    const br5 = document.createElement("br");
    grade_8_div.appendChild(br5);
    const br6 = document.createElement("br");
    grade_8_div.appendChild(br6);

    // Back Button
    const back = document.createElement("a");
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

function grade_10_div(){
    const mainpage = document.getElementById("mainEnglishDivID")
    const language = document.getElementById("languageDivID")
    const grade_10_div = document.createElement("div");
    grade_10_div.id = "grade10DivID";
    grade_10_div.style = "display: none";

    // Lesson Plans
    const lesson_plans = document.createElement("a");
    lesson_plans.id = "grade10LessonPlansID";
    lesson_plans.textContent = "Lesson Plans";
    grade_10_div.appendChild(lesson_plans);

    const br1 = document.createElement("br")
    grade_10_div.appendChild(br1)

    // Worksheets
    const worksheets = document.createElement("a");
    worksheets.id = "grade8WorksheetsID";
    worksheets.textContent = "Worksheets";
    grade_10_div.appendChild(worksheets);

    const br2 = document.createElement("br")
    grade_10_div.appendChild(br2);

    // Summaries
    const summaries = document.createElement("a");
    summaries.id = "grade10SummariesID";
    summaries.textContent = "Summaries";
    grade_10_div.append(summaries);

    const br3 = document.createElement("br")
    grade_10_div.appendChild(br3);

    // Test Papers
    const test_papers = document.createElement("a");
    test_papers.id = "grade10TestPapersID";
    test_papers.textContent = "Test Papers";
    grade_10_div.appendChild(test_papers);

    const br4 = document.createElement("br");
    grade_10_div.appendChild(br4);
    
    // Videos
    const videos = document.createElement("a");
    videos.id = "grade10Videos";
    videos.textContent = "Videos"
    grade_10_div.appendChild(videos)

    const br5 = document.createElement("br");
    grade_10_div.appendChild(br5);
    const br6 = document.createElement("br");
    grade_10_div.appendChild(br6);

    // Back Button
    const back = document.createElement("a");
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

function graad_8_div(){
    const mainpage = document.getElementById("mainEnglishDivID")
    const language = document.getElementById("languageDivID")
    const graad_8_div = document.createElement("div");
    graad_8_div.id = "graad8DivID";
    graad_8_div.style = "display: none";

    // Lesson Plans
    const lesson_plans = document.createElement("a");
    lesson_plans.id = "graad8LessonPlansID";
    lesson_plans.textContent = "Lesson Plans";
    graad_8_div.appendChild(lesson_plans);

    const br1 = document.createElement("br")
    graad_8_div.appendChild(br1)

    // Worksheets
    const worksheets = document.createElement("a");
    worksheets.id = "graad8WorksheetsID";
    worksheets.textContent = "Worksheets";
    graad_8_div.appendChild(worksheets);

    const br2 = document.createElement("br")
    graad_8_div.appendChild(br2);

    // Summaries
    const summaries = document.createElement("a");
    summaries.id = "graad8SummariesID";
    summaries.textContent = "Summaries";
    graad_8_div.append(summaries);

    const br3 = document.createElement("br")
    graad_8_div.appendChild(br3);

    // Test Papers
    const test_papers = document.createElement("a");
    test_papers.id = "graad8TestPapersID";
    test_papers.textContent = "Test Papers";
    graad_8_div.appendChild(test_papers);

    const br4 = document.createElement("br");
    graad_8_div.appendChild(br4);
    
    // Videos
    const videos = document.createElement("a");
    videos.id = "graad8Videos";
    videos.textContent = "Videos"
    graad_8_div.appendChild(videos)

    const br5 = document.createElement("br");
    graad_8_div.appendChild(br5);
    const br6 = document.createElement("br");
    graad_8_div.appendChild(br6);

    // Back Button
    const back = document.createElement("a");
    back.id = "graad8BackID";
    back.textContent = "Back";
    back.onclick = function(){
        graad_8_div.style = "display: none";
        language.style = "display: block";
        mainpage.style = "display: block";
    };
    graad_8_div.appendChild(back)

    body.appendChild(graad_8_div)
}

function graad_10_div(){
    const mainpage = document.getElementById("mainEnglishDivID")
    const language = document.getElementById("languageDivID")
    const graad_10_div = document.createElement("div");
    graad_10_div.id = "graad10DivID";
    graad_10_div.style = "display: none";

    // Lesson Plans
    const lesson_plans = document.createElement("a");
    lesson_plans.id = "graad10LessonPlansID";
    lesson_plans.textContent = "Lesson Plans";
    graad_10_div.appendChild(lesson_plans);

    const br1 = document.createElement("br")
    graad_10_div.appendChild(br1)

    // Worksheets
    const worksheets = document.createElement("a");
    worksheets.id = "graad8WorksheetsID";
    worksheets.textContent = "Worksheets";
    graad_10_div.appendChild(worksheets);

    const br2 = document.createElement("br")
    graad_10_div.appendChild(br2);

    // Summaries
    const summaries = document.createElement("a");
    summaries.id = "graad10SummariesID";
    summaries.textContent = "Summaries";
    graad_10_div.append(summaries);

    const br3 = document.createElement("br")
    graad_10_div.appendChild(br3);

    // Test Papers
    const test_papers = document.createElement("a");
    test_papers.id = "graad10TestPapersID";
    test_papers.textContent = "Test Papers";
    graad_10_div.appendChild(test_papers);

    const br4 = document.createElement("br");
    graad_10_div.appendChild(br4);
    
    // Videos
    const videos = document.createElement("a");
    videos.id = "graad10Videos";
    videos.textContent = "Videos"
    graad_10_div.appendChild(videos)

    const br5 = document.createElement("br");
    graad_10_div.appendChild(br5);
    const br6 = document.createElement("br");
    graad_10_div.appendChild(br6);

    // Back Button
    const back = document.createElement("a");
    back.id = "graad10BackID";
    back.textContent = "Back";
    back.onclick = function(){
        graad_10_div.style = "display: none";
        language.style = "display: block";
        mainpage.style = "display: block";
    };
    graad_10_div.appendChild(back)

    body.appendChild(graad_10_div)
}

///////////////
// Afrikaans //
///////////////

function main(){
    header_div();
    language_div();
    main_page_english_div();
    main_page_afrikaans_div();
    grade_8_div()
    grade_10_div()
    graad_8_div()
    graad_10_div()
}

main()
