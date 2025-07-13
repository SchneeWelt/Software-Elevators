/** Das hier gespeicherte Script wird für die Datenschutzerklärung
 * und für das Impressum verwendet, um den dort dargestellten Text
 * ,in Abhängigkeit zur verwendeten Bildschirmgröße, unterschiedlich
 * breit darzustellen. 
 * Unterschieden wird zwischen Mobil und Desktop Ansicht. 
 * Damit das Skript funktioniert ist eine Struktur erforderlich
 * ,in welcher jeder Textblock in ein eigenes Div element gepackt
 * wird.  
 */


/** Folgende Funktion findet alle Div Elemente auf dieser Seite. 
 * Anschließend wird für diese die Breite festgelegt. Abhängig 
 * davon, ob ein Handy Bildschirm oder ein PC Bildschirm verwendet
 * wird, wird die breite des Divs angepasst.
 * 
 * Im Code wird für die deklaration von Variabeln const verwendet.
 * Let wird aus dem Grund vermieden, da const sicherstellt, dass 
 * der Variabel nicht erneut ein anderer Wert oder sogar ein anderer
 * Datentype zugewiesen werden kann. Das macht den Code weniger Fehler
 * anfällig. 
 */
function resizeDiv() 
{
    const section = document.querySelector("section");
    const divs = section.querySelectorAll("div");

    divs.forEach(div => 
        {
            // Prüfen, ob Bildschirm breiter als ein Handy Bildschirm mit 768px
            if (window.innerWidth > 768)
                div.style.width = "55%"; // Desktop-Ansicht
            else
                div.style.width = "100%"; // Mobile-Ansicht
        }
    );
}

// Funktion beim Laden und bei Größenänderung aufrufen
window.addEventListener("load", resizeDiv);
window.addEventListener("resize", resizeDiv);