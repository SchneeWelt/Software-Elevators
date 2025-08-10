window.addEventListener("DOMContentLoaded", () => 
        {
            if (window.innerWidth >= 768) 
                resizeListWidth();
        }
    );

function resizeListWidth()
{
   const divElements = document.querySelectorAll("section div");

    divElements.forEach(div => 
        {
            div.style.width = "18%";
        }
    );
}