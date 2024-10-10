const body = document.body;
var lang = "English"

const jsonString = '{"Afrikaans": {"Graad 08": {"Les planne": {"Kwartaal 1": 0, "Kwartaal 2": 0, "Kwartaal 3": 0, "Kwartaal 4": ["Lesplan Gr 8 Wiskunde Grafieke.pdf", "Lesplan Gr. 8 Wiskunde   Omtrek en Oppervlakte.pdf", "Lesplan Gr. 8 Wiskunde  Pythagoras.pdf"]}, "Opsommings": {"Kwartaal 1": 0, "Kwartaal 2": 0, "Kwartaal 3": ["1728275649807.jpg", "IMG_20241007_172225.jpg"], "Kwartaal 4": ["Gr 8 - Kwartaal 1&2 Wiskunde.pdf", "Gr 8 Algebra (1).pdf", "Gr 8 Algebra Bundle Kw 3 (1).pdf", "Gr 8 Breuke Fractions (1) 8.1.5.pdf", "Gr 8 Breuke Fractions (1) 8.1.5b.pdf", "Gr 8 Breuke Fractions (2) 8.1.6 (1).pdf", "Gr 8 Breuke Fractions (2) 8.1.6b.pdf", "Gr 8 Breuke Fractions (3) 8.1.7.pdf", "Gr 8 Breuke Fractions (4) 8.1.8.pdf", "Gr 8 Breuke Fractions (5) 8.1.9.pdf", "Gr 8 Eksponente exponents (1) 8.2.1.pdf", "Gr 8 Eksponente exponents (2) 8.2.2.pdf", "Gr 8 Eksponente exponents (3) 8.2.3.pdf", "Gr 8 Eksponente Exponents (4) 8.2.4.pdf", "Gr 8 Eksponente Exponents (5) 8.2.5.pdf", "Gr 8 Finansies Finance (1) 8.1.3 (1).pdf", "Gr 8 Finansies Finance (2) 8.1.4.pdf", "Gr 8 Getalpatrone Nr patterns (1) 8.2.6.pdf", "Gr 8 Koers Rate 8.1.3b.pdf", "Gr 8 Meetkunde 1 2024-07-19 12_58_23 (2).pdf", "Gr 8 Meetkunde 2 Copy (1).pdf", "Gr 8 Omtr Opp Per Area (2)8.3.8 (1).pdf", "Gr 8 Pythagoras 8.3.9 (1).pdf", "Gr 8 Telgetalle Whole nr (2) 8.1.2.pdf", "Gr 8 Telgetalle Whole nrs (2) 8.1.2.pdf", "Gr 8 Verhoudings ratios 8.1.3.pdf", "Gr 8.1.1 Telgetalle Whole numbers (1) (1).pdf", "Gr 8Algebra (2) 8.3.2.pdf", "Note 14 Aug 2023.pdf", "Stelling van Pythagoras.pdf", "Untitled spreadsheet.xlsx"]}, "Toets Papiere": {"Kwartaal 1": 0, "Kwartaal 2": 0, "Kwartaal 3": 0, "Kwartaal 4": 0}, "Werkkaarte": {"Kwartaal 1": ["Gr 8 - Kwartaal 1&2 Wiskunde.pdf"], "Kwartaal 2": ["Gr 8 - Kwartaal 1&2 Wiskunde.pdf"], "Kwartaal 3": ["Gr 8 - Kwartaal 3 - Wiskunde.pdf"], "Kwartaal 4": ["Gr 8 - Kwartaal 4 - Wiskunde hersiening.pdf"]}}, "Graad 10": 0}, "English": {"Grade 08": {"Lesson plans": {"Term 1": 0, "Term 2": 0, "Term 3": 0, "Term 4": ["Lesson Plan Gr 8 Mathematics Graphs.pdf", "Maths Gr  PYTHAGORAS.pdf", "Maths Gr.8  Perimeter and Area of 2 D Shapes.pdf"]}, "Summaries": {"Term 1": ["Gr 8 Breuke Fractions (1) 8.1.5.pdf", "Gr 8 Breuke Fractions (1) 8.1.5b.pdf", "Gr 8 Breuke Fractions (2) 8.1.6 (1).pdf", "Gr 8 Breuke Fractions (2) 8.1.6b.pdf", "Gr 8 Breuke Fractions (3) 8.1.7.pdf", "Gr 8 Breuke Fractions (4) 8.1.8.pdf", "Gr 8 Breuke Fractions (5) 8.1.9.pdf", "Gr 8 Finansies Finance (1) 8.1.3 (1).pdf", "Gr 8 Finansies Finance (2) 8.1.4.pdf", "Gr 8 Koers Rate 8.1.3b.pdf", "Gr 8 Telgetalle Whole nr (2) 8.1.2.pdf", "Gr 8 Telgetalle Whole nrs (2) 8.1.2.pdf", "Gr 8 Verhoudings ratios 8.1.3.pdf", "Gr 8.1.1 Telgetalle Whole numbers (1) (1).pdf"], "Term 2": ["Gr 8 Eksponente exponents (1) 8.2.1.pdf", "Gr 8 Eksponente exponents (2) 8.2.2.pdf", "Gr 8 Eksponente exponents (3) 8.2.3.pdf", "Gr 8 Eksponente Exponents (4) 8.2.4.pdf", "Gr 8 Eksponente Exponents (5) 8.2.5.pdf", "Gr 8 Getalpatrone Nr patterns (1) 8.2.6.pdf", "Note 14 Aug 2023.pdf"], "Term 3": ["Gr 8 Algebra (1).pdf", "Gr 8 Algebra Bundle Kw 3 (1).pdf", "Gr 8 Meetkunde 1 2024-07-19 12_58_23 (2).pdf", "Gr 8 Meetkunde 2 Copy (1).pdf", "Gr 8Algebra (2) 8.3.2.pdf", "Parallel_Lines_A3.pdf"], "Term 4": ["Gr 8 Algebra (1).pdf", "Gr 8 Algebra Bundle Kw 3 (1).pdf", "Gr 8 Breuke Fractions (1) 8.1.5.pdf", "Gr 8 Breuke Fractions (1) 8.1.5b.pdf", "Gr 8 Breuke Fractions (2) 8.1.6 (1).pdf", "Gr 8 Breuke Fractions (2) 8.1.6b.pdf", "Gr 8 Breuke Fractions (3) 8.1.7.pdf", "Gr 8 Breuke Fractions (4) 8.1.8.pdf", "Gr 8 Breuke Fractions (5) 8.1.9.pdf", "Gr 8 Eksponente exponents (1) 8.2.1.pdf", "Gr 8 Eksponente exponents (2) 8.2.2.pdf", "Gr 8 Eksponente exponents (3) 8.2.3.pdf", "Gr 8 Eksponente Exponents (4) 8.2.4.pdf", "Gr 8 Eksponente Exponents (5) 8.2.5.pdf", "Gr 8 Finansies Finance (1) 8.1.3 (1).pdf", "Gr 8 Finansies Finance (2) 8.1.4.pdf", "Gr 8 Getalpatrone Nr patterns (1) 8.2.6.pdf", "Gr 8 Koers Rate 8.1.3b.pdf", "Gr 8 Meetkunde 1 2024-07-19 12_58_23 (2).pdf", "Gr 8 Meetkunde 2 Copy (1).pdf", "Gr 8 Omtr Opp Per Area (2)8.3.8 (1).pdf", "Gr 8 Pythagoras 8.3.9 (1).pdf", "Gr 8 Telgetalle Whole nr (2) 8.1.2.pdf", "Gr 8 Telgetalle Whole nrs (2) 8.1.2.pdf", "Gr 8 Verhoudings ratios 8.1.3.pdf", "Gr 8.1.1 Telgetalle Whole numbers (1) (1).pdf", "Gr 8Algebra (2) 8.3.2.pdf", "Note 14 Aug 2023.pdf"]}, "Test Papers": {"Term 1": 0, "Term 2": 0, "Term 3": ["Graad 8_Wisk (2) (2).pdf"], "Term 4": ["2015 ANA Graad 8 Wiskunde Toets (2).pdf", "Gr8_Nov_Wiskunde_eksamenvraestel_Marise_Oberholzer (1) (1).pdf", "Gr8_Nov_Wiskunde_eksamenvraestel_Marise_Oberholzer (1) (2).pdf", "Math P1 2018 November Memo_hlayiso.com_.pdf", "Math P1 2018 November_hlayiso.com_.pdf", "Math P1 2019 November_hlayiso.com_-1.pdf", "Math P1 2019 November_hlayiso.com_.pdf", "November_Exam_2015_Grade_8 (1).pdf"]}, "Worksheets": {"Term 1": 0, "Term 2": ["Numeriese en meetkundige patrone.pdf", "worksheet_8_-_algebraic_expressions_term_2 (5).pdf", "worksheet_9_-_algebraic_equations_term_2 (5).pdf"], "Term 3": ["2D Vorms.pdf", "Driehoeke.pdf", "Kongruensie en gelykvormigheid (2).pdf", "Lyne en hoeke.pdf", "Meetkunde - Vierhoeke.pdf", "Meetkunde van 2D-vorms.pdf", "Worksheet-12-Geometry-of-straight-lines (1).pdf", "worksheet_11_-_Geometry_of_2D_shapes_grade_8_term (1).pdf"], "Term 4": ["Gr 8 - Kwartaal 4 - Wiskunde hersiening.pdf", "Grade 8 - Mathmatics.pdf", "Oppervlakte en omtrek (1).pdf", "Oppervlakte en Omtrek van 2D-Vorms.pdf", "Sirkels.pdf", "Stelling van Pythagoras.pdf", "worksheet-15-Pythagoras (1).pdf", "Worksheet-16-Area-and-Perimeter-of-2D-shapes.pdf"]}}, "Grade 10": 0}}'
let files = JSON.parse(jsonString)

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
    const mainPageEnglish = document.getElementById("EnglishDiv");
    const mainPageAfrikaans = document.getElementById("AfrikaansDiv");
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

