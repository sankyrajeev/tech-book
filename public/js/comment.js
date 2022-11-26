
const commentFormHandler = async function (event) {
    event.preventDefault();

    const post_id= document.querySelector('input[name="post-id"]').value;
    const comment = document.querySelector('textarea[name="comment-body"]').value;

    if (comment) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment,
                post_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload(); 
    }
}

document.querySelector('.comment')
.addEventListener('submit', commentFormHandler);



