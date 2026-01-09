document.querySelectorAll('.player').forEach(player => {
    player.addEventListener('click', () => {

        const videoId = player.dataset.video;

        player.innerHTML = `
            <iframe
                src="https://www.youtube-nocookie.com/embed/${videoId}"
                allow="encrypted-media"
                allowfullscreen>
            </iframe>
        `;
    });
});
