const articles = [
    {
        title: "Vil du ha lenger salgstider på alkohol? ",
    },
    {
        content: "Forslaget til Halden Kommune vil gi dagligvaregigantene Kiwi og Meny et nei til å " +
                 "utvide salgstidene for alkohol og nettsalg av alkohol. Nå skal politikerne få avgjøre " +
                 "om det blir fest eller ei for næringslivet. ",
    },
    {
        content: "Kiwi Halden har søkt om å få utvide salgstidene for alkohol i sine butikker. Meny " +
                 "vil bedrive nettsalg av alkohol. Halden kommune har derimot kommet med et forslag " +
                 "om å opprettholde tre forbud som allerede gjelder salg av alkohol i Halden. I det " +
                 "neste kommunestyret 19.september, vil saken være oppe til diskusjon for politikerne."
    },
    {
        content: "I en kort telefonsamtale sier Halden-Ordfører Fredrik Holm (H) at det er Håvard Tafjord " +
                 "som skal svare for partiet deres. Tafjord (H) sier at medlemmene i partiet deres ikke " +
                 "er helt enige når det gjelder lokal alkoholpolitikk, men at det vil være delte meninger " +
                 "som både er for og imot et slikt forbud. Det skal være mulig med en mer liberal " +
                 "alkoholpolitikk, og fortsatt begrense helseskader.",
    },
    {
        title: "Halden kommune sitt saksfremlegg foreslår å opprettholde tre forbud mot salg av alkohol " +
               "i Halden. Og med forbudene får ikke Kiwi utvide salgstidene for alkohol, og Meny får ikke " +
               "bedrive nettsalg. Hva tenker Høyre om det? ",
        content: "Det har ikke vi i Høyre diskutert enda, det skal diskuteres på forberedende møte. " +
                 "Men jeg vet at vi vil ha veldig ulike synspunkter på det. Noen medlemmer ønsker en " +
                 "restriktiv alkoholpolitikk som ikke ønsker å utvide salgstider. Men vi har også andre " +
                 "medlemmer som tenker at begge deler vil være ålreit."
    },
    {
        title: "Alkohol kan være svært helseskadelig og disse forbudene er opprettet på bakgrunn av " +
               "alkohollovens mål om å begrense helseskader, vil det da ikke være hensiktsmessig å " +
               "opprettholde disse forbudene? ",
        content: "Jo, det kan du godt si. På en annen side setter alkoholloven noen rammer for hva som " +
                 "gjelder alkoholsalg. Det er mulig å ha en mer liberal alkoholpolitikk enn dagens, og " +
                 "likevel være innenfor grensene som alkoholloven setter opp og fortsatt jobbe for å " +
                 "begrense helseskader.",
    },
    {
        content: "Dagfinn Stærk, lokallagsleder i KrF Halden sier derimot på den andre siden at det er " +
                 "viktig og nødvendig med et forslag om å opprettholde forbudene, han sier at KrF Halden " +
                 "helt og holdent støtter oppom forslaget til kommunen."
    }
];


function getArticles() {
    articles.forEach((article, index) => {
        const article_element = document.getElementById(`article-${index + 1}`);
        if (article_element ) {
            const content_div= document.createElement("div");
            content_div.className="article-container"
            const title = document.createElement("h1");
            title.textContent= article.title;
            content_div.appendChild(title);

            
        
            const content= document.createElement("p");
            content.textContent=article.content;
            content_div.appendChild(content)
            if (article.imgs) {
                const images = document.createElement("img");
                images.src = article.imgs;
                images.alt = article.title;
                images.classList.add("article-image");
                content_div.appendChild(images);
            }
        
            article_element.appendChild(content_div)
        }
    
       
    });

   
}
getArticles();
