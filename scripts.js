document.getElementById('fitness-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const goal = document.getElementById('goal').value;
    const level = document.getElementById('level').value;
    const planResult = document.getElementById('plan-result');
    planResult.innerHTML = `<p>Your personalized fitness plan for a ${level} level aiming for ${goal} goal will be generated here.</p>`;
});

document.getElementById('post-button').addEventListener('click', function() {
    const postContent = document.getElementById('forum-post').value;
    if (postContent) {
        const posts = document.getElementById('posts');
        const newPost = document.createElement('div');
        newPost.textContent = postContent;
        posts.appendChild(newPost);
        document.getElementById('forum-post').value = '';
    }
});

document.getElementById('track-button').addEventListener('click', function() {
    const progress = document.getElementById('goal-progress').value;
    const progressResult = document.getElementById('progress-result');
    if (progress >= 0 && progress <= 100) {
        progressResult.innerHTML = `<p>Your current progress is ${progress}%.</p>`;
    } else {
        progressResult.innerHTML = `<p>Please enter a valid percentage between 0 and 100.</p>`;
    }
});
