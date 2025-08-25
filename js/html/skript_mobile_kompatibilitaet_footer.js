/** Dieses Skript verschiebt oder ordnet ein Paar Nodes 
 * neu an, wenn die Website über ein Handy gelesen wird.  
 * 
 * Es sind dabei nur Nodes aus dem Footer betroffen.
 */

window.addEventListener("DOMContentLoaded", () => 
        {
            if (window.innerWidth <= 768) 
                rearangeFooterElements();
        }
    );

function rearangeFooterElements()
{
    const footer = document.querySelector("footer");

    footer.style.alignItems = "flex-start";
    footer.style.flexDirection = "row";
    footer.style.justifyContent = "space-between";

    footer.style.flexWrap = "wrap";
}