function create_main_divs(){
    const languages = Object.keys(files)

    for(let i = 0; i < languages.length; i++){
        const buttonList = Object.keys(files[languages[i]])
        const div = document.createElement("div")
        div.id = languages[i] + "Div"
        if (languages[i] == "Afrikaans"){
            div.style = "display: none";
        }

        for(let a = 0; a < buttonList.length; a++){
            const button = document.createElement("button");
            button.textContent = buttonList[a];
            if (files[languages[i]][buttonList[a]] == 0){
                button.disabled = true;
            }
            const identity = languages[i] + buttonList[a] + "Div"
            button.onclick = function(){
                div.style.display = "none";
                document.getElementById("languageDivID").style.display = "none"
                document.getElementById(identity).style.display = "block";
            }
            div.appendChild(button);
            
            const br = document.createElement("br");
            div.appendChild(br);
        }
        body.appendChild(div);

        create_level_1_divs(languages[i])
    }
}

function create_level_1_divs(lang){
    const folders_list = Object.keys(files[lang]);
    for (let i = 0; i < folders_list.length; i++){
        const div = document.createElement("div");
        div.style.display = "none"
        const identity = lang + folders_list[i] + "Div"
        div.id = identity;

        if (files[lang][folders_list[i]] != 0){
            const buttonList = Object.keys(files[lang][folders_list[i]])
            for (let a = 0; a < buttonList.length; a++){
                const button = document.createElement("button");
                button.textContent = buttonList[a]
                button.onclick = function(){
                    div.style.display = "none";
                    document.getElementById(lang + folders_list[i] + buttonList[a] +"Div").style.display = "block"
                }
                if (files[lang][folders_list[i]][buttonList[a]] == 0){
                    button.disabled = true
                }
                div.appendChild(button)
                const br = document.createElement("br")
                div.appendChild(br)
            }
        }
    const br2 = document.createElement("br")
    div.appendChild(br2)
    const button_language = lang;
    const back = document.createElement("button");
    back.onclick = function(){
        div.style.display = "none";
        document.getElementById("languageDivID").style.display = "block"
        document.getElementById(lang + "Div").style.display = "block";
    }
    if(lang == "Afrikaans"){
        back.textContent = "Terug";
    }
    else{
        back.textContent = "Back";
    }
    div.appendChild(back)
        
    body.appendChild(div)

    create_level_2_divs(lang, folders_list[i])
    }
}

