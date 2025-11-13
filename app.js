//////////////////////////////////////////// HEADER START

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

////////////////////////////////////////// HEADER END



//////////////////////////////////////////HERO START

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show')
    })
}, { threshold: 0.3 })

document.querySelectorAll('.hidden').forEach(el => observer.observe(el))

document.querySelector('.hero-btn').addEventListener('click', () => {
    alert('Redirecting to ticket page...')
})
//////////////////////////////////////////HERO END


////////////////////////////////////////// VIDEO START
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);


var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'sQUI04ClZ0M',
        playerVars: { rel: 0, playsinline: 1, autoplay: 0, muted: 1, controls: 1, modestbranding: 1 },
        events: { onReady: onPlayerReady }
    });
}


function onPlayerReady() {
    var poster = document.getElementById('poster');
    poster.addEventListener('click', function () {
        player.unMute();
        player.playVideo();
        poster.classList.add('hidden');
    });


    var options = { root: null, rootMargin: '0px', threshold: [0, 0.5, 0.75] };
    var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.intersectionRatio >= .6) {
                player.mute();
                player.playVideo();
                poster.classList.add('hidden');
            } else {
                player.pauseVideo();
            }
        });
    }, options);


    obs.observe(document.getElementById('videoSection'));


    document.addEventListener('visibilitychange', function () {
        if (document.hidden) { player.pauseVideo(); }
    });
}
////////////////////////////////////////// VIDEO END

////////////////////////////////////////// TEACHERS START
$(document).ready(function () {
    const slider = $(".beans-slider");
    const cards = $(".beans-card");
    let position = 0;

    $(".beans-next").click(function () {
        const cardWidth = cards.first().outerWidth(true);
        const maxScroll = -(slider[0].scrollWidth - slider.parent().width());
        position -= cardWidth;
        if (position < maxScroll) position = 0;
        slider.css("transform", `translateX(${position}px)`);
    });

    $(".beans-prev").click(function () {
        const cardWidth = cards.first().outerWidth(true);
        position += cardWidth;
        if (position > 0) position = -(slider[0].scrollWidth - slider.parent().width());
        slider.css("transform", `translateX(${position}px)`);
    });
});

////////////////////////////////////////// TEACHERS END




////////////////////////////////////////// COMMENTS START
const scrollBox = document.getElementById('scrollBox');

const students = [
    { img: 'https://randomuser.me/api/portraits/men/10.jpg', user: 'Liam', text: 'This acting course has completely improved my skills. Amazing teachers!' },
    { img: 'https://randomuser.me/api/portraits/women/11.jpg', user: 'Emma', text: 'I feel so confident on stage now, my improvisation has improved a lot.' },
    { img: 'https://randomuser.me/api/portraits/men/12.jpg', user: 'Noah', text: 'The practical exercises are very helpful. Each class is a new experience.' },
    { img: 'https://randomuser.me/api/portraits/women/13.jpg', user: 'Olivia', text: 'Support and motivation from the teachers are incredible. Highly recommended!' },
    { img: 'https://randomuser.me/api/portraits/men/14.jpg', user: 'Elijah', text: 'I used to feel stiff on stage, now I feel completely different.' },
    { img: 'https://randomuser.me/api/portraits/women/15.jpg', user: 'Ava', text: 'The course is very interactive. I learned so much with other students.' },
    { img: 'https://randomuser.me/api/portraits/men/16.jpg', user: 'James', text: 'My dramatic expressions and improvisation have improved a lot.' },
    { img: 'https://randomuser.me/api/portraits/women/17.jpg', user: 'Sophia', text: 'Every session is engaging and helps me grow as an actor.' },
    { img: 'https://randomuser.me/api/portraits/men/18.jpg', user: 'Benjamin', text: 'I feel much more confident delivering lines now.' },
    { img: 'https://randomuser.me/api/portraits/women/19.jpg', user: 'Isabella', text: 'The exercises are challenging but very rewarding.' },
    { img: 'https://randomuser.me/api/portraits/men/20.jpg', user: 'Lucas', text: 'I loved learning new acting techniques and stage presence.' },
    { img: 'https://randomuser.me/api/portraits/women/21.jpg', user: 'Mia', text: 'This course gave me the courage to perform in front of audiences.' },
    { img: 'https://randomuser.me/api/portraits/men/22.jpg', user: 'Mason', text: 'I improved my emotional expression and timing in scenes.' },
    { img: 'https://randomuser.me/api/portraits/women/23.jpg', user: 'Charlotte', text: 'Friendly teachers and great feedback on every performance.' },
    { img: 'https://randomuser.me/api/portraits/men/24.jpg', user: 'Ethan', text: 'Highly professional course. I learned more than I expected.' }
];

students.forEach(s => {
    const div = document.createElement('div');
    div.className = 'box-item';
    div.innerHTML = `
    <div class="comment-wrapper">
      <img src="${s.img}" class="profile-img">
      <div class="comment-content">
        <div class="username">${s.user}</div>
        <div class="text">${s.text}</div>
      </div>
    </div>
  `;
    scrollBox.appendChild(div);
});

const items = document.querySelectorAll('.box-item');

function checkFocus() {
    const boxRect = scrollBox.getBoundingClientRect();
    const center = boxRect.top + boxRect.height / 2;
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(center - itemCenter);
        if (distance < rect.height / 2) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

let ticking = false;

scrollBox.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            checkFocus();
            ticking = false;
        });
        ticking = true;
    }
});

checkFocus();

////////////////////////////////////////// COMMENTS END
