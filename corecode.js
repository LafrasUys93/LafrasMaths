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

function language_div(){
    const titletext = document.getElementById("siteNameHeaderTitleID")

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
    english_radio.onclick = function() { 
        chooseLanguage('English');
        titletext.textContent = "Lafras Maths"

    };
    english_label.appendChild(english_radio);
    english_label.appendChild(document.createTextNode("English"));

    const afrikaans_label = document.createElement("label");
    const  afrikaans_radio = document.createElement("input");
    afrikaans_radio.type = "radio";
    afrikaans_radio.name = "language";
    afrikaans_radio.value = "Afrikaans";
    afrikaans_radio.checked = false;
    afrikaans_radio.onclick = function() { 
        chooseLanguage('Afrikaans');
        titletext.textContent = "Lafras Wiskunde"
    };
    afrikaans_label.appendChild(afrikaans_radio)
    afrikaans_label.appendChild(document.createTextNode("Afrikaans"))

    language_form.appendChild(english_label);
    language_form.appendChild(afrikaans_label);
}

function chooseLanguage(language){
    const radios =document.querySelectorAll('input[name="language"]');
    radios.forEach(radio => {
        if (radio.value !== language) {
            radio.checked = false;
        }
    });
}

function main_page_div(){
    const main_div = document.createElement("div");
    main_div.id = "mainDivID";
    body.appendChild(main_div);

    const gr8_link = document.createElement("a");
    gr8_link.id = "gr8LinkID";
    gr8_link.textContent ="Grade/Graad 8";
    main_div.appendChild(gr8_link);

    const br1 = document.createElement("br")
    main_div.appendChild(br1)

    const gr10_link = document.createElement("a");
    gr10_link.id = "gr10LinkID";
    gr10_link.textContent ="Grade/Graad 10";
    main_div.appendChild(gr10_link);
}

function main(){
    header_div();
    language_div();
    main_page_div();
}

main();

