/** Dieses Skript verschiebt oder ordnet ein Paar Nodes 
 * neu an, wenn die Website über ein Handy gelesen wird.  
 * 
 * Es sind dabei nur Nodes aus der Nav Bar betroffen.
 */

window.addEventListener("DOMContentLoaded", () => 
        {
            if (window.innerWidth <= 768) 
                rearangeNavBarElements();
        }
    );

function rearangeNavBarElements()
{
    const linkBereich = document.querySelector(".link_bereich");
    const mobileTarget = document.querySelector(".section_titel");

    /* Wenn beide Nodes existieren, mache: */
    if (linkBereich && mobileTarget) 
    {
        const mobileLinks = linkBereich.cloneNode(true);

        let div = document.createElement("div");
        div.classList.add("mobile_links");
        div.innerHTML = mobileLinks.innerHTML;


        /* Die Kopierte Node aus der Nav Bar als Kind in die Section packen */ 
        mobileTarget.appendChild(div);

        /* Abschließend den Linkbereich aus der Nav Bar verstecken */
        linkBereich.style.display = "none";
    }
}