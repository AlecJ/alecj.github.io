const app = Vue.createApp({
    data() {
        return {
            
            about_me: "My name is Alec Jordan. I am a Full-Stack Developer. I like making youtube videos and web-apps, skiing, and playing video and board games with my friends! I graduated with a degree in Computer Science from Northeastern University in 2018. I'm skilled in Python, Flask, Django, Javascript, VueJS, ReactJS, and Docker. I'm also learning Unity and Level Design. ",
            resume_link: 'assets/Alec Jordan Resumé  (2022).pdf',
            show_resume: false,
            bio_photo_link: 'assets/images/photo.jpg',
            project_one_name: "This Portfolio!",
            project_one_photo_link: 'assets/images/portfolio.png',
            project_one_bio: "This site was built with VueJS. I wanted to learn Vue and sharpen my html/css skills. I also learned CSS Grid while making this site, in lieu of flexbox which I usually use. The focuses were on creating a responsive site with CSS Grid (take a look at it in mobile!) and finally having a place to display my projects as I apply to jobs. I used some animations (header and background waves), embedded twitter and instagram, and made a lightbox viewer to expand project photos.",
            project_one_github_link: 'https://github.com/AlecJ/alecj.github.io',
            project_two_name: "De_Bug",
            project_two_photo_link: 'assets/images/de_bug.png',
            project_two_steam_link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554449852',
            project_two_bio: "My first complete level created for Counter-Strike: Global Offensive. I've messed around with the hammer editor for many years, often creating deathmatch or mini-game levels. I began by sketching the level; the first part of the level I designed was actually the garage, featuring a spawn to spawn duel from opposing ramps. The garage itself features many 1v1 level elements to create a unique and exciting start to each round. Click on this project to see more about the design.",
            project_three_name: "RPG Manager",
            project_three_photo_link: 'assets/images/rpgmanager.png',
            project_three_heroku_link: 'https://alecj-phnx.herokuapp.com/rpgmanager',
            project_three_github_link: 'https://github.com/AlecJ/rpgmanager',
            project_three_bio: "A Flask / ReactJS Webapp I built for my friend who was running a Dungeon and Dragons' campaign for my friends. It allows dungeon masters to keep track of their party's characters including currency, items, and notes.",
            selected_img_id: null,
        }
    },
    methods: {
        expandPicture(num) {
            if (num >= 1 && num <= 3) {
                this.selected_img_id = num
            } else {
                this.selected_img_id = null;
            }
        },
        show_or_hide_resume(bool) {
            if (bool || !bool) {
                this.show_resume = bool
            }
        }
    }
})