function create_level_2_divs(lang, level_1){
    const folders_list = Object.keys(files[lang][level_1]);
    for (let i = 0; i < folders_list.length; i++){
        const div = document.createElement("div");
        div.style.display = "none"
        const identity = lang + level_1 + folders_list[i] + "Div"
        div.id = identity;

        if (files[lang][level_1][folders_list[i]] != 0){
            const buttonList = Object.keys(files[lang][level_1][folders_list[i]])
            for (let a = 0; a < buttonList.length; a++){
                const button = document.createElement("button");
                button.textContent = buttonList[a]
                button.onclick = function(){
                    div.style.display = "none";
                    document.getElementById(lang + level_1 + folders_list[i] + buttonList[a] +"Div").style.display = "block"
                }
                if (files[lang][level_1][folders_list[i]][buttonList[a]] == 0){
                    button.disabled = true
                }
                div.appendChild(button)
                const br = document.createElement("br")
                div.appendChild(br)
            }
        }
    const br2 = document.createElement("br")
    div.appendChild(br2)
    const button_language = lang;
    const back = document.createElement("button");
    back.onclick = function(){
        div.style.display = "none";
        document.getElementById(lang + level_1 + "Div").style.display = "block";
    }
    if(lang == "Afrikaans"){
        back.textContent = "Terug";
    }
    else{
        back.textContent = "Back";
    }
    div.appendChild(back)
        
    body.appendChild(div)

    create_level_3_divs(lang, level_1, folders_list[i])
    }
}

