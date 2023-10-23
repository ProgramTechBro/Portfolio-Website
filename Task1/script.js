///Animation of TypeWriter Text////
document.addEventListener("DOMContentLoaded", function () {
    const roleTextElement = document.getElementById("role-text");
    const roles = [
        "Web Developer",
        "Front-end Developer",
        "Flutter Developer",
        "Student"
    ];
    let roleIndex = 0;
    let textIndex = 0;

    function typeRoleText() {
        if (roleIndex < roles.length) {
            const role = roles[roleIndex];
            if (textIndex <= role.length) {
                if(roleTextElement!=null)
                {
                    roleTextElement.textContent = role.substring(0, textIndex);
                }
                
                textIndex++;
                setTimeout(typeRoleText, 100); 
            } else {
                setTimeout(eraseRoleText, 1000); 
            }
        } else {

            roleIndex = 0;
            setTimeout(typeRoleText, 1000); 
        }
    }

    function eraseRoleText() {
        if (textIndex >= 0) {
            const role = roles[roleIndex];
            roleTextElement.textContent = role.substring(0, textIndex);
            textIndex--;
            setTimeout(eraseRoleText, 50); 
        } else {
            roleIndex++;
            textIndex = 0;
            setTimeout(typeRoleText, 1000); 
        }
    }

    
    setTimeout(typeRoleText, 1000); 
});

// Function to animate a progress bar///

window.addEventListener("load", function () {
    fillProgressBar("html-progress", 90);
    fillProgressBar("css-progress", 55);
    fillProgressBar("java-progress", 80);
    fillProgressBar("boot-progress", 65);
    fillProgressBar("csharp-progress", 50);
    fillProgressBar("linq-progress", 55);
    fillProgressBar("sql-progress", 90);
    fillProgressBar("apis-progress", 80);
    // ... and other progress bars

    function fillProgressBar(targetId, targetWidth) {
        const progressBar = document.getElementById(targetId);
        let width = 0;

        const interval = setInterval(function () {
            if (width >= targetWidth) {
                clearInterval(interval);
            } else {
                width++;
                if(progressBar!=null)
                {
                    progressBar.style.width = width + "%";
                    progressBar.textContent = width + "%";
                }
                
            }
        }, 20);
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const infoDivs = document.querySelectorAll('.info-div');
    const infoContents = document.querySelectorAll('.info-content');

    // Add click event listener to all infoDivs
    infoDivs.forEach(function (infoDiv, index) {
        infoDiv.addEventListener('click', function () {
            if (infoContents[index].style.display === 'block') {
                infoContents[index].style.display = 'none';
                infoDiv.classList.remove('active');
            } else {
                infoContents[index].style.display = 'block';
                infoDiv.classList.add('active');
            }
        });
    });
});

