const body = document.body;

function header_div(){
    const sitenameheader_div = document.createElement("div");
    sitenameheader_div.id = "siteNameHeaderDivID";
    body.appendChild(sitenameheader_div)

    const sitenameheader_title = document.createElement("h1");
    sitenameheader_title.id = "siteNameHeaderTitleID";
    sitenameheader_title.textContent = "Lafras Maths";
    sitenameheader_div.appendChild(sitenameheader_title);
    
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
    main_page_div();
}

main();