function create_level_3_divs(lang, level_1, level_2){
    const folders_list = Object.keys(files[lang][level_1][level_2]);
    for (let i = 0; i < folders_list.length; i++){
        const div = document.createElement("div");
        div.style.display = "none"
        const identity = lang + level_1 + level_2 + folders_list[i] + "Div"
        div.id = identity;

        if (files[lang][level_1][level_2][folders_list[i]] != 0){
            const downloadList = files[lang][level_1][level_2][folders_list[i]]
            for (let a = 0; a < downloadList.length; a++){
                const link = document.createElement("a");
                link.textContent = downloadList[a]
                link.onclick = function(){
                    ref = "Files/" + lang + "/" + level_1 + "/"  + level_2 + "/"  + folders_list[i] + "/"  + downloadList[a]
                    link.href = ref
                }
                if (files[lang][level_1][level_2][folders_list[i]][downloadList[a]] == 0){
                    link.disabled = true
                }
                div.appendChild(link)
                const br = document.createElement("br")
                div.appendChild(br)
                const hr = document.createElement("hr")
                div.appendChild(hr)
            }
        }
    const br2 = document.createElement("br")
    div.appendChild(br2)
    const button_language = lang;
    const back = document.createElement("button");
    back.onclick = function(){
        div.style.display = "none";
        document.getElementById(lang + level_1 + level_2 + "Div").style.display = "block";
    }
    if(lang == "Afrikaans"){
        back.textContent = "Terug";
    }
    else{
        back.textContent = "Back";
    }
    div.appendChild(back)
        
    body.appendChild(div)
    }
}



function main(){
    header_div();
    language_div();
    create_main_divs();
    //alert(Object.keys(files["Afrikaans"]))
}

main();

